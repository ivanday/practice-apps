require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 4000;

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.static(path.join(__dirname, '../client/src')));


app.post('/words', function(req, res) {

});

app.get('/words', function(req, res) {

});



app.listen(PORT, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${PORT}`);
});
console.log(`Listening at http://localhost:${PORT}`);
