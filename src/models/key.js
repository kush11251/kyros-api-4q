const mongoose = require('mongoose');
const keySchema = new mongoose.Schema({
    userId: String
});
const Key = mongoose.model('Key', keySchema);
module.exports.Key = Key;