// sale mongoose shema:
const mongoose = require("mongoose");   
const saleSchema = mongoose.Schema(
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
        price_sold: {
            type: Number,
            required: [true, "please enter a price"],
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
        collection: "sales",
    }
);

const model = mongoose.model("saleSchema", saleSchema);

module.exports = model;