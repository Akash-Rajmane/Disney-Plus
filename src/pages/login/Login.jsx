import React from 'react';
import classes from "./Login.module.scss";

const Login = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.cta}>
          <img className={classes.ctaLogoOne} src="/images/cta-logo-one.svg" alt="" />
          <p className={classes.signUp}>GET ALL THERE</p>
          <p className={classes.description}>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 26/06/23, the price of Disney+
            and The Disney Bundle will increase by $1.
          </p>
          <img className={classes.ctaLogoTwo} src="/images/cta-logo-two.png" alt="" />
        </div>
        <img className={classes.bgImage} alt="" src="/images/login-background.jpg"/>
      </div>
    </div>
  )
}


export default Login;