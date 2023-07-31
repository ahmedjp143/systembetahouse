const express = require('express');
const {
  aboutgetdata,
  aboutpostdata,
  getbyidabout,
} = require('../controllers/aboutCtrl');
const router = express.Router();

router.get('/', aboutgetdata);
router.get('/:id', getbyidabout);

router.post('/', aboutpostdata);

module.exports = router;
