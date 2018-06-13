import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
  // Render Cycle: componentWillMount() -> render() -> componentDidMount
  // Update Cycle: componentWillReceiveProps() -> shoudComponentUpdate() ->
  //              componentWillUpdate() -> render() -> componentDidUpdate()

  state = {
  }

  componentDidMount() {
    console.log(fetch("https://yts.am/api/v2/list_movies.json?sort_by=rating"));
//    .then(response => console.log(response))
//    .catch(error => console.log(error.message))
  }

  _renderMovies = () => {
    var movieCompList = this.state.movies.map((movie, index) => {
      return(<Movie title={movie.title} poster={movie.poster} key={index}/>);
    });
    return movieCompList;
  };

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : "Loading..."}
      </div>
    );
  }
}

export default App;
