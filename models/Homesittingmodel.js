const mongoose = require('mongoose');
let joi = require('joi');
const HomeSittingShema = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  Com_Plane_Email: {
    type: String,
    required: true,
  },
  Com_Plane_Phone: {
    type: Number,
    required: true,
  },
  facebook: {
    type: String,
    required: true,
  },
  tiktok: {
    type: String,
    required: true,
  },
  twitter: {
    type: String,
    required: true,
  },
  instagram: {
    type: String,
    required: true,
  },
  HeroTitle: {
    type: String,
    required: true,
  },
  HeroDecribtion: {
    type: String,
    required: true,
  },
  heroImage: {
    type: String,
    required: true,
  },
  footerText: {
    type: String,
    required: true,
  },
});

const HomeSittingModel = mongoose.model('HomeSitting', HomeSittingShema);

// validation
function homesittingvalidation(comObj) {
  let companyval = joi.object({
    Title: joi.string().required(),
    name: joi.string().required(),
    location: joi.string().required(),
    logo: joi.string().required(),
    email: joi.string().email().required(),
    Com_Plane_Email: joi.string().email().required(),
    Com_Plane_Phone: joi.number().required(),
    facebook: joi.string().required(),
    tiktok: joi.string().required(),
    twitter: joi.string().required(),
    instagram: joi.string().required(),
    HeroTitle: joi.string().required(),
    HeroDecribtion: joi.string().required(),
    heroImage: joi.string().required(),
    footerText: joi.string().required(),
  });
  return companyval.validate(comObj);
}

module.exports = {
  HomeSittingModel,
  homesittingvalidation,
};
