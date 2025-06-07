import boletoImg from '../img/boleto-icon.svg';
import screenImg from '../img/screen-icon.svg';
import customerImg from '../img/customer-icon.svg';
import rocketIcon from '../img/rocket-icon.svg';
import logoBg from '../img/logo-bg.png';

import '../style/fastLinks.css';

function FastLinks() {
    return (
        <div className="fast-links-container">
            <b className="header">Acessos rápidos</b>
            <div className="links-wrapper">
                <div className="item-card">
                    <img src={boletoImg} className="boleto-icon" alt="Boleto Icon"/>
                    <b className="link-text">2ª via do boleto</b>
                    <a href="#" target="_blank" className="fast-link" rel="noopener noreferrer">Gerar via</a>
                </div>
                <div className="item-card">
                    <img src={screenImg} className="screen-icon" alt="Screen Icon"/>
                    <b className="link-text">Portal do assinante</b>
                    <a href="#" target="_blank" className="fast-link" rel="noopener noreferrer">Acessar</a>
                </div>
                <div className="item-card">
                    <img src={customerImg} className="customer-icon" alt="Customer Icon"/>
                    <b className="link-text">Área do cliente</b>
                    <a href="#" target="_blank" className="fast-link" rel="noopener noreferrer">Acessar</a>
                </div>
                <div className="item-card">
                    <img src={rocketIcon} className="rocket-icon" alt="Rocket Icon"/>
                    <b className="link-text">Teste de velocidade</b>
                    <a href="#" target="_blank" className="fast-link" rel="noopener noreferrer">Acessar</a>
                </div>
            </div>

            <img src={logoBg} className="logo-bg-top" alt="Logo Background"/>
            <img src={logoBg} className="logo-bg-bottom" alt="Logo Background"/>
        </div>
    )
}

export default FastLinks;