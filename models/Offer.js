// offer mongoose shema:
const mongoose = require("mongoose");
const offerSchema = mongoose.Schema(
  {
    client: {
      type: String
    },
    accepted: {
      type: Boolean,
      default: false,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    onGoing: {
      type: Boolean,
      default: false,
    },
    price: {
      type: Number,
      required: [true, "please enter a price"],
    },
    dueDate: {
      type: Date,
      required: [true, "please enter a time"],
    },
    descri: {
      type: String,
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
