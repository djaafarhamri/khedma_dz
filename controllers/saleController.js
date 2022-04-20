const Sale = require("../models/Sale");
const dotenv = require("dotenv");
dotenv.config();

const handleErrors = (error) => {
  const errors = [];
  for (let key in error.errors) {
    errors.push(error.errors[key].message);
  }
};

module.exports.create_sale = async (req, res) => {
  const { service, client, price_sold } = req.body;
  try {
    const sale = await Sale.create({
      service,
      client,
      price_sold,
    });
    res.status(200).json({ sale: sale._id });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

module.exports.delete_sale = async (req, res) => {
    