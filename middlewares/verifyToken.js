let jwt = require('jsonwebtoken');
const { userModel } = require('../models/usermodel');
const Authotications = (allowedRole) => {
  return async (req, res, next) => {
    const header = req.headers['authorization'];
    if (!header) return res.send('sorry not authorized');
    const token = header.split(' ')[1];

    try {
      const tokenverify = jwt.verify(token, 'betahouse');
      const userdata = await userModel.findById(tokenverify.id);
      if (!userdata) return res.status(404).send('user not found');
      if (!allowedRole.includes(userdata.Role))
        return res.status(401).send(' this role is not allowed this part');
      next();
    } catch (error) {
      res.status(401).send(error.message);
    }
  };
};
module.exports = Authotications;
