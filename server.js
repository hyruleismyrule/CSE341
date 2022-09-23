const express = require('express');
const app = express();
const port = 3000;
const mongodb = require('./connections/index');

app.use('/', require('./routes'));
// app.use('/', require('./routes/contacts'));

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`);
// });

mongodb.initDb((err, mongodb) => {
    if (err) {
      console.log(err);
    } else {
      app.listen(port);
      console.log(`Connected to DB and listening on ${port}`);
    }
  });