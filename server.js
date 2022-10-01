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
const mongodb = require('./connections/index');
const bodyParser = require('body-parser');

app.use('/', require('./routes'));

// Main
app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/', require('./routes'));
  
mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});

// console.log("Made it to the end of server.js")
