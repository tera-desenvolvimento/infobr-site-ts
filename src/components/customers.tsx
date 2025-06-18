import Slider from "react-slick";

import logoBlueImg from "../img/customer-logo.svg";

import "../style/customers.css"

function Customers() {
    const sliderSettings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        responsive: [
        {
            breakpoint: 2700,
            settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
            infinite: true,
            dots: false
            }
        },
        {
            breakpoint: 1500,
            settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: false
            }
        },
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
        ]
    };

    return (
        <div className="customers-container">
            <b>Alguns de nossos clientes</b>

            <Slider {...sliderSettings} className='customers-slider'>
                <img src={logoBlueImg} className="logo-customer" />
                <img src={logoBlueImg} className="logo-customer" />
                <img src={logoBlueImg} className="logo-customer" />
                <img src={logoBlueImg} className="logo-customer" />
                <img src={logoBlueImg} className="logo-customer" />
                <img src={logoBlueImg} className="logo-customer" />
                <img src={logoBlueImg} className="logo-customer" />
                <img src={logoBlueImg} className="logo-customer" />
                <img src={logoBlueImg} className="logo-customer" />
                <img src={logoBlueImg} className="logo-customer" />
                <img src={logoBlueImg} className="logo-customer" />
                <img src={logoBlueImg} className="logo-customer" />
                <img src={logoBlueImg} className="logo-customer" />
                <img src={logoBlueImg} className="logo-customer" />
                <img src={logoBlueImg} className="logo-customer" />
                <img src={logoBlueImg} className="logo-customer" />
                <img src={logoBlueImg} className="logo-customer" />
                <img src={logoBlueImg} className="logo-customer" />
            </Slider>
        </div>
    )
}

export default Customers;