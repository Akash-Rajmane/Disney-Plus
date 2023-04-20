import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import DetailsBanner from "./detailsBanner/DetailsBanner";
import TrailersAndMore from "./trailers/TrailersAndMore";
import MoreLikeThis from "./moreLikeThis/MoreLikeThis";
import Recommendations from "./recommendations/Recommendations";


const Details = () => {
    const { mediaType, id } = useParams();
    const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  

    return (
        < >   
            <DetailsBanner  /> 
            <TrailersAndMore data={data} loading={loading} mediaType={mediaType} id={id}/>
            <MoreLikeThis mediaType={mediaType} id={id} />
            <Recommendations mediaType={mediaType} id={id} />
        </>
    );
};

export default Details;
