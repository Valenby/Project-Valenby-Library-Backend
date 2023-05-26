//para comprobar que el servidor funcione

exports.healthCheck = (_, res) => {
    res.json({ status: 'ok'});
};