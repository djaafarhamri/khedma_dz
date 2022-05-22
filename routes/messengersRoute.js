const { Router } = require("express");
const messengersController = require("../Controllers/messengersController");

const router = Router();

router.post("/newMessenger", messengersController.newMessenger);
router.post("/sendMessage", messengersController.sendMessage);
router.get("/getMessengers/:user", messengersController.getMessengers);
router.post("/getMessages", messengersController.getMessages);


module.exports = router;
