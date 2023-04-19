import React, {useEffect} from 'react';
import classes from "./Header.module.scss";
import {  signInWithPopup,signOut,onAuthStateChanged } from "firebase/auth";
import { auth, provider } from "../firebase";
import {useDispatch, useSelector} from "react-redux";
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from "../features/user/userSlice";
import { useNavigate,useLocation } from "react-router-dom";

const Header = (props) => {
  let location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);


  useEffect(() => {
    onAuthStateChanged(auth,async (user) => {
      if (user) {
        setUser(user);
       
        if(location.pathname==="/"){
          navigate("/home");
        }
        
      }
    });
  }, [userName]);
 
  const handleAuth = () => {
    if (!userName) {
      signInWithPopup(auth,provider)
          .then((result) => {
            setUser(result.user);
          })
          .catch((error) => {
            alert(error.message);
          });
    }else if(userName){
        signOut(auth)
          .then(() => {
            dispatch(setSignOutState());
            navigate("/");
            console.log("user signed out");
          })
          .catch((err) => alert(err.message));
    }

  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };




  return (
    <nav className={classes.navigation}>
      <div className={classes.logo}>
        <img src="/images/logo.svg" alt="Disney+" />
      </div>

      {!userName ? (
        <button className={classes.logIn} onClick={handleAuth}>Login</button>
      ) : (
      <>
      <div className={classes.navMenu}>
        <a href="/home">
          <img src="/images/home-icon.svg" alt="HOME" />
            <span>HOME</span>
        </a>
        <a href="/search">
          <img src="/images/search-icon.svg" alt="SEARCH" />
          <span>SEARCH</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
          <span>WATCHLIST</span>
        </a>
        <a href="/movies">
          <img src="/images/movie-icon.svg" alt="MOVIES" />
          <span>MOVIES</span>
        </a>
        <a>
          <img src="/images/series-icon.svg" alt="SERIES" />
          <span>TV </span>
        </a>
      </div>
      <div className={classes.signOut} title="sign out" onClick={handleAuth} role="sign out button">
        <img className={classes.userImg} src={userPhoto} alt={userName} />
        
      </div>
      </>)}
    </nav>
  )
}



export default Header;