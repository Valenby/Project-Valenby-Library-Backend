const jwt = require('jsonwebtoken');

const validateAdminToken = (req, res, next) => {
  // Obtén el token de la cabecera de autorización
  const token = req.headers.authorization;

  // Verifica si el token está presente
  if (!token) {
    return res.status(401).json({ message: 'Token no proporcionado' });
  }

  try {
    // Decodifica el token
    const decodedToken = jwt.decode(token)
 
    if (decodedToken.exp <= Date.now() / 1000) {
      return res.status(403).json({ message: 'El token ha expirado' });
    }

    if(decodedToken.role != "admin") {
      return res.status(403).json({ message: 'Solo administradores pueden ejecutar esta accion' });
    }
    // Verifica el token
    jwt.verify(token, process.env.JWT_SECRET_KEY);

    // le agregamos el id del usuario a la peticion que ya viene con el token
    req.headers.userId = decodedToken.userId;

    // El token es válido
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token inválido' });
  }
};

module.exports = { validateAdminToken };
