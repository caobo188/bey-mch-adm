var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Goods = require('../models/goods');

// 新增商品
router.post('/goods/add', function (req,res,next) {
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
  Goods.find({}, (err, data) => {
    if (err) {
      res.json({
        ok: false,
        msg: err
      })
    } else {
      res.json({
        ok: true,
        data: data,
        total: data.length,
        code: 200
      })
    }
  })
})

module.exports = router
