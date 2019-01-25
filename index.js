const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const bodyParser = require('body-parser')

const db = require('./db');

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    db('methods')
    .then((rows) => {
      res.send(rows);
    })
    .catch((err) => {
      next(err);
    });
})

app.post("/", (req, res, next) => {
  console.log(req.body)
  db('methods')
  .insert({
    "name": req.body.name,
    "description": req.body.description,
    "example": req.body.example,
    "tags": req.body.tag,
    "link": req.body.link
  })
  .then((rows) => {
    res.send(rows);
    })
  .catch((err) => {
    next(err);
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))