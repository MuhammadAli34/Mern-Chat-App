const express = require("express");
const {
  register,
  login,
  setavatar,
  getallusers,
  logOut,
  checkUsername,
  firebaseLogin,
} = require("../controllers/userController");

const router = express.Router();
router.post("/register", register);
router.post("/login", login);
router.post("/setavatar/:id", setavatar);
router.get("/allusers/:id", getallusers);
router.get("/logout/:id", logOut);
router.post("/firebaseLogin", firebaseLogin);
router.post("/checkusername", checkUsername);
module.exports = router;
