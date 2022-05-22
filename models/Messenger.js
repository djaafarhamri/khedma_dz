// messenger mongoose shema:
const mongoose = require("mongoose");
const messengerSchema = mongoose.Schema(
  {
    users: [{
      type: String,
    }],
    is_blocked: {
      type: Boolean,
      default: false,
    },
    created_at: {
      type: Date,
      default: Date.now(),
    },
    updated_at: {
      type: Date,
      default: Date.now(),
    },
    messages: [
      {
        messageType: {
          type: String,
          enum: ["text", "offer"],
        },
        offer: {
          type: String
        },
        sender: {
          type: String
        },
        message: {
          type: String,
        },
        created_at: {
          type: Date,
          default: Date.now(),
        },
      },
    ],
  },
  {
    collection: "messengers",
  }
);

const model = mongoose.model("messengerSchema", messengerSchema);

module.exports = model;
