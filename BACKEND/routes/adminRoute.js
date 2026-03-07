const express = require("express")
const router = express.Router()
const { getAllUsers } = require("../controllers/userController")
const { isAdmin } = require("../middlewares/roleMiddleware")

router.get("/allusers",  getAllUsers)

module.exports = router
