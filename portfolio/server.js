const express = require('express');
const mongoose = require('mongoose');
const routes = require('/routes');
// const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (expected to be put on heroku)
app.use(express.static("client/build"));

// ROUTER
require("./routes/apiRoute")(app);
require("./routes/index")(app);

//add routes
app.use(routes);

app.get('/', (req, res) => {
  res.send(`greetings from Jared's Portfolio!`);
  // res.sendFile(path.join(__dirname, './public/index.html')); might need this;
} )

// Connect to the Mongo DB
let databaseUri = "mongodb://localhost/jared_spears_portfolio"
  mongoose.connect(process.env.MONGODB_URI || databaseUri);

let db = mongoose.connection;
  db.on('error', err => console.log('Mongoose Error', err));
  db.once('open', () => console.log('Mongoose Connection Successful!!!'));

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});