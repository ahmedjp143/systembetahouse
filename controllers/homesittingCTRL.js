const {
  HomeSittingModel,
  homesittingvalidation,
} = require('../models/Homesittingmodel');
// get data from company
const gethomesittinginfo = async (req, res, next) => {
  try {
    const getdata = await HomeSittingModel.find();
    res.status(200).send(getdata);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// get by id
const Homesittinggetoneinfo = async (req, res, next) => {
  try {
    let { id } = req.params;
    const getbyid = await HomeSittingModel.findById(id);
    res.status(200).send(getbyid);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
// post data from server

const homesittingpostdata = async (req, res, next) => {
  try {
    const { error } = homesittingvalidation(req.body);
    if (error) return res.status(400).send(error.message);

    const postdata = await HomeSittingModel(req.body);
    await postdata.save();
    res.status(201).send({
      status: true,
      postdata,
      message: 'succefully created company information',
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// put or update company information

const homesittingupdateinfo = async (req, res, next) => {
  try {
    const { error } = homesittingvalidation(req.body);
    if (error) return res.status(400).send(error.message);
    let { id } = req.params;

    const updatadata = await HomeSittingModel.findByIdAndUpdate(
      id,
      {
        Title: req.body.Title,
        name: req.body.name,
        location: req.body.location,
        logo: req.body.logo,
        email: req.body.email,
        Com_Plane_Email: req.body.Com_Plane_Email,
        Com_Plane_Phone: req.body.Com_Plane_Phone,
        facebook: req.body.facebook,
        tiktok: req.body.tiktok,
        twitter: req.body.twitter,
        instagram: req.body.instagram,
        HeroTitle: req.body.HeroTitle,
        HeroDecribtion: req.body.HeroDecribtion,
        heroImage: req.body.heroImage,
        footerText: req.body.footerText,
      },
      {
        new: true,
      }
    );
    await updatadata.save();
    res.status(200).send({
      status: true,
      updatadata,
      message: 'successfully updated company information',
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};
module.exports = {
  gethomesittinginfo,
  Homesittinggetoneinfo,
  homesittingpostdata,
  homesittingupdateinfo,
};
