const User = require("../models/User");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

module.exports.signup = async (req, res) => {
  console.log("signup data : ", req.body);
  console.log("email : ", req.body.email);
  const {
    email,
    firstName,
    lastName,
    phone,
    profile_image,
    password,
    role,
    bio,
    skills,
    experience,
    education,
    job,
    job_description,
    location,
  } = req.body;
  try {
    const user = await User.create({
      email,
      first_name: firstName,
      last_name: lastName,
      phone_number: phone,
      password,
      role,
      bio,
      skills,
      experience,
      education,
      job,
      job_description,
      location,
    });
    res.status(200).json({ user: user._id });
  } catch (err) {
    // const errors = handleErrors(err);
    console.log(err);
    res.status(400).json({ err });
  }
};
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: maxAge,
  });
};

module.exports.login_post = async (req, res) => {
  const { email, password } = req.body;
  console.log("login data : ", req.body);
  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });  
    res.status(200).json({ user: user._id, role: user.role });
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports.google_callback = (req, res) => {
  // Successful authentication, redirect home.
  res.redirect("/success_auth");
};

module.exports.logout = (req, res) => {
  //clear jwt cookie
  return res.status(202).clearCookie("jwt").send("cookie cleared");
};

module.exports.failed_auth = (req, res) => {
  res.send("you failed to log in");
};

module.exports.success_auth = (req, res) => {
  console.log(req.user._json.email);
  res.json(req.user._json.email);
};

module.exports.authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    console.log(err);
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}


module.exports.get_user = async (req, res) => {
  const { _id } = req.params;
  try {
    const user = await User.findById(_id);
    res.status(200).json({ user });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
}
module.exports.get_users = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ users });
  }
  catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
}

