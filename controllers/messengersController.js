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
    res.status(200).json({ message: {
      messageType,
      sender: user,
      message,
    } });
  } catch (err) {
    // const errors = handleErrors(err);
    console.log(err);
    res.status(400).json(err);
  }
};

// get messages
module.exports.getMessages = async (req, res) => {
  const { user, messenger } = req.body;
  console.log("qqqqqqqqqqqqq: ", messenger);
  try {
    const messengers = await User.find({
      _id: user,
      messengers: { $elemMatch: { messenger } },
    });
    console.log("sssssssss:", messengers)
    
    const messages = await Messenger.findOne({ _id: messengers._id });
    res.status(200).json({ messages });
  } catch (err) {
    // const errors = handleErrors(err);
    console.log(err);
    res.status(400).json(err);
  }
}


module.exports.getMessengers = async (req, res) => {
  const { user } = req.params;
  console.log("user: ", user);
  try {
    const messengers = await Messenger.find({ users: { $in: [user] } });
    console.log("pleaaaaaaaaase: ", messengers);
    var friends = []
    for (let m of messengers) {
      console.log("m: ", m);
      var friend = m.users.filter((u) => u !== user);
      console.log("friend: ", friend);
      friends.push(friend[0]);
    }
    res.status(200).json({ messengers: friends });
  } catch (err) {
    // const errors = handleErrors(err);
    console.log(err);
    res.status(400).json(err);
  }
}