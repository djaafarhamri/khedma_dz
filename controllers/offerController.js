const Offer = require("../models/Offer");
const dotenv = require("dotenv");
dotenv.config();

const handleErrors = (error) => {
  const errors = [];
  for (let key in error.errors) {
    errors.push(error.errors[key].message);
  }
};

module.exports.create_offer = async (req, res) => {
  const { id, user_id, price, time } = req.body;
  try {
    const offer = await Offer.create({
      service: id,
      client: user_id,
      price,
      time,
    });
    res.status(200).json({ offer: offer._id });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

module.exports.accept_offer = async (req, res) => {
  const { id } = req.params;
  try {
    const offer = await Offer.updateOne(
      { _id: id },
      { $set: { accepted: true } }
    );
    res.status(200).json({ offer: offer._id });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};
