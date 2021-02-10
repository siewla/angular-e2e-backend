const mongoose = require('mongoose');
require('dotenv').config();
// Configuration
const db = mongoose.connection;

// Connect to Mongo
mongoose.connect(process.env.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Connection Error/Success
module.exports = {
  async connect() {
    await db.on('connected', () => console.log('mongo connected'));
  },
};
