const mongoose = require("mongoose");

const serviceSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please enter a name"],
    },
    description: {
      type: String,
      required: [true, "please enter a description"],
    },
    price: {
      type: Number,
      required: [true, "please enter a price"],
    },
    duration: {
      type: Number,
      required: [true, "please enter a duration"],
    },
    image: {
      type: String,
      required: [true, "please enter an image"],
    },
    category: {
      type: String,
      required: [true, "please enter a category"],
    },
    created_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "please enter a user"],
    },
    created_at: {
      type: Date,
      default: Date.now(),
    },
    updated_at: {
      type: Date,
      default: Date.now(),
    },
    orders: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Order",
        },
    ],
    times_solds: {
      type: Number,
      default: 0,
    },
    times_viewed: {
      type: Number,
      default: 0,
    },
  },
  {
    collection: "services",
  }
);

const model = mongoose.model("serviceSchema", serviceSchema);

module.exports = model;
