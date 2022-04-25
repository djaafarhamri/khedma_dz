// order mongoose shema:
const mongoose = require("mongoose");
const orderSchema = mongoose.Schema(
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
    is_sold: {
      type: Boolean,
      default: false,
    },
    price_sold: {
      type: Number,
      required: [true, "please enter a price"],
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
    collection: "orders",
  }
);

const model = mongoose.model("orderSchema", orderSchema);

module.exports = model;
