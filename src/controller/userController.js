// crud user
const {userModel} = require('../model');

// create book
exports.createUser = async (req, res) => {
    console.log('-> method createUser');

    const newUser = {
        email: req.body.email,
        password: req.body.password
    }
    const result = await userModel.create(newUser);

    res.json(result)
};
