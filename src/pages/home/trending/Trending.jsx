import React from "react";
import Carousel from "../../../components/carousel/Carousel";
import useFetch from "../../../hooks/useFetch";
import classes from "./Trending.module.scss";

const Trending = () => {
    const { data, loading } = useFetch(`/trending/movie/week`);

    return (
        <div className={classes.carouselSection}>
            <div className={classes.wrapper}>
                <span className={classes.carouselTitle}>Latest & Trending</span>
            </div>
            <Carousel data={data?.results} loading={loading} />
        </div>
    );
};

export default Trending;