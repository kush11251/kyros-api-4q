const keyModels = require('../models/key.js');
const generateKey = async (req, res) => {
    const key = new keyModels.Key({userId: req.body.userId});
    await key.save();
    res.send('Key generated successfully');
};
module.exports.generateKey = generateKey;