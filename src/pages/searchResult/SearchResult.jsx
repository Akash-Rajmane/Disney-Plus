import React from 'react';


import { ThreeDots } from  'react-loader-spinner'
import Card from "../../components/card/Card";
import Carousel from "../../components/Carousel";

const SearchResult = () => {
  return (
    <div>
       
        
        <ThreeDots 
        height="80" 
        width="80" 
        radius="9"
        color="#1e90ff" 
        ariaLabel="three-dots-loading"
        visible={true}
        />
        <Carousel>

        </Carousel>
        
    </div>
  )
}

export default SearchResult;
