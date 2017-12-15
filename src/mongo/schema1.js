
require('./config')
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const banco = new Schema({
    name: String,
    description: String
})

module.exports = banco;