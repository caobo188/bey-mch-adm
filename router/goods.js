var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Goods = require('../models/goods');

// 新增商品
router.post('/goods/add', function (req,res,next) {
  Goods.create(req.body, (err, hero) => {
    if (err) {
      res.json({tatus: 'fail', error: err})
    } else {
      res.json({status: 'success', msg: '新增成功'})
    }
  })
  console.log(req.body)
})

// 获取商品
router.post('/goods/list', function (req,res,next) {
  Goods.find({}, (err, data) => {
    res.json({status: 'success', data: data, total: data.length})
  })
})

module.exports = router
