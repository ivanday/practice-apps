const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/fetcher');

// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them

const word = new Schema ({
  name: String,
  definition: String
});

const Word = mongoose.model('Word', word);

let save = function(data) {

};

let get = function() {

};

let update = function() {

};