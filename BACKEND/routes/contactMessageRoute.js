const express = require("express")
const router = express.Router()
const { SendMessage, getAllMessages } = require("../controllers/contactMessageController")

router.post("/send", SendMessage)
router.get("/", getAllMessages)

module.exports = router