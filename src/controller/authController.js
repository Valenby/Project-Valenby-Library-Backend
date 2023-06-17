//token para autenticacion usuario
const JWT = require("jsonwebtoken");

const {userModel} = require('../model');

exports.login = async (req, res) => {

  try {
    const { email, password } = req.body;
    const user = await userModel.login(email, password);
    
    if(!user) {
      res.status(401).json({error: "user / password not exists"});
      return
    }
    
    //llave del token_ creamos token
    const token = JWT.sign(
      { email: user.email, role: user.role, userId: user._id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "2h" }
    )
    
    res.json({token, email: user.email, name: user.name});

  } catch (e) {
    console.error(e);
    res.send(e);
  }
};
