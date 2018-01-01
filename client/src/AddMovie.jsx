
import React from 'react';
class AddMovie extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: props.movies,
      addedMovies: [],
      title: ''
    };
    this.addButtonClick = this.addButtonClick.bind(this);
    this.handleAddTitle = this.handleAddTitle.bind(this);
  }
  
  //Add new title to existing list
  handleAddTitle(event) {
    //make a post request, add to the database
    //and then make a get request;
    //Right now since the data is hardcoded, we will have to keep a counter
    //or take the last id and increment and assign a new id to the newly
    //added title
    this.setState(
      {title: event.target.value});
  }
  //TODO: 
    //POST request to /movies with the newly added title
    //invoke the callback passed from the parent compoent
    //the callback should make a GET request to /movies
    //to fetch the latest movies data.

  addButtonClick() {
    var movies = this.state.addedMovies;
    var movieTitle = this.state.title;
    var newId = 0;
    if (movies.length !== 0) {
      newId = Number(movies.length + 1);
    } 
    var newMovie = {title:movieTitle, id:newId}; 
    movies = [...movies, newMovie];
    this.setState({movies: movies,addedMovies: movies});
    this.props.handleAdd(movies);
  }

  render() {
    return (
      <div>  
        <span><input placeholder="Add movie title here" name="giveTitle" onChange={this.handleAddTitle}/></span>
        <span><button onClick={this.addButtonClick}>Add</button></span>
      </div>      
    );
  }
}

// var currentMovies = this.state.movies;
// var newId = 0;
// if ( currentMovies.length !== 0) {
//   newId = Number((currentMovies[currentMovies.length - 1]).id + 1);
// } 
// var title = this.state.title;
// var newMovie = {title, newId};
// var array = [...this.state.movies, newMovie];
// console.log('array ', array);
// this.setState({movies: array});


export default AddMovie;