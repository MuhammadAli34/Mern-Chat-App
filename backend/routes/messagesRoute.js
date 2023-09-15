const express = require("express");
const {
  addMessage,
  getAllMessages,
} = require("../controllers/messagesController");

const router = express.Router();
router.post("/addmsg/", addMessage);
router.post("/getmsg/", getAllMessages);

module.exports = router;
