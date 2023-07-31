const express = require('express');
const {
  houseGETdata,
  housepostdata,
  houseputdata,
  deleteRecord,
  getById,
} = require('../controllers/housectrl');
const { varifyToken } = require('../controllers/userctrl');
const router = express.Router();

// crud routes
router.get('/', houseGETdata);
router.get('/:id', getById);
router.post('/', housepostdata);
router.put('/:id', houseputdata);
router.delete('/:id', deleteRecord);

module.exports = router;
