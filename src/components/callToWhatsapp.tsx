import cellphoneImg from "../img/cellphone-img.svg";
import whatsappImg from "../img/whatsapp.svg";
import leftLogo from "../img/logo-bg-lft.svg";
import rightLogo from "../img/logo-bg-rgt.svg";

import "../style/callToWhatsapp.css"

function CallToWhatsapp() {
    return(
        <div className="ctw-container">
            <img src={cellphoneImg} className="ctw-cellphone-image" />
            <div className="ctw-wrapper">
                <b>Vem conversar com a gente no Whatsapp!</b>
                <div>
                    <img src={whatsappImg} className="wpp-icon" />
                    <a href="https://wa.me/5579981360580" className="wpp-link">Clique aqui para conversar</a>
                </div>
            </div>
            <img src={leftLogo} className="left-bg-logo" />
            <img src={rightLogo} className="right-bg-logo" />
        </div>
    )
}

export default CallToWhatsapp;