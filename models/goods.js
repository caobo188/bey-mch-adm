var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var goodsSchema = new Schema({
  'name': String
}, {collection: 'goods'})

module.exports = mongoose.model('goods', goodsSchema)