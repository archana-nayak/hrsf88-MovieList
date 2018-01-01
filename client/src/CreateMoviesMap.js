import React from 'react';

export function createMapFromArray(movies, callback) {
  var map = new Map();
  console.log('movies', movies);

  movies.forEach(movie => {
    console.log('movie ', movie);
    map.set(movie.id, movie);
  });
  callback(map);
}

