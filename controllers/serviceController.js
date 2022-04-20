const Service = require("../models/Service");
const dotenv = require("dotenv");
dotenv.config();

const handleErrors = (error) => {
  const errors = [];
  for (let key in error.errors) {
    errors.push(error.errors[key].message);
  }
};

module.exports.create_service = async (req, res) => {
  const { name, description, price, duration, image, category, professional } =
    req.body;
  try {
    const service = await Service.create({
      name,
      description,
      price,
      duration,
      image,
      category,
      professional,
    });
    res.status(200).json({ service: service._id });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

module.exports.delete_service = async (req, res) => {
  const { _id } = req.params;
  try {
    const service = await Service.findByIdAndDelete(_id);
    res.status(200).json({ service: service._id });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

module.exports.update_service = async (req, res) => {
  const { _id } = req.params;
  const { name, description, price, duration, image, category, professional } =
    req.body;
  try {
    const service = await Service.findByIdAndUpdate(
      _id,
      {
        name,
        description,
        price,
        duration,
        image,
        category,
        professional,
      },
      { new: true }
    );
    res.status(200).json({ service: service._id });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

module.exports.get_services = async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json({ services });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

module.exports.get_service = async (req, res) => {
  const { _id } = req.params;
  try {
    const service = await Service.findById(_id);
    res.status(200).json({ service });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};
