const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      bcrypt = require('bcryptjs'),
      User = require('../models/user')

var Visitor = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  phone: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  isOfficialVisit: {
    type: Boolean,
    default: false,
    required: false,
  },
  isEscortRequired: {
    type: Boolean,
    default: false,
    required: false,
  },
  escortName: {
    type: String,
    required: false,
  },
  createdOn: {
    type: Date,
    required: true
  }
})

module.exports = mongoose.model('Visitor', Visitor)
