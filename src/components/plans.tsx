import plan150img from "../img/plan-150.svg";
import plan200Img from "../img/plan-200.svg";
import plan500Img from "../img/plan-500.svg";
import plan700Img from "../img/plan-700.svg";
import plan1000Img from "../img/plan-1000.svg";

import "../style/plans.css";

function Plans() {
    return(
        <div className="plans-container">
            <b>Conheça nossos planos</b>

            <div className="plans-wrapper top-wrapper">
                <div className="plan-item">
                    <img src={plan150img} className="plan-image" />
                    <a href="#" className="plan-link">
                        Contratar
                    </a>
                </div>
                <div className="plan-item">
                    <img src={plan200Img} className="plan-image" />
                    <a href="#" className="plan-link">
                        Contratar
                    </a>
                </div>
                <div className="plan-item">
                    <img src={plan500Img} className="plan-image" />
                    <a href="#" className="plan-link">
                        Contratar
                    </a>
                </div>
            </div>
            <div className="plans-wrapper bottom-wrapper">
                <div className="plan-item">
                    <img src={plan700Img} className="plan-image" />
                    <a href="#" className="plan-link">
                        Contratar
                    </a>
                </div>
                <div className="plan-item">
                    <img src={plan1000Img} className="plan-image" />
                    <a href="#" className="plan-link">
                        Contratar
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Plans;