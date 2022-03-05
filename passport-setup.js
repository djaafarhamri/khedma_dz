const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.serializeUser((user, cb) => {
    cb(null, user)
})
passport.deserializeUser((user, cb) => {
    cb(null, user)
})

passport.use(
  new GoogleStrategy(
    {
      clientID:
        "426266211501-nokbvgcfmtnbnmqtku34mdu33a00rgqr.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "http://localhost:4000/google/callback",
    },
    function (accessToken, refreshToken, profile, cb) {
      return cb(null, profile);
    }
  )
);
