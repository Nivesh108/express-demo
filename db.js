const mongoose = require('mongoose');
const Schema = new mongoose.Schema({
    name: {type: String , default:'NA'},
    age: {type: Number , default:0}
});
module.exports = mongoose.model('User', Schema);