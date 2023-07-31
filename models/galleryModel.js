const mongoose = require('mongoose');
let joi = require('joi');
const gallryShmea = new mongoose.Schema({
  ImageTitle: {
    type: String,
    required: true,
  },
  Image: {
    type: String,
    required: true,
  },
});

const galleryModel = mongoose.model('gallery', gallryShmea);

// va;iadtion
function galleryvalidation(galleyOBj) {
  let galleryval = joi.object({
    ImageTitle: joi.string().required(),
    Image: joi.string().required(),
  });
  return galleryval.validate(galleyOBj);
}

module.exports = {
  galleryModel,
  galleryvalidation,
};
