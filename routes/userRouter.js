const express = require('express');
const {
  usergetdata,
  signup,
  LOGIN,
  varifyToken,
} = require('../controllers/userctrl');

const router = express.Router();
router.get('/', varifyToken, usergetdata);
router.post('/signup', signup);
router.post('/login', LOGIN);

module.exports = router;
