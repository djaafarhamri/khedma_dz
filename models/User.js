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
      default: Date.now(),
    },
    last_modified: {
      type: Date,
      default: Date.now(),
    },
    verifiedd: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      enum: ["client", "professional", "admin"],
      default: "client",
    },
    bio: {
      type: String,
    },
    social_media: [
      {
        icon: {
          type: String,
        },
        name: {
          type: String,
        },
        url: {
          type: String,
        },
      },
    ],
    skills: {
      type: [String],
    },
    experience: {
      type: [String],
    },
    education: {
      type: [String],
    },
    certifications: {
      type: [String],
    },
    languages: {
      type: [String],
    },
    job: {
      type: String,
    },
    job_description: {
      type: String,
    },
    location: {
      type: String,
    },
    services: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Service",
      },
    ],
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
  },
  { collection: "users" }
);

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.pre("validate", function (next) {
  //3, or whatever value you're checking for
  if (this.client !== "client") {
    return next();
  }
  if (this.job || this.services.length > 0 || this.reviews.length > 0) {
    var error = new mongoose.Error.ValidationError(this);
    error.errors.job = new mongoose.Error.ValidatorError(
      "job",
      "clients can't have jobs.",
      "notvalid",
      this.job
    );
    return next(error);
  }
  return next();
});

userSchema.pre("validate", function (next) {
  //3, or whatever value you're checking for
  if (this.type !== "professional") {
    return next();
  }
  if (this.job) {
    return next();
  }
  var error = new mongoose.Error.ValidationError(this);
  error.errors.job = new mongoose.Error.ValidatorError(
    "job",
    "job is required for status passed.",
    "notvalid",
    this.job
  );
  return next(error);
});

//login
userSchema.statics.login = async function (username, password) {
  const user = await this.findOne({ username });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error("incorrect password");
  }
  throw Error("incorrect username");
};

const model = mongoose.model("userSchema", userSchema);

module.exports = model;
