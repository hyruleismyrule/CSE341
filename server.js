// Imports
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const mongodb = require('./connections/index');
const swaggerUi = require('swagger-ui-express');
// Note!!! To load the page it needs to be .json at the end
const swaggerDocument = require('./swagger.json');
// However!!! To generate the auto swagger it needs to not have the .json
// const swaggerDocument = require('./swagger');

// Main
app
  .use(cors())
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: true }))
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
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
