import React from 'react';
import Search from './Search.jsx';
import MovieList from './MovieList.jsx';
import AddMovie from './AddMovie.jsx';
import WatchList from './WatchList.jsx';
import * as CreateIndex from './CreateIndex.js';
import * as CreateMoviesMap from './CreateMoviesMap.js';

var movies = [
  {title: 'Mean Girls', id: 0},
  {title: 'Hackers', id: 1},
  {title: 'The Grey', id: 2},
  {title: 'Sunshine', id: 3},
  {title: 'Ex Machina', id: 4},
  {title: 'Hackers Boys', id:5}
];
//list of movies that have been watched
//list of movies that have to be watched
//Initially when you bring up data ,all
//of the movies have to be in the toWatchSet


class App extends React.Component  {

  constructor(props) {
    super(props);
    this.state = {
      movies: movies,
      moviesHash: new Map(),
      watchFlag: 'tw', //initially set all the movies to To Watch
    };
    this.watchedMap = new Map();
    this.toWatchMap = new Map();
    this.handleListChange = this.handleListChange.bind(this);
    this.toggleWatchList = this.toggleWatchList.bind(this);
    this.handleWatchListChange = this.handleWatchListChange.bind(this);
    // this.handleToWatchListChange = this.handleToWatchListChange.bind(this);
  }

  componentDidMount() {
    console.log('In componendDid mount');
    CreateIndex.createMoviesHash(this.state.movies, this.state.moviesHash, (moviesHash) => {
      this.setState( {moviesHash: moviesHash});
    });
    console.log('the hash created ', this.state.moviesHash);
  
    CreateMoviesMap.createMapFromArray(this.state.movies, (map) => {
      
      this.toWatchMap = map;
    } );
    console.log('toWatchMap ', this.toWatchMap);
  }

  toggleWatchList(flag){
    
    if (this.state.watchFlag !== flag) {
      console.log('Clicked different button, flag ', this.state.watchFlag);
      var newList = (flag === 'w') ? [...this.watchedMap.values()] : [...this.toWatchMap.values()];
      console.log('In toggleWatchList, the list generated ', newList);
      this.setState({watchFlag: flag, movies: newList});
    } else {
      console.log('clicked the same button, flag', this.state.watchFlag);
      //refresh the current list
      // this.setState((watchFlag: flag));
    }
  }

  handleWatchListChange(movie) {
    //remove the movie object from
    //watchedSet, Add to toWatchSet
    //this.setState({movies: watchedSet})
    //should cause rerendering
    var flag = this.state.watchFlag;
    if (movie.id === undefined) {
      console.log('Movie cannot be moved, id not defined');
    }
    if (flag === 'w') {
      this.watchedMap.delete(movie.id);
      this.toWatchMap.set(movie.id, movie);
      this.setState({movies: [...this.watchedMap.values()]});
    } else {
      this.toWatchMap.delete(movie.id);
      this.watchedMap.set(movie.id, movie);
      this.setState({movies: [...this.toWatchMap.values()]});
    }

  }

  //gets called from the Search and Add components
  handleListChange(results) {
    console.log('In app , results after serach ', results);
    this.setState({
      movies : results
    });
  }

  render() {
    var watchedBgColor = this.state.watchFlag === 'w' ? 'green' : 'beige';
    var toWatchBgColor = this.state.watchFlag === 'tw' ? 'green' : 'beige';

    return (
      <div>
        <div className="add-movies">
          <AddMovie movies={this.state.movies} handleAdd={this.handleListChange} hash={this.state.moviesHash}/>
        </div>
        <div className="search-movies">
          <span><WatchList buttonName="w" backColor={watchedBgColor} toggleWatchList={this.toggleWatchList}/></span>
          <span><WatchList buttonName="tw" backColor={toWatchBgColor} toggleWatchList={this.toggleWatchList}/></span>
          <Search movies={this.state.movies} handleSearch={this.handleListChange}  hash={this.state.moviesHash}/>
        </div>
        <div className="movies">
          <MovieList movies={this.state.movies} handleWatchClick={this.handleWatchListChange}/>
        </div>
      </div>  
    );
  }  
}

export default App;

// movielist={this.state.watchedSet}
// movielist={this.state.toWatchSet}