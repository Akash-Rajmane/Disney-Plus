import React, { useEffect } from "react";
import classes from "./Header.module.scss";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { auth, provider } from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from "../../features/user/userSlice";
import { useNavigate, useLocation, Link } from "react-router-dom";

const Header = (props) => {
  let location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);

        if (location.pathname === "/login") {
          navigate("/");
        }
      }
    });
  }, [userName]);

  const handleAuth = () => {
    if (!userName) {
      signInWithPopup(auth, provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else if (userName) {
      signOut(auth)
        .then(() => {
          dispatch(setSignOutState());
          navigate("/");
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
        <button className={classes.logIn} onClick={handleAuth}>
          Login
        </button>
      ) : (
        <>
          <div className={classes.navMenu}>
            <Link to="/home">
              <img src="/images/home-icon.svg" alt="HOME" title="Home" />
              <span>HOME</span>
            </Link>
            <Link to="/search">
              <img src="/images/search-icon.svg" alt="SEARCH" title="Search" />
              <span>SEARCH</span>
            </Link>
            <Link to="/explore/movie">
              <img src="/images/movie-icon.svg" alt="MOVIES" title="Movies" />
              <span>MOVIES</span>
            </Link>
            <Link to="/explore/tv">
              <img src="/images/series-icon.svg" alt="SERIES" title="TV" />
              <span>TV </span>
            </Link>
            <Link>
              <img
                src="/images/watchlist-icon.svg"
                alt="WATCHLIST"
                title="Watchlist"
              />
              <span>WATCHLIST</span>
            </Link>
          </div>
          <div
            className={classes.signOut}
            title="sign out"
            onClick={handleAuth}
            role="button"
          >
            <img className={classes.userImg} src={userPhoto} alt={userName} />
          </div>
        </>
      )}
    </nav>
  );
};

export default Header;
