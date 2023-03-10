const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/fetcher');

// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them

const word = new mongoose.Schema ({
  name: {type: String, required: true, unique: true},
  definition: String
});

const Word = mongoose.model('Word', word);

const sampleData = Word({
  name: 'test',
  definition: 'a procedure intended to establish the quality, performance, or reliability of something, especially before it is taken into widespread use.'
});

const sampleData2 = Word({
  name: 'data',
  definition: 'facts and statistics collected together for reference or analysis.'
});

let save = function(data) {
  const newWord = Word(data);
  return newWord.save((err, doc) => {
    if (err) {
      console.log('word already exists!');
    } else {
      console.log("Word inserted successfully");
    }
  })
};

save(sampleData);
save(sampleData2);

let get = function() {
  return Word.find({}).exec();
};

let update = function(data) {
  var query  = {'name': data.name};
  var newData = {definition: data.definition};
  return Word.findOneAndUpdate(query, newData, {upsert: true});
};

let deleteWord = function(data) {
  return Word.deleteOne(data.name);
}

module.exports.get = get;
module.exports.save = save;
module.exports.update = update;
module.exports.deleteWord = deleteWord;