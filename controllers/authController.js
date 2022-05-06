const User = require("../models/User");
const dotenv = require("dotenv");
dotenv.config();

module.exports.signup = async (req, res) => {
  console.log("signup data : ", req.body);
  const {
    email,
    first_name,
    last_name,
    phone_number,
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
      first_name,
      last_name,
      phone_number,
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
    });
    res.status(200).json({ user: user._id });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

module.exports.login_post = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.login(username, password);
    res.status(200).json({ user: user });
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports.google_callback = (req, res) => {
  // Successful authentication, redirect home.
  res.redirect("/success_auth");
};

module.exports.logout_get = (req, res) => {
  //* TODO
  return;
};

module.exports.failed_auth = (req, res) => {
  res.send("you failed to log in");
};

module.exports.success_auth = (req, res) => {
  console.log(req.user._json.email);
  res.json(req.user._json.email);
};
