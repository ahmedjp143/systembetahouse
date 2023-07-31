const express = require('express');
const {
  getcontactdata,
  postcontactdata,
  contactgetbyid,
} = require('../controllers/contactctrl');
const router = express.Router();

router.get('/', getcontactdata);
router.get('/:id', contactgetbyid);
router.post('/', postcontactdata);

module.exports = router;
