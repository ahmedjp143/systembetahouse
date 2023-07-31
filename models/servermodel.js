const mongoose = require('mongoose');
let joi = require('joi');
const serviceShmea = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
  },
  Icon: {
    type: String,
    required: true,
  },
  Decribtion: {
    type: String,
    required: true,
  },
});

const serviceModel = mongoose.model('service', serviceShmea);

// va;iadtion
function servicevalidation(servicetOBj) {
  let serviceval = joi.object({
    Title: joi.string().required(),
    Icon: joi.string().required(),
    Decribtion: joi.string().required(),
  });
  return serviceval.validate(servicetOBj);
}

module.exports = {
  serviceModel,
  servicevalidation,
};
