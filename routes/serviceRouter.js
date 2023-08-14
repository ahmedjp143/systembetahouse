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
router.post('/', Authotications(['Admin', 'costomercare']), servicepost);
router.put('/:id', Authotications(['Admin', 'costomercare']), serviceupdate);
module.exports = router;
