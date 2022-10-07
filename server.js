// To start a new project
// npm init -y
// npm i
// npm install express
// npm install nodemon
// npm install body-parser --save
// npm install --save-dev swagger-autogen
// npm i swagger-ui-express -S
// Change package.json
// this part to
// "scripts": {
//   "test": "nodemon server.js",
//   "start": "node server.js"
// },

// npm install swagger-ui-express
// npm install swagger-jsdoc

// Imports
const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const mongodb = require("./connections/index");

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger');

// const swaggerUi = require("swagger-ui-express");
// const swaggerDocument = require("./swagger.json");

// const cors = require("cors");
// const swaggerUi = require("swagger-ui-express");
// const swaggerDocument = require("./swagger.json");

// const swaggerJsDoc = require("swagger-jsdoc");
// const swaggerUi = require("swagger-ui-express");

// const swaggerOptions = {
//   swaggerDefinition: {
//     info: {
//       title: "Contacts API",
//       description: "CSE341"
//     },
//     contact: {
//       name: "Cynthia"
//     },
//     servers: ["http://localhost:3000"]
//   },
//   apis: ["server.js"]
//   // apis: [".routes/*.js"]
// };

// const swaggerDocs = swaggerJsDoc(swaggerOptions);

// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
// // Main

// /**
//  * @swagger
//  * /api/contacts:
//  * get:
//  *  description: Use to request all contacts
//  *  responces:
//  *    "200":
//  *      description: A sucessful responce
//  */

// Body Paser / calling routes
app
  // .use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))
  // .use(cors())
  .use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: true }))
  // .use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))
  .use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
  })
  .use("/", require("./routes"));

// Connect to Mongodb
mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});
