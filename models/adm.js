var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var admSchema = new Schema({
  'name': String, // 用户名
  'mbl': String, // 手机号
  'regId': String, // 登录账号
  'pwd': String, // 密码
  'email': String, // 邮箱
  'creTime': String, // 创建时间
  'updTime': String // 更新时间
}, {collection: 'adm'}) // 不加第二个参数，生成的collection会在表明后面加个s

module.exports = mongoose.model('adm', admSchema)