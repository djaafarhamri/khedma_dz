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
      res.status(200).json({ messenger: isExist._id });
    } else {
      const messengers = await Messenger.create({
        users: [user, messenger],
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
  const { user, messenger, message, messageType } = req.body;
  console.log(req.body);
  try {
    const userF = await User.findOne({ _id: user });
    const messengers = userF.messengers.find((e) => e.messenger === messenger);
    await Messenger.updateOne(
      { _id: messengers._id },
      { $push: { messages: { messageType, sender: user, message } } }
    );
    res.status(200).json({
      message: {
        messageType,
        sender: user,
        message,
      },
    });
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
    const userF = await User.findOne({ _id: user });
    const messengers = userF.messengers.find((e) => e.messenger === messenger);

    const messages = await Messenger.findOne({ _id: messengers._id });
    res.status(200).json(messages);
  } catch (err) {
    // const errors = handleErrors(err);
    console.log(err);
    res.status(400).json(err);
  }
};
// get messages
module.exports.getMessenger_id = async (req, res) => {
  const { user, messenger } = req.body;
  try {
    const userF = await User.findOne({ _id: user });
    if (userF) {
      const messengers = userF.messengers.find(
        (e) => e.messenger === messenger
      );

      res.status(200).json({ messenger_id: messengers._id });
    }
  } catch (err) {
    // const errors = handleErrors(err);
    console.log(err);
    res.status(400).json(err);
  }
};

module.exports.getMessengers = async (req, res) => {
  const { user } = req.params;
  try {
    const messengers = await Messenger.find({ users: { $in: [user] } });
    var friends = [];
    for (let m of messengers) {
      var friend = m.users.filter((u) => u !== user);
      friends.push(friend[0]);
    }
    res.status(200).json({ messengers: friends });
  } catch (err) {
    // const errors = handleErrors(err);
    console.log(err);
    res.status(400).json(err);
  }
};
