const { Router } = require("express");
const serviceController = require("../Controllers/serviceController.js");

const router = Router();

router.post("/create_service", serviceController.create_service);
router.delete("/delete_service/:_id", serviceController.delete_service);
router.put("/update_service/:_id", serviceController.update_service);
router.get("/get_services", serviceController.get_services);
router.get("/get_service/:_id", serviceController.get_service);


module.exports = router;