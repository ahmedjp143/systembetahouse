const express = require('express');
const {
  clientgetdata,
  clientgetbyid,
  clientpost,
  clientupdate,
  deleteDataclient,
} = require('../controllers/ourclientCtrl');

const router = express.Router();

router.get('/', clientgetdata);
router.get('/:id', clientgetbyid);
router.post('/', Authotications(['Admin', 'costomercare']), clientpost);
router.put('/:id', Authotications(['Admin', 'costomercare']), clientupdate);
router.delete('/:id', deleteDataclient);

module.exports = router;
