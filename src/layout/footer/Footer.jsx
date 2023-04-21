import React from 'react';
import classes from "./Footer.module.scss";
import { BsCheck2 } from 'react-icons/bs';
import {TbBrandFacebook,TbBrandTwitter} from "react-icons/tb"

const Footer = () => {
  return (
    <div className={classes.footerBox}> 
        <div className={classes.footer}>
            
            <div>
                <h4>Company</h4>
                <p className={classes.para}>About Us</p>
                <p className={classes.para}>Careers</p>
            </div>
            <div>
                <h4>View Website in</h4>
                <p className={classes.para}><span className={classes.check}><BsCheck2/></span> English</p>
            </div>
            <div>
                <h4>Need Help?</h4>
                <p className={classes.para}>Visit Help Center</p> 
                <p className={classes.para}>Share Feedback</p>   
            </div>
            <div>
                <h4>Connect With Us</h4>
                <p  className={classes.icons}><span><TbBrandFacebook/></span><TbBrandTwitter/><span></span></p>    
            </div>
        </div>
        <div className={classes.footerBase}>
            <p>© 2023 Disney+. All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer