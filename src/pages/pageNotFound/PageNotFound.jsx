import React from 'react'
import classes from "./PageNotFound.module.scss";

const PageNotFound = () => {
  return (
    <div className={classes.pageNotFound}>
            <div className={classes.contentWrapper}>
                <span className={classes.bigText}>404</span>
                <span className={classes.smallText}>Page not found!</span>
            </div>
        </div>
  )
}

export default PageNotFound;