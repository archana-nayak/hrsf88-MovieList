import React from 'react'; //not necessarily needed
//psuedocode:
//create a hash of all the words with 
//the individual words as the keys
//and an array of titles as the 
// values;
//iterate over the words in the title
//and check against the hash. If word
//match found, return the list of titles
//else do not populate the movie list


//movies is an array of movie
//titles or look for titles
//from the array of objects


export function createMoviesHash(movies, titleHash, callback) {
movies.forEach(movie => {
  this.addTitleToHash(movie, titleHash, callback);
});
}

export function addTitleToHash(movie, titleHash, callback) {
var words = movie["title"].split(' ');
words.forEach((word) => {
  if (titleHash.has(word)) {
    titleHash.get(word).push(movie);
  } else {
    titleHash.set(word, [movie]);
  }
});
  callback(titleHash);
}

// export default CreateIndex;