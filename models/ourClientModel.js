const mongoose = require('mongoose');
let joi = require('joi');
const cleintShmea = new mongoose.Schema({
  ClientName: {
    type: String,
    required: true,
  },
  Logo: {
    type: String,
    required: true,
  },
});

const clientModel = mongoose.model('client', cleintShmea);

// va;iadtion
function clientvalidation(clientOBj) {
  let clientval = joi.object({
    ClientName: joi.string().required(),
    Logo: joi.string().required(),
  });
  return clientval.validate(clientOBj);
}

module.exports = {
  clientModel,
  clientvalidation,
};
