const express = require("express")
const router = express.Router()
const { SendMessage } = require("../controllers/contactMessageController")

router.post("/send", SendMessage)

module.exports = router