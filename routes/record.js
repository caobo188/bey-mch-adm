//引入express模块
const express = require('express')
//定义路由级中间件
const router = express.Router()
//引入数据模型模块
const Record = require('../models/record')

// 添加管理员
router.post('/record/add', (req, res) => {
  req.body.creTime = new Date()
  Record.create(req.body, (err, Vote) => {
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

// 投票排名
router.post('/record/rank', (req, res) => {
  let vid = req.body.vid
  // 检索条件，如果为空不赋值
  let query = {}
  if (vid) {
    query.vid = vid
  }
  Record.find(query, (err, data) => {
    let recordList = data || []
    let list = []
    for (let item of recordList) {
      for (let id of item.elects) {
        list.push({
          oid: id
        })
      }
    }
    let arr = list.groupBy('oid')
    res.json({
      ok: true,
      data: arr,
      code: 200
    })
  })
})

// 管理员列表
router.post('/record/list', (req, res) => {
  let vid = req.body.vid
  let uid = req.body.uid
  // 检索条件，如果为空不赋值
  let query = {}
  if (vid) {
    query.vid = vid
  }
  if (uid) {
    query.uid = uid
  }
  let dataList = Vote.find(query)
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
      Record.find(query, () => {
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

module.exports = router
