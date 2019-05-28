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
  let regId = req.body.regId
  let nameLK = req.body.nameLK
  let pageNum = req.body.pageNum
  let pageSize = req.body.pageSize
  // 检索条件，如果为空不赋值
  let query = {}
  if (regId) {
    query.regId = regId
  }
  if (nameLK) {
    query.name = new RegExp(nameLK) // 模糊查询条件
  }
  Adm.find(query, (err, data) => {
    if (err) {
      res.json({tatus: 'fail', error: err})
    } else {
      res.json({status: 'success', data: data, total: data.length})
    }
  })
})

// 通过id获取单条数据
router.get('/adm/:id', (req, res) => {
  Adm.findById(req.params.id, (err, data) => {
    if (err) {
      res.json({tatus: 'fail', error: err})
    } else {
      res.json({status: 'success', data: data})
    }
  })
})

// 更新管理员
router.post('/adm/upd', (req, res) => {
  Adm.findOneAndUpdate({_id: req.body._id}, {
    $set: {
      name: req.body.name,
      regId: req.body.regId,
      mbl: req.body.mbl,
      pwd: req.body.pwd,
      email: req.body.email,
    }
  }, {new: true}, (err, data) => {
    if (err) {
      res.json({tatus: 'fail', error: err})
    } else {
      res.json({status: 'success', data: true})
    }
  })
})

// 删除一条
router.get('/adm/del/:id', (req, res) => {
  Adm.findOneAndRemove({_id: req.params.id}, (err, data) => {
    if (err) {
      res.json({tatus: 'fail', error: err})
    } else {
      res.json({status: 'success', data: true})
    }
  })
})

module.exports = router