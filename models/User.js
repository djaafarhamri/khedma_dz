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
    skills: {
      type: [String],
    },
    experience: [
      {
        title: {
          type: String,
        },
        company: {
          type: String,
        },
        location: {
          type: String,
        },
        from: {
          type: Date,
        },
        to: {
          type: Date,
        },
        current: {
          type: Boolean,
        },
        description: {
          type: String,
        },
      },
    ],
    education: [{
      school: {
        type: String,
      },
      degree: {
        type: String,
      },
      fieldofstudy: {
        type: String,
      },
      from: {
        type: Date,
      },
      to: {
        type: Date,
      },
      current: {
        type: Boolean,
      },
      description: {
        type: String,
      },
    }],
    certifications: {
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
    orders: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
      },
    ],
    messengers: [{
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Messenger",
      },
      messenger: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },

    }],
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
userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    console.log("incorrect password");
  }
  console.log("incorrect email");
};

const model = mongoose.model("userSchema", userSchema);

module.exports = model;
