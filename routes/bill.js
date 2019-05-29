var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Bill = require('../models/bill');

router.post('/bill/list', function (req,res,next) {
  let pageNum = req.body.pageNum
  let pageSize = req.body.pageSize
  // 检索条件
  let query = {}
  let dataList = Bill.find(query)
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
      Bill.find(query, () => {
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
