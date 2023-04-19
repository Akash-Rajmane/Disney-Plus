import React,{useState,useEffect} from 'react';
import classes from "./Search.module.scss"; 
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Search = () => {
  const { data, loading } = useFetch("/movie/upcoming");
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.api);

  useEffect(() => {
    const bg =
        url.backdrop +
        data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
}, [data]);

const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
        navigate(`/search/${query}`);
    }
};

  return (
    
      <div className={classes.container}>
         {!loading && (
                <div className={classes.imgWrapper}>
                    <LazyLoadImage 
                        width={"100%"}
                        height={"100%"}
                        alt=""
                        effect="blur"
                        src={background}
                    />
                </div>
            )}
             <div className={classes.opacityLayer}></div>
             <div className={classes.contentWrapper}>
                <div className={classes.content}>
                    <input
                      type="text"
                      placeholder="Search for a movie or tv show...."
                      onChange={(e) => setQuery(e.target.value)}
                      onKeyUp={searchQueryHandler}
                    />
                    <p className={classes.text}>
                        Millions of movies, TV shows and people to discover.
                        Explore now.
                    </p>
                    
                </div>
            </div>
    </div>
   
  )
}

export default Search;