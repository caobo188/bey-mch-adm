var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Bill = require('../models/bill');

router.post('/bill/list', function (req,res,next) {
  Bill.find({}, (err, data) => {
    res.json({status: 'success', data: data, total: data.length})
  })
})

module.exports = router
