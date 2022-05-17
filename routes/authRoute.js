const { Router } = require("express");
const authController = require("../Controllers/authController.js");
const upload = require("../midllewares/multerMiddleware");

const router = Router();

router.post("/signup", authController.signup);
router.post("/login", authController.login_post);
router.get("/logout", authController.logout);
router.post("/upload_avatar", upload.single("avatar"), authController.upload_avatar);
router.get("/get_user/:_id", authController.get_user);
router.get("/get_users", authController.get_users);
// router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));
// router.get("/google/callback", passport.authenticate("google", { failureRedirect: "/failed_auth" }), authController.google_callback);
// router.get("/failed_auth", authController.failed_auth);
// router.get("/success_auth", authController.success_auth);

module.exports = router;
