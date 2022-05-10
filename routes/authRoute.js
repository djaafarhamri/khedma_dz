const { Router } = require("express");
const authController = require("../Controllers/authController.js");

const router = Router();

router.post("/signup", authController.signup);
router.post("/login", authController.login_post);
// router.get("/logout", authController.logout);
// router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));
// router.get("/google/callback", passport.authenticate("google", { failureRedirect: "/failed_auth" }), authController.google_callback);
// router.get("/failed_auth", authController.failed_auth);
// router.get("/success_auth", authController.success_auth);

module.exports = router;
