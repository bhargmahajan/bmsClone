import React from 'react';

import axios from 'axios';

import DefaultHOC from './HOC/Default.HOC';
import MovieHOC from './HOC/Movie.HOC';

import HomePage from './pages/Home.page';
import MoviePage from './pages/Movie.page';
import Plays from './pages/Plays.page';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY ;

function App() {
  return (
    <>
    <DefaultHOC path="/" exact component={HomePage} />
    <MovieHOC path="/movie/:id" exact component={MoviePage} />
    <DefaultHOC path="/plays" exact component={Plays} />
    </>
  );
}

export default App;