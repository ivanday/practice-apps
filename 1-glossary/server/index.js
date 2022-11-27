require("dotenv").config();
const express = require("express");
const bodyParser = require('body-parser');
const path = require("path");
const db = require('./db.js');

const app = express();

const PORT = process.env.PORT || 4000;

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.static(path.join(__dirname, '../client/src')));
app.use(bodyParser.json({
  extended: true
}));


app.post('/words', (req, res) => {
  //call database send with new word information
  db.save(req.data.body).then(
    db.get().then((response) => {
      res.send(response);
    })
  )
});

app.post('/words/update', (req, res) => {
  console.log(req.body);
  db.update(req.body).then((response) => {
    console.log('word updated successfully');
    res.send();
  })
})

app.post('/words/delete', (req, res) => {
  db.deleteWord(req.body.data).then((response) => {
    console.log('word deleted successfully');
    res.send();
  })
});

app.get('/words', (req, res) => {
  //query the database for all words
  //send back all words
  db.get().then((response) => {
    res.send(response);
  })
});



app.listen(PORT, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${PORT}`);
});
console.log(`Listening at http://localhost:${PORT}`);
