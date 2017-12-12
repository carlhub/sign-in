  const express = require('express'),
        flash = require('req-flash'),
      Visitor = require('../models/visitor')
     
  /* apoc require statement must always go after the explicit loading of the 
 * .env file */
require('dotenv').load()
const apoc = require('apoc')  
var checkAuth = require('./index.js').checkAuth
module.exports = (() => {
    'use strict';

    const router = express.Router();         
    

    /* User registration API endpoint */
    router.post('/register', (req, res) => {
      console.log("visitors->register->Very Busy");
        const newUser = new Visitor({
          name: req.body.name,
          email: req.body.email,
          phone: req.body.phone,
          company: req.body.company,
          isOfficialVisit: req.body.isOfficialVisit,
          isEscortRequired: req.body.isEscortRequired,
          escortName: req.body.escortName,
          createdOn: new Date
        })     
        console.log("New VISITOR user created");
        // Attempt to create the new user in the database.
        Visitor.create(newUser, (err) => {
          console.log(newUser)
          res.status(200).send();          
        })      
    })


return router
})
();

