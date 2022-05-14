const jwt = require('jsonwebtoken');
const User = require('../models/User');
const dotenv = require("dotenv");
dotenv.config();

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;

  // check json web token exists & is verified
  if (token) {
    jwt.verify(token, 'net ninja secret', (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.redirect('/login');
      } else {
        console.log(decodedToken);
        next();
      }
    });
  } else {
    res.redirect('/login');
  }
};

// check current user
const checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  console.log(token);
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
      if (err) {
        res.send(null)
        next();
    } else {
        let user = await User.findById(decodedToken.id);
        res.send({user: user._id, role: user.role});
        next();
      }
    });
  } else {
    res.send(null);
    next();
  }
};


module.exports = { requireAuth, checkUser };