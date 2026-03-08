const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getAllMessages,
} = require("../controllers/adminController");

const { isAdmin } = require("../middlewares/roleMiddleware");
const { protect } = require("../middlewares/authMiddleware");

router.get("/users", protect, isAdmin, getAllUsers);
router.get("/messages", protect, isAdmin, getAllMessages);

module.exports = router;
