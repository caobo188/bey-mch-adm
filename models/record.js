// 投票
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var recordSchema = new Schema({
  id: String, // 系统id
  vid: { type: Schema.Types.String, ref: 'vote' }, // 投票id
  uid: String, // 投票人id
  elects: Array, // 选票
  creTime: {type: Date, default: Date.now()} // 创建时间
}, {collection: 'record'}) // 不加第二个参数，生成的collection会在表明后面加个s

module.exports = mongoose.model('record', recordSchema)