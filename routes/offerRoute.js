const { Router } = require("express");
const offerController = require("../controllers/offerController.js");

const router = Router();

router.post("/create_offer", offerController.create_offer);
router.post("/create_offer", offerController.accept_offer);

module.exports = router;
