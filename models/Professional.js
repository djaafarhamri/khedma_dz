const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { isEmail } = require("validator");

//Sign up
const professionalSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "please enter an email"],
      unique: true,
      validate: [isEmail, "please enter a valid email"],
    },
    first_name: {
      type: String,
      required: [true, "please enter your first name"],
    },
    last_name: {
      type: String,
      required: [true, "please enter your last name"],
    },
    middle_name: {
      type: String,
    },
    job: {
      type: String,
      required: [true, "please enter your job"],
    },
    phone_number: {
      type: String,
      required: [true, "please enter your job"],
    },
    profile_image: {
      type: String,
    },
    username: {
      type: String,
      required: [true, "please enter an username"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "please enter a password"],
      minlength: [6, "minimum password length is 6 characters"],
    },
    creation_date: {
      type: Date,
      default: Date.now()
    },
    last_modified: {
      type: Date,
      default: Date.now()
    },
    verifiedd: {
      type: Boolean,
      default: 0
    }
  },
  { collection: "professionals" }
);

professionalSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});


const model = mongoose.model("professionalSchema", professionalSchema);

module.exports = model;