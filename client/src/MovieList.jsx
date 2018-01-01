import React from 'react';
import MovieListEntry from './MovieListEntry.jsx'

function MovieList({movies, handleWatchClick}) {
  // {console.log('In MovieList ', movies);}
  
  if (movies.length === 0) {
    return (
      <div>
        <MovieListEntry movie={{title: 'No Movies TO Display', id: -1}}/>
      </div>
    );
  }
  return (
    <div>
      { 
        movies.map(movie => (
          <MovieListEntry
            movie={movie}
            key={movie.id}
            handleWatchClick={handleWatchClick}
          />
        ))
      }
    </div>     
  );
}

export default MovieList;