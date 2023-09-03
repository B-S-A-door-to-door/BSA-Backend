const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema(
  {
    orgId: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    invoiceGenerator: {
      type: String,
      required: true,
    },
    refNumber: {
      type: String,
      required: true,
      unique: true,
    },
    senderName: {
      type: String,
      required: true,
    },
    senderContact: {
      type: String,
      required: true,
    },
    senderLocation: {
      type: String,
      required: true,
    },
    receiverName: {
      type: String,
      required: true,
    },
    receiverContact: {
      type: String,
      required: true,
    },
    receiverLocation: {
      type: String,
      required: true,
    },
    items: [
      {
        item: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

const Invoices = mongoose.model("Invoices", invoiceSchema);

module.exports = Invoices;
