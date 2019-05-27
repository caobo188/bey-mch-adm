var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Goods = require('../models/goods');

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

module.exports = router
