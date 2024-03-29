const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const passport = require("passport");
const path = require("path");
const http = require("http");
const server = http.createServer(app);
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const bodyparser = require("body-parser");
const socket = require("socket.io");
const mongoose = require("mongoose");
const authRoute = require("./routes/authRoute");
const serviceRoute = require("./routes/serviceRoute");
const offerRoute = require("./routes/offerRoute");
const messengersRoute = require("./routes/messengersRoute");
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
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(express.json());
// app.use(passport.initialize());
// app.use(passport.session());

app.use(authRoute);
app.use(serviceRoute);
app.use(offerRoute);
app.use(messengersRoute);
app.get('*', checkUser)

// Connect to the db


// ! sockets

const io = socket(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});
var online_users = [];
io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("online_user", (data) => {
    console.log("oline user : ", data);
    online_users.push({ user: data.user, socket_id: socket.id });
    socket.broadcast.emit("new_online_user");
  });
  
  console.log("user connected");
  socket.on("join", (data) => {
    console.log("join: ", data);
    socket.join(data.room);
  });
  socket.on("sendMessage", (data) => {
    console.log("sendMessage: ", data);
    io.in(data.room).emit("receiveMessage", {
      sender: data.sender,
      message: data.message,
      messageType: data.messageType,
    });
  });
  //seen
  
  // leave room
  socket.on("leave", (data) => {
    socket.leave(data.room);
  });
  socket.on("disconnect", () => {
    online_users = online_users.filter((e) => e.socket_id !== socket.id);
    console.log("user disconnected");
  });
});

mongoose
  .connect("mongodb://localhost:27017/khedma", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    server.listen(PORT, () => {
      console.log("listening on port : ", PORT);
    });
  })
  .catch((err) => console.log(err));


