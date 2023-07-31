const { imagevalidation, imagemodel } = require('../models/imagesModel');
const { housemodel } = require('../models/houseModel');
// get all images information
const imagegetdata = async (req, res, next) => {
  try {
    const getimages = await imagemodel.find();
    res.status(200).send(getimages);
  } catch (error) {
    // console.log(error.message);
    res.status(400).send(error.message);
  }
};
// get by id
const getbyidimage = async (req, res, next) => {
  try {
    const getbyimage = await imagemodel.findById(req.params.id);
    if (!getbyimage) return res.status(404).send({ message: 'No such image' });
    res.status(200).send(getbyimage);
  } catch (error) {
    // console.log(error.message);
    res.status(400).send(error.message);
  }
};
// post data to server
const imagepostdata = async (req, res, next) => {
  try {
    // image validation requests
    const { error } = imagevalidation(req.body);
    if (error) return res.send(error.message);

    // validate id found or not found
    const housedata = await housemodel.findById(req.body.HouseID);
    if (!housedata)
      return res.send({ status: false, message: 'thid house not found' });

    const imagedata = await imagemodel(req.body);
    await imagedata.save();
    res
      .status(201)
      .send({ status: true, imagedata, message: 'successfully inserted' });
  } catch (error) {
    // console.log(error.message);
    res.status(400).send(error.message);
  }
};

// update data
const updateDataimage = async (req, res) => {
  // image validation requests
  const { error } = imagevalidation(req.body);
  if (error) return res.send(error.message);
  let { id } = req.params;
  const updatedata = await imagemodel.findByIdAndUpdate(
    id,
    {
      HouseID: req.body.HouseID,
      pathImage: req.body.pathImage,
    },
    { new: true }
  );
  res.status(200).send({
    status: true,
    message: 'succeesfully updata record',
  });
};

// delete a record
const deleteimage = async (req, res, next) => {
  try {
    let { id } = req.params;
    const deletedata = await imagemodel.findByIdAndDelete(id);
    res.status(200).send({
      status: true,
      message: 'succeesfully deleted record',
    });
  } catch (error) {
    // console.log(error.message);
    res.status(400).send(error.message);
  }
};
module.exports = {
  imagegetdata,
  imagepostdata,
  updateDataimage,
  getbyidimage,
  deleteimage,
};
