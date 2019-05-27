//引入express模块
const express = require('express')
//定义路由级中间件
const router = express.Router()
//引入数据模型模块
const Adm = require('../models/adm')

//登录接口
router.post('/login', (req, res) => {
  let regId = req.body.regId
  let pwd = req.body.pwd
  Adm.find({regId: regId}, (err, user) => {
    console.log(err, user)
    if (user.length === 0) {
      res.send({status: 'fail', msg: '账号不存在'})
    } else if (user[0].pwd === pwd) {
      res.send({status: 'success', msg: '登录成功', code: 200})
    } else if (user[0].pwd !== pwd) {
      res.send({status: 'fail', msg: '账号或密码错误'})
    }
  })
})

// 添加管理员
router.post('/adm/add', (req, res) => {
  // 使用Adm model上的create方法储存数据
  console.log(req)
  Adm.create(req.body, (err, hero) => {
    if (err) {
      res.json({tatus: 'fail', error: err})
    } else {
      res.json({status: 'success', msg: '新增成功'})
    }
  })
  console.log(req.body)
})

// 管理员列表
router.post('/adm/list', (req, res) => {
  let query = {}
  Adm.find(query, (err, data) => {
    res.json({status: 'success', data: data, total: data.length})
  })
})

module.exports = router