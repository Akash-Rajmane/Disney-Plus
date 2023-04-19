import React from 'react';
import styled from 'styled-components';
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

// const Container = styled.section`
//   overflow: hidden;
//   display: flex;
//   flex-direction: column;
//   text-align: center;
//   height: 100vh;
// `;

// const Content = styled.div`
//   margin-bottom: 10vw;
//   width:100%;
//   position: relative;
//   min-height: 100vh;
//   box-sizing: border-box;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   padding: 80px 40px;
//   height: 100%;
// `;

// const BgImage = styled.div`
//   height: 100%;
//   background-position: top;
//   background-size: cover;
//   background-repeat: no-repeat;
//   background-image: url("/images/login-background.jpg");
//   position: absolute;
//   top: 0;
//   right: 0;
//   left: 0;
//   z-index: -1;
// `;

// const CTA = styled.div`
//   max-width: 650px;
//   width: 100%;
//   display: flex;
//   flex-direction: column;
// `;

// const CTALogoOne = styled.img`
//   margin-bottom: 12px;
//   max-width: 600px;
//   min-height: 1px;
//   display: block;
//   width: 100%;
// `;

// const SignUp = styled.a`
//   font-weight: bold;
//   color: #f9f9f9;
//   background-color: #0063e5;
//   margin-bottom: 12px;
//   width: 100%;
//   letter-spacing: 1.5px;
//   font-size: 18px;
//   padding: 16.5px 0;
//   border: 1px solid transparent;
//   border-radius: 4px;
//   &:hover {
//     background-color: #0483ee;
//   }
// `;

// const Description = styled.p`
//   color: hsla(0, 0%, 95.3%, 1);
//   font-size: 11px;
//   margin: 0 0 24px;
//   line-height: 1.5;
//   letter-spacing: 1.5px;
// `;

// const CTALogoTwo = styled.img`
//   max-width: 600px;
//   margin-bottom: 20px;
//   display: inline-block;
//   vertical-align: bottom;
//   width: 100%;
// `;



export default Login;