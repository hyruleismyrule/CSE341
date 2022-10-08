// Imports
const swaggerAutogen = require('swagger-autogen')();

// Main
const doc = {
  info: {
    title: 'My API',
    description: 'Contacts'
  },
  // host: 'localhost:3000',
  host: '//cse341-cynthia-rawlings-2.onrender.com',
  schemes: ['http']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);
