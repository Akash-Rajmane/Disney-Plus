import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import "./DetailsBanner.scss";
import { ThreeDots } from  'react-loader-spinner';
import Genres from "../../../components/genres/Genres";
import useFetch from "../../../hooks/useFetch";
import Img from "../../../components/lazyLoadImage/Img.jsx";



const DetailsBanner = () => {
  

    const { mediaType, id } = useParams();
    const { data, loading } = useFetch(`/${mediaType}/${id}`);

    const { url } = useSelector((state) => state.api);

    const _genres = data?.genres?.map((g) => g.id);

    

    const toHoursAndMinutes = (totalMinutes) => {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
    };

    return (
        <div className="detailsBanner">
            {!loading ? (
                <>
                    {!!data && (
                        <React.Fragment>
                            <div className="backdrop-img">
                                <Img src={url.backdrop + data.backdrop_path} />
                            </div>
                            <div className="opacity-layer"></div>
                            <div className="wrapper">
                                <div className="content">
                                    <div className="leftContent">
                                        <div className="title">
                                            {`${
                                                data.name || data.title
                                            } (${dayjs(
                                                data?.release_date
                                            ).format("YYYY")})`}
                                        </div>
                                        <div className="subtitle">
                                            {data.tagline}
                                        </div>

                                        <Genres data={_genres} />

                                        <div className="row">
                                            <span> Rating: {data.vote_average.toFixed(1)}</span>
                                        </div>
                                        
                                        <div className="overview">
                                            <div className="heading">
                                                Overview
                                            </div>
                                            <div className="description">
                                                {data.overview}
                                            </div>
                                        </div>

                                        <div className="info">
                                            {data.status && (
                                                <div className="infoItem">
                                                    <span className="text bold">
                                                        Status:{" "}
                                                    </span>
                                                    <span className="text">
                                                        {data.status}
                                                    </span>
                                                </div>
                                            )}
                                            {data.release_date && (
                                                <div className="infoItem">
                                                    <span className="text bold">
                                                        Release Date:{" "}
                                                    </span>
                                                    <span className="text">
                                                        {dayjs(
                                                            data.release_date
                                                        ).format("MMM D, YYYY")}
                                                    </span>
                                                </div>
                                            )}
                                            {data.runtime && (
                                                <div className="infoItem">
                                                    <span className="text bold">
                                                        Runtime:{" "}
                                                    </span>
                                                    <span className="text">
                                                        {toHoursAndMinutes(
                                                            data.runtime
                                                        )}
                                                    </span>
                                                </div>
                                            )}
                                             
                                        </div> 
                                        <div className="btnGroup">
                                          <button className="watchNow">▶  Watch Now </button>   
                                          <button className="watchlist">+</button>  
                                        </div>                                 
                                    </div>
                                    
                                </div>
                               
                            </div>
                        </React.Fragment>
                    )}
                </>
            ) : (
                  <div className="wrapper">
                    <div className="center">
                      <ThreeDots  
                          height="80" 
                          width="80" 
                          radius="9"
                          color="#1e90ff" 
                          ariaLabel="three-dots-loading"
                          visible={true}
                      />
                    </div>
                  </div>    
            )}
        </div>
    );
};

export default DetailsBanner;
