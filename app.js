const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

// 导入控制层 服务器路由 
const adm = require('./routes/adm')
let goods = require('./routes/goods')
let bill = require('./routes/bill')

//这一句是连接上数据库
var db = mongoose.connect('mongodb://localhost:27017/meiyi')

//这里的meiyi是数据库的名字，不是表的名字

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use('/api', adm)
app.use('/api', bill)
app.use('/api', goods)
app.listen(3000, () => {
  console.log('app listening on port 3000.')
})
