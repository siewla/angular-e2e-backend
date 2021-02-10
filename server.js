const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT;
const db = require('./database');

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
db.connect().then(() => {
  app.emit('ready');
});

app.listen(PORT, () => {
  console.log(`App is listening on PORT: ${PORT}`);
});
