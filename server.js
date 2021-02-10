const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

const mongoose = require('mongoose');

const PORT = process.env.PORT;

// Configuration
const db = mongoose.connection;

// Connect to Mongo
mongoose.connect(process.env.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Connection Error/Success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () =>
  console.log('mongo connected: ', process.env.mongoURI),
);
db.on('disconnected', () => console.log('mongo disconnected'));

db.on('open', () => {
  console.log('Connection made!');
});

/*------------MIDDLEWARE------------*/
app.use(cors());
app.use(
  express.urlencoded({
    extended: false,
  }),
); // extended: false - does not allow nested objects in query strings
app.use(express.json());

if (process.env.NODE_ENV === 'dev') {
  app.use(
    cors({
      origin: process.env.CLIENT_URL,
    }),
  );
}

/*------------Route------------*/
//Load All routes
require('./routes')(app);

/*------------LISTENER------------*/
app.listen(PORT, () => {
  console.log(`App is listening on PORT: ${PORT}`);
});
