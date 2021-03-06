var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Goods = require('../models/goods');

// 新增商品
router.post('/goods/add', function (req,res,next) {
  req.body.creTime = new Date()
  req.body.updTime = new Date()
  Goods.create(req.body, (err, hero) => {
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

// 获取商品
router.post('/goods/list', function (req,res,next) {
  let pageNum = req.body.pageNum
  let pageSize = req.body.pageSize
  let creTime = req.body.creTime === 1 ? 1 : -1
  // 检索条件
  let query = {}
  let dataList = Goods.find(query).sort({'creTime': creTime})
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
      Goods.find(query, () => {
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
