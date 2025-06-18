import Slider from "react-slick";

import isMobileDevice from "../controllers/checkMobile.controller";

import bannerMob1 from "../img/banner-mob-1.svg";
import bannerMob2 from "../img/banner-mob-2.svg";

import '../style/mainBanner.css';

function MainBanner() {
  if (!isMobileDevice()){
    return (
      <div className="main-banner" >
      </div>
    );
  } else {
      const sliderSettings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        cssEase: "linear"
      };
    return (
      <div className="main-banner-mob">
        <Slider {...sliderSettings} className="banner-slider">
            <img src={bannerMob1}/>
            <img src={bannerMob2}/>
          </Slider>
      </div>
    )
  }
}

export default MainBanner;