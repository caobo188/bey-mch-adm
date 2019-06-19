// 商品
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var goodsSchema = new Schema({
  name: String, // 商品名称
  salePrice: String, // 零售价
  stock: {type: Number, default: 0}, // 库存
  sale: {type: Number, default: 0}, // 已售数量
  mch: String, // 商家名称
  mchId: String // 商家ID
}, {collection: 'goods'})

module.exports = mongoose.model('goods', goodsSchema)