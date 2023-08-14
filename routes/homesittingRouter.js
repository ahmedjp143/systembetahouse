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
  Authotications(['Admin', 'costomercare']),
  homesittingpostdata
);
router.put(
  '/:id',
  Authotications(['Admin', 'costomercare']),
  homesittingupdateinfo
);

module.exports = router;
