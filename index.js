const express = require('express')
const app = express()
const port = 3000

const db = require('./db');

app.get('/', (req, res) => {
    db('methods')
    .then((rows) => {
      res.send(rows);
    })
    .catch((err) => {
      next(err);
    });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))