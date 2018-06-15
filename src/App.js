import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
  // Render Cycle: componentWillMount() -> render() -> componentDidMount
  // Update Cycle: componentWillReceiveProps() -> shoudComponentUpdate() ->
  //              componentWillUpdate() -> render() -> componentDidUpdate()

  state = {
  };

  componentDidMount() {
    this._getMovies();
  }

  _renderMovies = () => {
    var movieCompList = this.state.movies.map(movie => {
      return(<Movie 
        title={movie.title} 
        poster={movie.large_cover_image} 
        key={movie.id}
        genres={movie.genres}
        synopsis={movie.synopsis}
      />);
    });
    return movieCompList;
  };

  _getMovies = async () => {
    const movies = await this._callApi();
    this.setState({
      movies
    });
  }

  _callApi = () => {
    return fetch("https://yts.am/api/v2/list_movies.json?sort_by=download_count")
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(error => console.log(error))
  }

  render() {
    const { movies } = this.state;
    return (
      <div className={movies ? "App" : "app-loadin"}>
        {this.state.movies ? this._renderMovies() : "Loading..."}
      </div>
    );
  }
}

export default App;
