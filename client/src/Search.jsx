import React from 'react';
import _ from 'underscore';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: props.movies,
      title: ''
    };
    // this.titleHash = this.props.hash;
    this.handleChange = this.handleChange.bind(this);
    this.handleGoClick = this.handleGoClick.bind(this);
  }

  
//TODO: Tokenize the input, conduct the search
//and intersection of the result; Use Set to 
//remove duplicate titles
searchTitles(title) {
  var words = title.split(' ');//search for each word
  var resultSet = new Set();
  var context = this;
  words.forEach(word => {
    if (context.props.hash.has(word)) {
      var list = context.props.hash.get(word);
      list.forEach(item => {
        resultSet.add(item);
      });
     } 
  });
  
  this.props.handleSearch([...resultSet]);
}

//on change of search input, change the value in state 
//title property
handleChange(event) {
  console.log(' In handle Change', event.target.value);
  this.setState({
    title: event.target.value
  });
}


handleGoClick() {
  console.log('In handleClick ');
  this.searchTitles(this.state.title);
}

  render() {
    return (
      <span className="search-span">
        <span><input placeholder="Search Movies" onChange={this.handleChange}/></span>
        <span><button onClick={this.handleGoClick}>GO</button></span>
      </span>
    );
  }
}


export default Search;