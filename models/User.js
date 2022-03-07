const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { isEmail } = require("validator");

//Sign up
const userSchema = mongoose.Schema(
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
    type: {
      type: String,
      required: true
    },
    job: {
      type: String,
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
      default: false
    }
  },
  { collection: "users" }
);

userSchema.pre('validate', function(next) {
  //3, or whatever value you're checking for
  if (this.type !== "user") {
      return next();
  }
  if (this.job) {
      return next();
  }
  var error = new mongoose.Error.ValidationError(this);
  error.errors.job = new mongoose.Error.ValidatorError('job', 'job is required for status passed.', 'notvalid', this.job);
  return next(error);
});

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});


const model = mongoose.model("userSchema", userSchema);

module.exports = model;