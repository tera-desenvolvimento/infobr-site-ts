import Slider from "react-slick";
import TestimonialEl from "./testimonialEl";

import logoBlueImg from "../img/logo-blue.svg";

function Testimonial() {
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
            slidesToScroll: 4,
            infinite: true,
            dots: false
            }
        },
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
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
        <div className="testimonial-container">
            <img src={logoBlueImg} className="logo-img" />
            <b>O que dizem sobre nós:</b>

            <Slider {...sliderSettings} className='testimonial-slider'>
                <TestimonialEl name="João Pereira" testimonial="A InfoBR transformou minha experiência de navegação. A internet é extremamente rápida e estável." />
                <TestimonialEl name="Maria Souza" testimonial="O suporte técnico é incrível, sempre disponível e eficiente. Recomendo a todos!" />
                <TestimonialEl name="Carlos Silva" testimonial="Desde a instalação até o atendimento ao cliente, a InfoBR superou minhas expectativas." />
                <TestimonialEl name="Fernanda Oliveira" testimonial="A melhor internet que já usei. Perfeita para minha empresa." />
                <TestimonialEl name="João Pereira" testimonial="A InfoBR transformou minha experiência de navegação. A internet é extremamente rápida e estável." />
                <TestimonialEl name="Maria Souza" testimonial="O suporte técnico é incrível, sempre disponível e eficiente. Recomendo a todos!" />
                <TestimonialEl name="Carlos Silva" testimonial="Desde a instalação até o atendimento ao cliente, a InfoBR superou minhas expectativas." />
                <TestimonialEl name="Fernanda Oliveira" testimonial="A melhor internet que já usei. Perfeita para minha empresa." />
            </Slider>
        </div>
    )
}

export default Testimonial;