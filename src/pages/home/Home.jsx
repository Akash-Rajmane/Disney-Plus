import React from 'react';
import ImageSlider from './imageSlider/ImageSlider';
import Viewers from './viewers/Viewers';
import classes from "./Home.module.scss";

const Home = (props) => {
  return (
    <div className={classes.container}> 
      <ImageSlider/>
      <Viewers/>
    </div>
  )
}


export default Home;