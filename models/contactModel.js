const mongoose = require('mongoose');
let joi = require('joi');
const contactShmea = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Phone: {
    type: Number,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const contactModel = mongoose.model('contact', contactShmea);

// va;iadtion
function contactvalidation(contactOBj) {
  let contactval = joi.object({
    Name: joi.string().required(),
    Phone: joi.number().required(),
    message: joi.string().required(),
  });
  return contactval.validate(contactOBj);
}

module.exports = {
  contactModel,
  contactvalidation,
};
