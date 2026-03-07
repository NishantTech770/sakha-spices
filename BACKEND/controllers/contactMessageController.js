const { ContactMessage } = require("../models/contactMessageModel");
const { status } = require("http-status");

exports.SendMessage = async (req, res) => {
  try {
    let { name, email, phone, category, message } = req.body;

    if (!name || !email || !phone || !category || !message) {
      return res.status(status.BAD_REQUEST).json({
        message: "All fields are requied!",
      });
    }

    let fullName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

    let Message = new ContactMessage({
      name: fullName,
      email,
      phone,
      category,
      message,
    });
    await Message.save();

    return res.status(status.OK).json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (err) {
    return res.status(status.INTERNAL_SERVER_ERROR).json({
      message: "Internal Server Error!",
    });
  }
};



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
