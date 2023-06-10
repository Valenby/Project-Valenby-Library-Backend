const jwt = require('jsonwebtoken');

const validateToken = (req, res, next) => {
  // Obtén el token de la cabecera de autorización
  const token = req.headers.authorization;

  // Verifica si el token está presente
  if (!token) {
    return res.status(401).json({ message: 'Token no proporcionado' });
  }

  try {

    const decodedToken = jwt.decode(token)
    console.log(decodedToken)

 
    if (decodedToken.exp <= Date.now() / 1000) {
      return res.status(403).json({ message: 'El token ha expirado' });
    }
    // Verifica y decodifica el token
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);



    // El token es válido
    next();
  } catch (error) {
    // console.log(error)
    // Ocurrió un error al verificar el token
    return res.status(401).json({ message: 'Token inválido' });
  }
};

module.exports = { validateToken };
