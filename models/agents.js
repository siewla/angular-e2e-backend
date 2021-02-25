const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const agentSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: { type: String, required: true },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  { timestamps: false },
);

const Agents = mongoose.model('Agent', agentSchema);

module.exports = Agents;
