var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var goodsSchema = new Schema({
  'name': String
})

module.exports = mongoose.model('goods', goodsSchema)