const { servicevalidation, serviceModel } = require('../models/servermodel');

const serveicegetdata = async (req, res, next) => {
  try {
    const getdat = await serviceModel.find();
    res.status(200).send(getdat);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

// get by id
const servicegetbyid = async (req, res, next) => {
  try {
    const { id } = req.params;
    const servicegetbyid = await serviceModel.findById(id);
    if (!servicegetbyid)
      return res.status(404).send({ message: 'Service not found' });
    res.status(200).send(servicegetbyid);
  } catch (error) {
    res.status(404).send(error.message);
  }
};
// pst the service
const servicepost = async (req, res, next) => {
  try {
    const { error } = servicevalidation(req.body);
    if (error) return res.status(400).send(error.message);

    const servicedata = await serviceModel(req.body);
    await servicedata.save();
    res.status(201).send({
      status: true,
      servicedata,
      message: 'successfully created service',
    });
  } catch (error) {
    res.status(404).send(error.message);
  }
};
// put or updatted service
const serviceupdate = async (req, res, next) => {
  try {
    const { error } = servicevalidation(req.body);
    if (error) return res.status(404).send(error.message);
    let { id } = req.params;
    const updatedata = await serviceModel.findByIdAndUpdate(
      id,
      {
        Title: req.body.Title,
        Icon: req.body.Icon,
        Decribtion: req.body.Decribtion,
      },
      { new: true }
    );
    await updatedata.save();
    res.status(200).send({
      status: true,
      message: 'successfully updated data',
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};
module.exports = {
  serveicegetdata,
  servicegetbyid,
  servicepost,
  serviceupdate,
};
