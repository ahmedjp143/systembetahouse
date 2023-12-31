const express = require('express');
const {
  usergetdata,
  signup,
  LOGIN,
  usergetbyid,
} = require('../controllers/userctrl');
const Authotications = require('../middlewares/verifyToken');

const router = express.Router();
router.get('/', usergetdata);
router.get('/:id', usergetbyid);
router.post('/signup', signup);
router.post('/login', LOGIN);

module.exports = router;
