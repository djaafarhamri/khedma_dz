const { Router } = require("express");
const messengersController = require("../Controllers/messengersController");

const router = Router();

router.post("/newMessage", messengersController.newMessage);


module.exports = router;
