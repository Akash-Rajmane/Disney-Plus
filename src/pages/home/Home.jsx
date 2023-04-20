import React from 'react';
import ImageSlider from './imageSlider/ImageSlider';
import Viewers from './viewers/Viewers';
import Trending from './trending/Trending';
import classes from "./Home.module.scss";
import PopularShows from './popularShows/PopularShows';
import PopularMovies from './popularMovies/PopularMovies';

const Home = (props) => {
  return (
    <div className={classes.container}> 
      <ImageSlider/>
      <Viewers/>
      <Trending/>
      <PopularShows/>
      <PopularMovies/>
    </div>
  )
}


export default Home;