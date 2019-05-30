// 投票
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var voteSchema = new Schema({
  id: String, // 系统id
  title: {type: String, required: true}, // 名称
  rmk: String, // 备注
  intro: String, // 介绍
  options: [{
    oid: Number, // 参与者id
    name: String, // 名称
    desc: String, // 介绍
    poll: Number, // 票数
  }], // 参选者
  voters: [{
    vid: Number, // 投票人id
    name: String // 名称
  }], // 投票人
  rule: Number, // 投票规则 1:只投一次 2:每日可投
  limit: Number, // 投票上限次数
  expFm: String, // 有效期起始
  expTo: String, // 有效值终止
  status: Number, // 0:未开启 1:已开启 2:已关闭 3:已过期
  creTime: {type: Date, default: Date.now()}, // 创建时间
  updTime: {type: Date, default: Date.now()} // 更新时间
}, {collection: 'vote'}) // 不加第二个参数，生成的collection会在表明后面加个s

module.exports = mongoose.model('vote', voteSchema)