// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, done) {
  // console.log('breedDetailsFromFile: Calling readFile...');
  const breedData = fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    // console.log("In readFile's Callback: it has the data.");
    error ? done(undefined) : done(data)
  });
};

module.exports = breedDetailsFromFile;