import starsImg from '../img/stars.svg';
import custImg from '../img/customer.svg';
import "../style/testimonial.css";

export interface TestimonialProps {
    name: string;
    testimonial: string;
}

function Testimonial(props: TestimonialProps) {
    return (
        <div className="testimonial-element">
            <img src={starsImg} alt="stars-img" className="stars-img" />
            <div className="testimonial-text">
                <p>{props.testimonial}</p>
                <div>
                    <img src={custImg} className="customer-img" />
                    <span>{props.name}</span>
                </div>
            </div>
        </div>
    )
}

export default Testimonial;