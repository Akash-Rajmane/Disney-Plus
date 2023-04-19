import React from 'react';
import {Link} from "react-router-dom";
import classes from "./Card.module.scss";

const Card = (link,src,title) => {

  return (
    <div className={classes.wrapper} > 
      <Link to={link}>
        <img src={src} alt={title} />
      </Link>
    </div>
  )
}

export default Card;