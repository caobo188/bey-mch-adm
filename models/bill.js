var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var billSchema = new Schema({
  'billNo': String
}, {collection: 'bill'})

module.exports = mongoose.model('bill', billSchema)