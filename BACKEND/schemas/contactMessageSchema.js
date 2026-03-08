const { Schema } = require("mongoose");

const contactMessageSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: [
        "Bulk / B2B Order",
        "Distributoeship",
        "Retail Enquiry",
        "Export Enquiry",
        "Product Feedback",
        "Other",
      ],
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

module.exports = { contactMessageSchema };
