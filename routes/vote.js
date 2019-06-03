//引入express模块
const express = require('express')
//定义路由级中间件
const router = express.Router()
//引入数据模型模块
const Vote = require('../models/vote')

// 添加管理员
router.post('/vote/add', (req, res) => {
  // 使用Vote model上的create方法储存数据
  req.body.creTime = new Date()
  req.body.updTime = new Date()
  Vote.create(req.body, (err, Vote) => {
    if (err) {
      res.json({
        ok: false,
        msg: err
      })
    } else {
      res.json({
        ok: true,
        msg: '新增成功',
        code: 200
      })
    }
  })
})

// 投票列表
router.post('/vote/list', (req, res) => {
  let regId = req.body.regId
  let nameLK = req.body.nameLK
  let pageNum = req.body.pageNum
  let pageSize = req.body.pageSize
  let creTime = req.body.creTime === 1 ? 1 : -1
  // 检索条件，如果为空不赋值
  let query = {}
  if (regId) {
    query.regId = regId
  }
  if (nameLK) {
    query.name = new RegExp(nameLK) // 模糊查询条件
  }
  let dataList = Vote.find(query).sort({'creTime': creTime})
  // skip是跳过集合中前多少
  dataList.skip((pageNum - 1) * pageSize)
  // 限制返回数
  dataList.limit(pageSize)
  dataList.exec((err, data) => {
    if(err) {
      res.json({
        ok: false,
        msg: err
      })
    } else {
      Vote.find(query, () => {
        res.json({
          ok: true,
          data: data,
          total: data.length,
          pages: Math.ceil(data.length / pageSize),
          code: 200
        })
      })
    }
  })
})

// 通过id获取单条数据
router.get('/vote/:id', (req, res) => {
  Vote.findById(req.params.id, (err, data) => {
    if (err) {
      res.json({
        ok: false,
        msg: err
      })
    } else {
      res.json({
        ok: true,
        data: data,
        code: 200
      })
    }
  })
})

// 更新管理员
router.post('/vote/upd', (req, res) => {
  req.body.updTime = new Date()
  Vote.findOneAndUpdate({_id: req.body._id}, {
    $set: {
      name: req.body.title,
      rmk: req.body.rmk,
      intro: req.body.intro,
      options: req.body.options,
      limit: req.body.limit,
      rule: req.body.rule,
      expFm: req.body.expFm,
      expTo: req.body.expTo,
      status: req.body.status
    }
  }, {new: true}, (err, data) => {
    if (err) {
      res.json({
        ok: false,
        msg: err
      })
    } else {
      res.json({
        ok: true,
        data: true,
        code: 200
      })
    }
  })
})

// 删除一条
router.get('/vote/del/:id', (req, res) => {
  Vote.findOneAndRemove({_id: req.params.id}, (err, data) => {
    if (err) {
      res.json({
        ok: false,
        msg: err
      })
    } else {
      res.json({
        ok: true,
        data: true,
        code: 200
      })
    }
  })
})

module.exports = router
