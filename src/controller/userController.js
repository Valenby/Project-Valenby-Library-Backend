// crud user
const {userModel} = require('../model');

// create user
exports.createUser = async (req, res) => {
    console.log('-> method createUser');

    const newUser = {
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
            message: error.message
        }
        res.status(400).json(errorMesage);
        return
    }

};
