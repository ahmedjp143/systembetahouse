const express = require('express');
const {
  imagegetdata,
  imagepostdata,
  updateDataimage,
  getbyidimage,
  deleteimage,
} = require('../controllers/imagesctrl');
const router = express.Router();

router.get('/', imagegetdata);
router.get('/:id', getbyidimage);
router.post('/', imagepostdata);
router.put('/:id', updateDataimage);
router.delete('/:id', deleteimage);

module.exports = router;
