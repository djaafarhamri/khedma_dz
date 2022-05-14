// offer mongoose shema:
const mongoose = require("mongoose");
const offerSchema = mongoose.Schema(
  {
    service: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Service",
      required: [true, "please enter a service"],
    },
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "please enter a user"],
    },
    accepted: {
      type: Boolean,
      default: false,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    price: {
      type: Number,
      required: [true, "please enter a price"],
    },
    time: {
      type: Date,
      required: [true, "please enter a time"],
    },
    sold_at: {
      type: Date,
    },
    created_at: {
      type: Date,
      default: Date.now(),
    },
    updated_at: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    collection: "offers",
  }
);

const model = mongoose.model("offerSchema", offerSchema);

module.exports = model;
