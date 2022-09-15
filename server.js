const express = require('express')
const app = express()
const port = 3000

app.use('/', require('./routes'))

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

// https://github.com/hyruleismyrule/CSE341.git

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
