import React, { useState,useEffect } from "react";
import "./TrailersAndMore.scss";
import VideoPopup from "../../../components/videoPopup/VideoPopup";
import Img from "../../../components/lazyLoadImage/Img";


const TrailersAndMore = ({ data, loading, mediatype,id }) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);
  const [showSection,setShowSection] = useState(false);
  
  let flag = data?.results; 
  useEffect(()=>{
    
    if(!flag || flag.length === 0 ){
        setShowSection(false);
    }else{
        setShowSection(true);
    }

  },[mediatype,id,flag])


  const loadingSkeleton = () => {
      return (
          <div className="skItem">
              <div className="thumb skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row2 skeleton"></div>
          </div>
      );
  };

  return (
    <>
      { showSection &&
       <div className="videosSection">
            <div className="wrapper">
                <div className="sectionHeading">Trailers & More</div>
                {!loading ? (
                    <div className="videos">
                        {data?.results?.map((video) => (
                            <div
                                key={video.id}
                                className="videoItem"
                                onClick={() => {
                                    setVideoId(video.key);
                                    setShow(true);
                                }}
                            >
                                <div className="videoThumbnail">
                                    <Img
                                        src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
                                    />
                                    
                                </div>
                                <div className="videoTitle">{video.name}</div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="videoSkeleton">
                        {loadingSkeleton()}
                        {loadingSkeleton()}
                        {loadingSkeleton()}
                        {loadingSkeleton()}
                    </div>
                )}
            </div>
            <VideoPopup
                show={show}
                setShow={setShow}
                videoId={videoId}
                setVideoId={setVideoId}
            />
        </div>}
        </>
  )
}

export default TrailersAndMore;