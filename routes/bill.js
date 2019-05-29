var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Bill = require('../models/bill');

router.post('/bill/list', function (req,res,next) {
  Bill.find({}, (err, data) => {
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
