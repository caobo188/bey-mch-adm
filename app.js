const express = require('express')
const adm = require('./router/adm')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

let goods = require('./router/goods')
let bill = require('./router/bill')

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
app.listen(3000,() => {
  console.log('app listening on port 3000.')
})
