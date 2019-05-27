var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var billSchema = new Schema({
  'billNo': String
})

module.exports = mongoose.model('bills', billSchema)