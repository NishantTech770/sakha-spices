const { model } = require("mongoose")
const { contactMessageSchema } = require("../schemas/contactMessageSchema")

const ContactMessage = model("ContactMessage", contactMessageSchema)

module.exports = { ContactMessage }