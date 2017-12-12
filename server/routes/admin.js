const express = require('express'),
flash = require('req-flash'),
User = require('../models/user'),
users = require('./users'),
posts = require('./posts'),
bcrypt = require('bcryptjs'),
Visitor = require('../models/visitor'),
visitors = require('./visitors')

/* apoc require statement must always go after the explicit loading of the 
* .env file */
require('dotenv').load()
const apoc = require('apoc')

module.exports = (() => {
'use strict'
var checkAuth = require('./index.js').checkAuth
const router = express.Router()

//Start GET
router.get('/visitors', (req, res) => {
  Visitor.find({},  (err, posts) => {
    if (err) throw err
    console.log('Posts retrieved (routes): ', posts)
    res.send(posts)
  })
  })//END GET



  return router
})()