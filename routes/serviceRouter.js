const express = require('express');
const {
  serveicegetdata,
  servicegetbyid,
  servicepost,
  serviceupdate,
} = require('../controllers/serviceCTRL');
const router = express.Router();
router.get('/', serveicegetdata);
router.get('/:id', servicegetbyid);
router.post('/', servicepost);
router.put('/:id', serviceupdate);
module.exports = router;
