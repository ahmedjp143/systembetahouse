const { housevalidation, housemodel } = require('../models/houseModel');

const houseGETdata = async (req, res, next) => {
  try {
    const data = await housemodel.find();
    res.status(200).send(data);
  } catch (error) {
    // console.log(error.message);
    res.status(400).send(error.message);
  }
};

// get by id
const getById = async (req, res, next) => {
  const data = await housemodel.findById(req.params.id);
  res.status(200).send(data);
};

// house post data
const housepostdata = async (req, res, next) => {
  try {
    // joi validation
    let { error } = housevalidation(req.body);
    if (error) return res.send(error.message);
    // post data to server
    const housepost = await housemodel(req.body);
    await housepost.save();
    res
      .status(201)
      .send({ status: true, housepost, message: 'successfully created' });
  } catch (error) {
    // console.log(error.message);
    res.status(400).send(error.message);
  }
};

const houseputdata = async (req, res, next) => {
  try {
    // joi validation

    let { error } = housevalidation(req.body);
    if (error) return res.send(error.message);
    let { id } = req.params;
    const updatedata = await housemodel.findByIdAndUpdate(
      id,
      {
        typeHouse: req.body.typeHouse,
        area: req.body.area,
        address: req.body.address,
        rent: req.body.rent,
        deposit: req.body.deposit,
        parking: req.body.parking,
        imagespriview: req.body.imagespriview,
        isAvailable: req.body.isAvailable,
        Rooms: req.body.Rooms,
        toilets: req.body.toilets,
        MasterRoom: req.body.MasterRoom,
        faafaahin: req.body.faafaahin,
      },
      { new: true }
    );
    res.status(200).send({
      status: 'success',

      message: 'succeesfully updata record',
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// delete record
const deleteRecord = async (req, res, next) => {
  try {
    let { id } = req.params;
    const deletedata = await housemodel.findByIdAndDelete(id);
    res.status(200).send({
      status: true,
      message: 'successfully deleted record',
      deletedata,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  houseGETdata,
  housepostdata,
  houseputdata,
  deleteRecord,
  getById,
};
