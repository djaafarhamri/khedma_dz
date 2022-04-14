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
        default: Date.now()
    },
    updated_at: {
        type: Date,
        default: Date.now()
    },
    deleted_at: {
        type: Date,
        default: Date.now()
    }
    },
    {
        collection: "services"
    }
);



const model = mongoose.model("serviceSchema", serviceSchema);

module.exports = model;