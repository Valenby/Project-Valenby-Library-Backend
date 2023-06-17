// crud user
const {userModel} = require('../model');

// create user
exports.createUser = async (req, res) => {
    console.log('-> method createUser');

    const newUser = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
    }

    try {
        const result = await userModel.create(newUser);
        result.password = undefined
        res.json(result)
    } catch (error) {
        //error server, usuario duplicado, etc
        const errorMesage = {
            message: 'El usuario ya existe'
        }

        res.status(400).json(errorMesage);
        return
    }

};
