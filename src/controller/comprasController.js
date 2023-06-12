const {compraModel} = require('../model');

// list compras.
exports.getCompras = async (_,res) => {
    console.log(' -> method getCompras');
    const result = await compraModel.find().populate("user");
    res.json(result);
};
