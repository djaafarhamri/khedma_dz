const express = require("express");
const app = express();
const passport = require("passport");
const dotenv = require("dotenv");
dotenv.config();
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
require("./passport-setup");

const PORT = process.env.PORT || 4000;

app.use(
  cookieSession({
    name: "khedma-user",
    keys: ["key1"],

    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(express.static("public"));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
// Connect to the db
mongoose
  .connect("mongodb://localhost:27017/khedma", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log("listening on port : ", PORT);
    });
  })
  .catch((err) => console.log(err));

app.get("/fail", (req, res) => res.send("you failed to log in"));
app.get("/good", (req, res) => {
  console.log(req.user._json.email);
  res.send(`welcome ${req.user._json.email}`);
});

// app.post("/test_login", async (req, res) => {
//   console.log("trying");
//   const { type, job } = req.body;
//   console.log("trying 2");
//   try {
//     console.log("trying 3");
//     const client = await Client.create({
//       type1: type,
//       job: job,
//     }).catch(err => console.log(err.message));
//     console.log("trying 4");
//     res.status(200).json(client);
//   } catch (err) {
//     res.status(400);
//   }
// });

app.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/fail" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("/good");
  }
);
