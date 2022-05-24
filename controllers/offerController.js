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
  const { client, price, dueDate, descri } = req.body;
  try {
    const offer = await Offer.create({
      client,
      price,
      dueDate,
      descri
    });
    res.status(200).json({ offer });
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
      { $set: { accepted: true, onGoing: true } }
    );
    res.status(200).json({ offer: offer._id });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

module.exports.complete_offer = async (req, res) => {
  const { id } = req.params;
  try {
    const offer = await Offer.updateOne(
      { _id: id },
      { $set: { completed: true, onGoing: false } }
    );
    res.status(200).json({ offer: offer._id });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

module.exports.get_transactions = async (req, res) => {
  try {
    const offer = await Offer.find({ accepted: true });
    const service = await Service.find({ _id: offer.service });
    const professional = await User.find({ _id: service.created_by });
    const client = await User.find({ _id: offer.client });
    res.status(200).json({
      professional,
      client,
      created_at: offer.created_at,
      price: offer.price,
      time: offer.time,
      completed: offer.completed,
    });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

function escapeRegex(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

module.exports.get_transactions_by_seach = async (req, res) => {
  const regex = new RegExp(escapeRegex(req.params.search), "gi");
  try {
    const offer = await Offer.find({ accepted: true });
    const service = await Service.find({ _id: offer.service });
    const professional = await User.find({
      _id: service.created_by,
      $or: [{ first_name: regex }, { last_name: regex }],
    });
    const client = await User.find({ _id: offer.client });
    if (professional) {
      res.status(200).json({
        professional,
        client,
        created_at: offer.created_at,
        price: offer.price,
        time: offer.time,
        completed: offer.completed,
      });
    }
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};
