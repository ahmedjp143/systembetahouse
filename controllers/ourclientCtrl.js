const { clientvalidation, clientModel } = require('../models/ourClientModel');

const clientgetdata = async (req, res, next) => {
  try {
    const getdat = await clientModel.find();
    res.status(200).send(getdat);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

// get by id
const clientgetbyid = async (req, res, next) => {
  try {
    const { id } = req.params;
    const clientgetbyid = await clientModel.findById(id);
    if (!clientgetbyid)
      return res.status(404).send({ message: 'this client not found' });
    res.status(200).send(clientgetbyid);
  } catch (error) {
    res.status(404).send(error.message);
  }
};
// pst the service
const clientpost = async (req, res, next) => {
  try {
    const { error } = clientvalidation(req.body);
    if (error) return res.status(400).send(error.message);

    const clientdata = await clientModel(req.body);
    await clientdata.save();
    res.status(201).send({
      status: true,
      clientdata,
      message: 'successfully created ',
    });
  } catch (error) {
    res.status(404).send(error.message);
  }
};
// put or updatted service
const clientupdate = async (req, res, next) => {
  try {
    const { error } = clientvalidation(req.body);
    if (error) return res.status(404).send(error.message);
    let { id } = req.params;
    const updatedata = await clientModel.findByIdAndUpdate(
      id,
      {
        ClientName: req.body.ClientName,
        Logo: req.body.Logo,
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
// delete data
const deleteDataclient = async (req, res, next) => {
  try {
    let { id } = req.params;

    const deletedataget = await clientModel.findByIdAndDelete(id);
    res.status(200).send({
      status: true,
      message: 'succeesfully deleted record',
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};
module.exports = {
  clientgetdata,
  clientgetbyid,
  clientpost,
  clientupdate,
  deleteDataclient,
};
