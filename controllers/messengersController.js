const Messenger = require("../models/Messenger");
const User = require("../models/User");

module.exports.newMessage = async (req, res) => {
  const { user, messenger } = req.body;
  try {
    const isExist = await User.find({
      _id: user,
      messengers: { $elemMatch: { messenger } },
    });
    if (isExist.length > 0) {
      res.status(400).json({ message: "Already exist" });
    } else {
      const messengers = await Messenger.create({
        user,
        messenger,
      });
      await User.updateOne(
        { _id: user },
        { $push: { messengers: { _id: messengers._id, messenger } } }
      );
      await User.updateOne(
        { _id: messenger },
        { $push: { messengers: { _id: messengers._id, messenger: user } } }
      );
      res.status(200).json({ messenger: messenger._id });
    }
  } catch (err) {
    // const errors = handleErrors(err);
    console.log(err);
    res.status(400).json({ err });
  }
};
