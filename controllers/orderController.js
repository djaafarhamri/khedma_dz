const Order = require("../models/Order");
const dotenv = require("dotenv");
dotenv.config();

const handleErrors = (error) => {
  const errors = [];
  for (let key in error.errors) {
    errors.push(error.errors[key].message);
  }
};

module.exports.create_order = async (req, res) => {
  const { service, client, price_sold } = req.body;
  try {
    const order = await Order.create({
      service,
      client,
      price_sold,
    });
    res.status(200).json({ order: order._id });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

module.exports.delete_order = async (req, res) => {
  const { _id } = req.params;
  try {
    const order = await Order.findByIdAndDelete(_id);
    res.status(200).json({ order: order._id });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};
