const mongoose = require("mongoose");
const { isEmail } = require("validator");

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
        },
        job: {
            type: String,
            required: [true, "please enter your job"],
        },
        location: {
            type: String,
            required: [true, "please enter your location"],
        },
        services: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Service",
                required: [true, "please enter a service"],
            },
        ],
        reviews: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Review",
                required: [true, "please enter a review"],
            },
        ],
    },
    { collection: "professionals" }
);

userSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
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

const model = mongoose.model("profesionalSchema", professionalSchema);

module.exports = model;