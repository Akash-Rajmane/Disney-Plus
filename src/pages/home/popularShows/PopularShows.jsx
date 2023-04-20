import React from "react";
import Carousel from "../../../components/carousel/Carousel";
import classes from "./PopularShows.module.scss";
import useFetch from "../../../hooks/useFetch";

const PopularShows= () => {
    const { data, loading } = useFetch('/tv/popular');

    return (
        <div className={classes.carouselSection}>
            <div className={classes.wrapper}>
                <span className={classes.carouselTitle}>Popular Shows</span>
            </div>
            <Carousel data={data?.results} loading={loading} />
        </div>
    );
};

export default PopularShows;
