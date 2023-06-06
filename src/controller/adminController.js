// crud user
const {userModel} = require('../model');

// create admin
exports.createUserAdmin = async (req, res) => {
    console.log('-> method createUserAdmin');

    const newUser = {
        email: req.body.email,
        password: req.body.password,
        role: 'admin'
    }
    const result = await userModel.create(newUser);

    res.json(result)
};