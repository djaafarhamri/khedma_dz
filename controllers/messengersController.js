const Messenger = require("../models/Messenger");
const User = require("../models/User");

module.exports.newMessage = async (req, res) => {
  try {
    var messengers = await Messenger.find({
      $or: [ { user, messenger }, { user: messenger, messenger: user } ]
    });
    if (messenger) {
      messengers = await Messenger.create({
        user,
        messenger,
      });
      User.updateOne(
        { _id: user },
        { $push: { messengers: messengers._id } },
        (err, result) => {
            if (err) {
                console.log(err);
            }
            }
        );
        
    }
    await Messenger.updateOne(
      { _id: messengers._id },
      { $push: { messages: { sender: user, message } } }
    );
    res.status(200).json({ messenger: messenger._id });
  } catch (err) {
    // const errors = handleErrors(err);
    console.log(err);
    res.status(400).json({ err });
  }
};
