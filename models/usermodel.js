const mongoose = require('mongoose');

const joi = require('joi');

const userShema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,

    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ['active', 'pending'],
  },
  Role: {
    type: String,
  },
});

// model create
const userModel = mongoose.model('users', userShema);
// validation
function uservalidation(rcObj) {
  let userval = joi.object({
    name: joi.string().required(),
    email: joi.string().email().trim(true).required(),
    password: joi.string().required(),
    status: joi.string().required(),
    Role: joi.string(),
  });
  return userval.validate(rcObj);
}
// loging va;idation
function loginvalidation(rcObj) {
  let loginval = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
  });
  return loginval.validate(rcObj);
}

module.exports = {
  userModel,
  uservalidation,
  loginvalidation,
};
