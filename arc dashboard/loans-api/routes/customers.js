var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

const customerModel = require('../models/customers.models.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* POST users listing. */
router.post('/add', function(req, res, next) {
  let customerObj = new customerModel({
    firstName :'ajdhdhan',
    lastName :'kumar',
    emailAddress: 'abc@abcd.com',
    phoneNumber: '98765431',
    dob : '01-06-1876'
  })
  customerObj.save(function(err,customerObj){

    if(err){
      res.send({status: 500, message :'unable to add customer'});
    }else{
      res.send({status: 200, message :'user addded successfully', customerDetails : customerObj});
    }
  })
  res.send('respond with a resource');
});

/* Put users listing. */
router.put('/add', function(req, res, next) {
  res.send('respond with a resource');
});
module.exports = router;
