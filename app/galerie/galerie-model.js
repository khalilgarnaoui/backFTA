const mongoose = require('mongoose')
const config = require('../config')

const Schema = mongoose.Schema
const ExSchema = new Schema({
  att1: String,
  att2: Number
})

module.exports = mongoose.model('galerie', ExSchema)