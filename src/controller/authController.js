//token para autenticacion usuario
const JWT = require("jsonwebtoken");

const {userModel} = require('../model');

exports.login = async (req, res) => {

  try {
    const { email, password } = req.body;
    const user = await userModel.login(email, password);
    
    if(!user) {
      res.json({error: "user / password not exists"});
      return
    }
    
    //llave del token_ creamos token
    const token = JWT.sign(
      { email: user.email, role: user.role, userId: user._id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "10m" }
    )
    
    res.json({token, email: user.email});

  } catch (e) {
    console.error(e);
    res.send(e);
  }
};
