const express = require('express');
const {
  gethomesittinginfo,
  Homesittinggetoneinfo,
  homesittingpostdata,
  homesittingupdateinfo,
} = require('../controllers/homesittingCTRL');

const router = express.Router();

router.get('/', gethomesittinginfo);
router.get('/:id', Homesittinggetoneinfo);
router.post(
  '/',

  homesittingpostdata
);
router.put(
  '/:id',

  homesittingupdateinfo
);

module.exports = router;
