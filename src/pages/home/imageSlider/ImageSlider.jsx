import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import Slider from "react-slick";
import classes from "./ImageSlider.module.scss";

const ImageSlider = (props) => {

let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      };

return(
    <Slider {...settings} className={classes.carousel}>
    <div className={classes.wrapper}>
      <a>
        <img src="/images/slider-badging.jpg" alt="" />
      </a>
    </div>

    <div className={classes.wrapper}>
      <a>
        <img src="/images/slider-scale.jpg" alt="" />
      </a>
    </div>

    <div className={classes.wrapper}>
      <a>
        <img src="/images/slider-badag.jpg" alt="" />
      </a>
    </div>

    <div className={classes.wrapper}>
      <a>
        <img src="/images/slider-scales.jpg" alt="" />
      </a>
    </div>
  </Slider>
)}

export default ImageSlider;