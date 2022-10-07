const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "My API",
    description: "Contacts"
  },
  host: "localhost:3000",
  schemes: ["https"]
};

const outputFile = "./swagger.json";
// const endpointsFiles = ["./server.js"];
const endpointsFiles = ["./routes/index.js"];
// const endpointsFiles = ["./routes/contacts.js"];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);

// Run server after it gets generated
// swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
//   await import("./index.js");
// });
