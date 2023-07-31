const mongoose = require('mongoose');
let joi = require('joi');
const aboutShmea = new mongoose.Schema({
  FaahFaahin: {
    type: String,
    required: true,
  },
  FaahFaaahinYar: {
    type: String,
    required: true,
  },
});

const aboutModel = mongoose.model('About', aboutShmea);

// va;iadtion
function Aboutvalidation(aboutOBj) {
  let aboutval = joi.object({
    FaahFaahin: joi.string().required(),
    FaahFaaahinYar: joi.string().required(),
  });
  return aboutval.validate(aboutOBj);
}

module.exports = {
  aboutModel,
  Aboutvalidation,
};
