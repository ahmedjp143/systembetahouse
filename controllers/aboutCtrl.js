const { Aboutvalidation, aboutModel } = require('../models/aboutModel');

const aboutgetdata = async (req, res, next) => {
  try {
    const data = await aboutModel.find();
    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
};
const getbyidabout = async (req, res, next) => {
  try {
    const { id } = req.params;
    const getdataby = await aboutModel.findById(id);
    if (!getdataby) return res.status(404).send({ message: 'about not found' });
    res.status(200).send(getdataby);
  } catch (error) {
    res.status(404).send(error.message);
  }
};
// post data to server
const aboutpostdata = async (req, res, next) => {
  try {
    const { error } = Aboutvalidation(req.body);
    if (error) return res.status(400).send(error.message);
    const postabout = await aboutModel(req.body);
    await postabout.save();
    res
      .status(201)
      .send({ status: true, postabout, message: 'successfully saved' });
  } catch (error) {
    res.status(404).send(error.message);
  }
};
module.exports = { aboutgetdata, aboutpostdata, getbyidabout };
