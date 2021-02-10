const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema(
  {
    name: { type: String, required: true },
    insurances: [
      {
        name: { type: String, required: true },
        agent: { type: String, required: true },
        dateActivated: { type: Date, required: true },
      },
    ],
  },
  { timestamps: false },
);

const Customers = mongoose.model('Customer', customerSchema);

module.exports = Customers;
