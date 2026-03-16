const bcrypt = require('bcrypt');
const userModels = require('../models/user.js');
const createUser = async (req, res) => {
    const HashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new userModels.User({name: req.body.name, password: HashedPassword});
    await user.save();
    res.send('User created successfully');
};
module.exports.createUser = createUser;