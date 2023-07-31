const mongoose = require('mongoose');
let joi = require('joi');

// shmema
const houseShema = new mongoose.Schema({
  typeHouse: {
    type: String,
    required: true,
  },
  area: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  rent: {
    type: Number,
    required: true,
  },
  deposit: {
    type: Number,
    required: true,
  },
  parking: {
    type: Boolean,
    required: true,
  },
  imagespriview: {
    type: String,
    required: true,
  },
  isAvailable: {
    type: Boolean,
    required: true,
  },
  Rooms: {
    type: Number,
    required: true,
  },
  toilets: {
    type: Number,
    required: true,
  },
  MasterRoom: {
    type: Number,
    required: true,
  },
  faafaahin: {
    type: String,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
});
//model
const housemodel = mongoose.model('houses', houseShema);

// validation
function housevalidation(houObj) {
  let houseval = joi.object({
    typeHouse: joi.string().required(),
    area: joi.string().required(),
    address: joi.string().required(),
    rent: joi.number().required(),
    deposit: joi.number().required(),
    parking: joi.boolean().required(),
    imagespriview: joi.string().required(),
    isAvailable: joi.boolean().required(),
    Rooms: joi.number().required(),
    toilets: joi.number().required(),
    MasterRoom: joi.number().required(),
    faafaahin: joi.string().required(),
  });
  return houseval.validate(houObj);
}

module.exports = {
  housemodel,
  housevalidation,
};
