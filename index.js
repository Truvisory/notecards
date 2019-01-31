const express = require('express')
const app = express()
const port = 3001
const cors = require('cors')
const bodyParser = require('body-parser')

const db = require('./db');

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    db('methods').orderBy('id')
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

app.put("/update/:id", (req, res, next) => {
  console.log(req.body.description)
  db('methods')
  .where('id', '=', req.params.id)
  .update(req.body)
  .returning('*')
  .then((rows) => {
    res.send(rows);
    })
  .catch((err) => {
    next(err);
  })
})

app.delete("/she-gone/:id", (req, res, next) => {
  console.log("delete?")
  db('methods')
  .where('id', '=', req.params.id)
  .del()
  .returning('*')
  .then((rows) => {
    res.send(rows);
    })
  .catch((err) => {
    next(err);
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))