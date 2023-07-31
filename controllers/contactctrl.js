const { contactModel, contactvalidation } = require('../models/contactModel');
// get data from contact
const getcontactdata = async (req, res, next) => {
  try {
    let contacdata = await contactModel.find();
    res.status(200).send(contacdata);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

// get by id
const contactgetbyid = async (req, res, next) => {
  try {
    const { id } = req.params;
    const getdataby = await contactModel.findById(id);
    if (!getdataby)
      return res.status(404).send({ message: 'Contact not found' });
    res.status(200).send(getdataby);
  } catch (error) {
    res.status(404).send(error.message);
  }
};
// post contact data
const postcontactdata = async (req, res, next) => {
  try {
    let { error } = contactvalidation(req.body);
    if (error) return res.status(400).send(error.message);
    const contactdata = await contactModel(req.body);
    await contactdata.save();
    res.status(201).send({
      status: true,
      contactdata,
      message: 'Contact data saved successfully',
    });
  } catch (error) {
    res.status(404).send(error.message);
  }
};
module.exports = {
  getcontactdata,
  postcontactdata,
  contactgetbyid,
};
