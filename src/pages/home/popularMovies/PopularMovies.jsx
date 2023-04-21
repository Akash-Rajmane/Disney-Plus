import React from "react";
import Carousel from "../../../components/carousel/Carousel";
import classes from "./PopularMovies.module.scss";
import useFetch from "../../../hooks/useFetch";

const PopularMovies= () => {
    const { data, loading } = useFetch('/movie/popular');

    return (
        <div className={classes.carouselSection}>
        <div className={classes.wrapper}>
            <span className={classes.carouselTitle}>Popular Movies</span>
        </div>
        <Carousel data={data?.results} loading={loading} endpoint={"movie"}/>
    </div>
    );
};

export default PopularMovies;
