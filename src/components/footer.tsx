import logo from "../img/customer-logo.svg";
import wppIcon from "../img/whatsapp-icon.svg";
import instagramIcon from "../img/insta-icon.svg";

import "../style/footer.css";

function Footer() {
    return(
        <footer className="footer-element">
            <div className="footer-wrapper">
                <div className="logo-wrapper">
                    <img src={logo} className="logo-image" />
                </div>
                <div className="menu-wrapper">
                    <ul className="menu-list">
                        <li className="menu-item">
                            <a href="#">Home</a>
                        </li>
                        <li className="menu-item">
                            <a href="https://infobrtelecom.tec.br/central_assinante_web/login" target='_blank'>Área do cliente</a>
                        </li>
                    </ul>
                </div>
                <div className="menu-wrapper">
                    <ul className="menu-list">
                        <li className="menu-item">
                            <a href="https://infobr.boletofacil.tec.br/" target='_blank'>2ª via de fatura</a>
                        </li>
                        <li className="menu-item">
                            <a href="wa.me/5579981360580" target='_blank'>Suporte</a>
                        </li>
                    </ul>
                </div>
                <div className="social-wrapper">
                    <b>Siga-nos</b>
                    <div className="social-links-wrapper">
                        <ul className="links-list">
                            <li className="link-item">
                                <a href="https://wa.me/5579981360580" className="social-link" target='_blank'>
                                    <img src={wppIcon} className="social-icon" />
                                </a>
                            </li>
                            <li className="link-item">
                                <a href="https://www.instagram.com/infobr.telecom/" className="social-link" target='_blank'>
                                    <img src={instagramIcon} className="social-icon" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <span>Copyright © 2025 InfoBR Telecom</span>
        </footer>
    )
}

export default Footer;