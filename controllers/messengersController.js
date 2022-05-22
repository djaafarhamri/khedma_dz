const Messenger = require("../models/Messenger");
const User = require("../models/User");

module.exports.newMessenger = async (req, res) => {
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

// send message
module.exports.sendMessage = async (req, res) => {
  const { user, messenger, message, messageType, offer } = req.body;
  try {
    if (messageType === "text") {
      await Messenger.updateOne(
        { _id: messenger },
        { $push: { messages: { messageType, sender: user, message } } }
      );
    } else if (messageType === "offer") {
      await Messenger.updateOne(
        { _id: messenger },
        { $push: { messages: { messageType, sender: user, offer } } }
      );
    } 
    res.status(200).json({ message: "Message sent" });
  } catch (err) {
    // const errors = handleErrors(err);
    console.log(err);
    res.status(400).json(err);
  }
};

// get messages
module.exports.getMessages = async (req, res) => {
  const { user, messenger } = req.body;
  try {
    const messengers = await User.find({
      _id: user,
      messengers: { $elemMatch: { messenger } },
    });
    // find _id in messengers array where messengers.messenger = messenger
    var messengerFound = messengers.find(
      (messenger) => messenger.messenger === messenger
    );
    const messages = await Messenger.findOne({ _id: messengerFound._id });
    res.status(200).json({ messages });
  } catch (err) {
    // const errors = handleErrors(err);
    console.log(err);
    res.status(400).json(err);
  }
}


module.exports.getMessengers = async (req, res) => {
  const { user } = req.params;
  try {
    const userF = await User.find({ _id: user })
    console.log(userF);
    const messengers = await Messenger.find({ user: user });
    res.status(200).json({ messengers });
  } catch (err) {
    // const errors = handleErrors(err);
    console.log(err);
    res.status(400).json(err);
  }
}