// messenger mongoose shema:
const mongoose = require("mongoose");
const messengersSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    messenger: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
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
        sender: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
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

const model = mongoose.model("messengerSchema", messengersSchema);

module.exports = model;
