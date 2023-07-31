const {
  userModel,
  uservalidation,
  loginvalidation,
} = require('../models/usermodel');
let bcrypt = require('bcrypt');
let jwt = require('jsonwebtoken');
// get data user
const usergetdata = async (req, res, next) => {
  try {
    // get the user data
    const userdata = await userModel.find();
    res.send(userdata);
  } catch (error) {
    console.log(error);
  }
};
// singup
const signup = async (req, res, next) => {
  // input validation from request
  let { error } = uservalidation(req.body);
  if (error) return res.send(error.message);

  const userdata = await userModel(req.body);
  // hash password
  const salt = await bcrypt.genSalt(10);
  userdata.password = await bcrypt.hash(userdata.password, salt);
  // save data to server
  await userdata.save();
  res.send({
    status: true,
    message: 'successfully inserted ',
  });
};
//login
const LOGIN = async (req, res, next) => {
  try {
    // input validation from request
    let { error } = loginvalidation(req.body);
    if (error) return res.send(error.message);
    // check email user
    const usergetdata = await userModel.findOne({
      email: req.body.email,
    });
    if (!usergetdata)
      return res.send({ status: false, message: 'invalid email or password' });
    // check password
    let checkpas = await bcrypt.compare(
      req.body.password,
      usergetdata.password
    );
    if (!checkpas)
      return res.send({ status: false, message: 'invalid email or password' });
    // check the user active or pending
    if (usergetdata.status === 'pending') {
      return res.send({
        message:
          'sorry , This User Has Been Banned please contact the administrator ',
      });
    }
    // token and expiration
    let token = jwt.sign(
      {
        id: usergetdata._id,
        name: usergetdata.name,
      },
      'betahouse',
      { expiresIn: '12hr' }
    );

    res.send({ status: true, message: 'succefully login', token });
  } catch (error) {
    console.log(error.message);
  }
};
// varifocation token
const varifyToken = async (req, res, next) => {
  const token = req.headers['token'];
  // check token
  if (!token) {
    return res
      .status(403)
      .send({ message: 'raali noqo ogolaansho uma hesatid' });
  }
  // check token expiration
  await jwt.verify(token, 'betahouse', (err, user) => {
    if (err) {
      return res.send({ message: 'token kaagu waa dhacy' });
    }
    console.log(user.id);
  });
  next();
};

module.exports = {
  usergetdata,
  signup,
  LOGIN,
  varifyToken,
};
