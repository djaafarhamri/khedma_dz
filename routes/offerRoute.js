const { Router } = require("express");
const offerController = require("../controllers/offerController.js");

const router = Router();

router.post("/create_offer", offerController.create_offer);
router.post("/accept_offer", offerController.accept_offer);
router.get("/get_transactions", offerController.get_transactions);
router.get("/get_transactions_by_seach/:search", offerController.get_transactions_by_seach);

module.exports = router;
