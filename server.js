// To start a new project
// npm init -y
// npm i
// npm install express
// npm install nodemon
// npm install body-parser --save
// Change package.json
// this part to
// "scripts": {
//   "test": "nodemon server.js",
//   "start": "node server.js"
// },

// Imports
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const mongodb = require('./connections/index');


// Main
// Body Paser / calling routes
app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/', require('./routes'));

// Connect to Mongodb
mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});
