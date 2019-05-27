/* 注册 */
const mongoose = require('mongoose')

const admSchema = mongoose.Schema({
  name: String, // 用户名
  mbl: String, // 手机号
  regId: String, // 登录账号
  pwd: String, // 密码
  email: String, // 邮箱
  creTime: String, // 创建时间
  updTime: String // 更新时间
}, { collection: 'adm'})
//这里mongoose.Schema要写上第二个参数，明确指定到数据库中的哪个表取数据

const Adm = module.exports = mongoose.model('meiyi', admSchema)