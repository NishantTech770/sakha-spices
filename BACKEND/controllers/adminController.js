const { status } = require("http-status")
const { ContactMessage } = require("../models/contactMessageModel")
const { User } = require("../models/userModel")

exports.getAllMessages = async (req, res) => {
  try {
    let allMessages = await ContactMessage.find({});

    if (!allMessages) {
      return res.status(status.NOT_FOUND).json({
        message: "No Messages found!",
      });
    }

    return res.status(status.OK).json({
      success: true,
      message: "Messages fetched successfully!",
      allMessages,
    });
  } catch (err) {
    return res.status(status.INTERNAL_SERVER_ERROR).json({
      message: "Internal server error!",
    });
  }
};


// Get all logged In users
exports.getAllUsers = async (req, res) => {
  try {
    // Exclude password field from response
    const allUsers = await User.find({}).select("-password");

    if (!allUsers) {
      return res.status(status.NOT_FOUND).json({
        message: "No users found!",
      });
    }

    return res.status(status.OK).json({
      success: true,
      message: "Users fetched successfully!",
      allUsers,
    });
  } catch (err) {
    return res.status(status.INTERNAL_SERVER_ERROR).json({
      message: "Internal server error!",
    });
  }
};