const mongoose = require('mongoose');
let joi = require('joi');

// image schema
const imageShema = new mongoose.Schema({
  HouseID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'houses',
    required: true,
  },
  pathImage: {
    type: String,
    required: true,
  },
});

// image model
const imagemodel = mongoose.model('images', imageShema);

function imagevalidation(imgOBj) {
  let imageval = joi.object({
    HouseID: joi.string().required(),
    pathImage: joi.string().required(),
  });
  return imageval.validate(imgOBj);
}

module.exports = {
  imagemodel,
  imagevalidation,
};
