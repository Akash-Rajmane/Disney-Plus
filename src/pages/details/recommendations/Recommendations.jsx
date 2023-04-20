import React,{useState,useEffect} from "react";
import Carousel from "../../../components/carousel/Carousel";
import useFetch from "../../../hooks/useFetch";
import classes from "./Recommendations.module.scss";

const Recommendations = ({ mediaType, id }) => {
    const { data, loading } = useFetch(
        `/${mediaType}/${id}/recommendations`
    ); 
    const [show, setShow] = useState(false);
    
    let flag = data?.results;
    useEffect(()=>{
        if(!flag || flag.length===0){
            setShow(false);
        }else{
            setShow(true);
        }
    },[mediaType,id,flag])

    return (
        <>
        {show &&
            (<div className={classes.carouselSection}>
                <Carousel
                    title="Recommendations For You"
                    data={data?.results}
                    loading={loading}
                    endpoint={mediaType}
                />
            </div>)}
        </>
    );
};

export default Recommendations;
