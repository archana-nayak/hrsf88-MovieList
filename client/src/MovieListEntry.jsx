import React from 'react';

class MovieListEntry extends React.Component {
  // {console.log('In MovieListEntry ', movie);}
  // {console.log('movie title ', movie.title);}
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    this.props.handleWatchClick(this.props.movie);
  }

  render() {
    var {movie, handleWatchClick} = this.props;

    if ( movie.id === -1) {
      return (
        <div>
        <div className="table">
        <div className="row">
          <div className="cell">{movie.title}</div>
        </div>
      </div> 
      </div>
      );
    }
    return (
      <div>
        <div className="table">
        <div className="row">
          <div className="cell">{movie.title}
            <button className="watched" onClick={this.handleClick}>watched</button> 
          </div>
        </div>
      </div> 
      </div>
    );
  }  
}

export default MovieListEntry;