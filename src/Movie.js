import React from 'react';
import './Movie.css';
import PropTypes from 'prop-types';

/*
class Movie extends Component {
    static propTypes = {
      title: PropTypes.string.isRequired,
      poster: PropTypes.string.isRequired
    };

    render() {
      return (
        <div>
          <h3>{this.props.title}</h3>
          <MoviePoster poster={this.props.poster}/>
      </div>
      );
    }
}
*/

function Movie({title, poster}) {
  return(
    <div>
      <h3>{title}</h3>
      <MoviePoster poster={poster}/>
    </div>
  );
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
}

/* Smart Component with states
class MoviePoster extends Component {
  static propTypes = {
    poster: PropTypes.string.isRequired
  }

  render() {
    return (
      <img src={this.props.poster} alt="No Movie Poster"/>
    );
  }
}
*/

// Dumb Component without states
function MoviePoster({poster}) {
  return (
    <img src={poster} alt="No Movie Poster"/>
  );
}

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired
}


export default Movie;
