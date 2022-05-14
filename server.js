const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const passport = require("passport");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const authRoute = require("./routes/authRoute");
const { checkUser } = require("./midllewares/authMiddleware");
// require("./passport-setup");

const PORT = process.env.PORT || 4000;
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", req.get("Origin") || "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE");
  res.header("Access-Control-Expose-Headers", "Content-Length");
  res.header(
    "Access-Control-Allow-Headers",
    "X-HTTP-Method-Override, Accept, Authorization, Content-Type, X-Requested-With, Range"
  );
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  } else {
    return next();
  }
});

app.use(cookieParser());

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(express.static("public"));
app.use(express.json());
// app.use(passport.initialize());
// app.use(passport.session());

app.use(authRoute);
app.get('*', checkUser)

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


