const express = require('express');
const { usergetdata, signup, LOGIN } = require('../controllers/userctrl');
const Authotications = require('../middlewares/verifyToken');

const router = express.Router();
router.get('/', Authotications(['Admin', 'costomercare']), usergetdata);
router.post('/signup', signup);
router.post('/login', LOGIN);

module.exports = router;
