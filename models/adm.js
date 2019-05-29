var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var admSchema = new Schema({
  id: Number, // 系统id
  name: String, // 用户名
  mbl: String, // 手机号
  regId: {type: String, required: true, unique: true}, // 登录账号
  pwd: String, // 密码
  email: String, // 邮箱
  creTime: {type: Date, default: Date.now()}, // 创建时间
  updTime: {type: Date, default: Date.now()} // 更新时间
}, {collection: 'adm'}) // 不加第二个参数，生成的collection会在表明后面加个s
admSchema.index({id: 1})

module.exports = mongoose.model('adm', admSchema)