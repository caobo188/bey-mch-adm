const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

// 导入控制层 服务器路由 
let adm = require('./routes/adm')
let goods = require('./routes/goods')
let bill = require('./routes/bill')
let vote = require('./routes/vote')
let record = require('./routes/record')

//这一句是连接上数据库
var db = mongoose.connect('mongodb://localhost:27017/meiyi')
//这里的meiyi是数据库的名字，不是表的名字

Array.prototype.groupBy = function(name, filter) {
  var groups = [], grp, mapping = {}
  for(var i = 0, item, v, t, rtn; item = this[i++];) {
    v = item[name]
    grp = mapping[v]
    t = item.title
    if(!grp) {
      grp = {
        name: v,
        title: t,
        count: 0
      }
      mapping[v] = grp
      groups.push(grp)
    }
    rtn = filter && filter.call(grp, item, mapping)
    // 返回false表示过滤掉，返回null表示使用原来的值，否则使用返回的值
    if(rtn !== false){
      item = rtn || item
      grp.count++
    }
  }
  return groups
}

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use('/api', adm)
app.use('/api', bill)
app.use('/api', goods)
app.use('/api', vote)
app.use('/api', record)
app.listen(3000, () => {
  console.log('app listening on port 3000.')
})
