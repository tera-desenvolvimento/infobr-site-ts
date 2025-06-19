import React from 'react';

import logoHeader from '../img/logo-header.svg';
import homeIcon from '../img/home-icon.svg';
import plansIcon from '../img/plans-icon.svg';
import aboutIcon from '../img/about-icon.svg';
import socialIcon from '../img/social-icon.svg';
import contactIcon from '../img/contact-icon.svg';
import menuIcon from "../img/menu-icon.svg";

import '../style/header.css';

import isMobileDevice from "../controllers/checkMobile.controller";

function toggleMobileMenu() {
    let navElement = document.getElementById("navContainerMob");
    navElement?.classList.toggle("active");
}

function Header() {
    if (!isMobileDevice()){
        return (
            <header className="header-container">
                <div className="logo-container">
                    <img src={logoHeader} alt="Logo" className="logo" />
                </div>
                <nav className="nav-container">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <img src={homeIcon} alt="Home Icon" className="nav-icon" />
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#plans" className="nav-link">
                                <img src={plansIcon} alt="Plans Icon" className="nav-icon" />
                                Planos
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="https://www.instagram.com/infobr.telecom/" target='_blank' className="nav-link">
                                <img src={socialIcon} alt="Social Icon" className="nav-icon" />
                                Social
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="https://wa.me/5579981360580" target='_blank' className="nav-link">
                                <img src={contactIcon} alt="Contact Icon" className="nav-icon" />
                                Contato
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    } else {
        return(
            <React.Fragment>
                <header className="header-container-mob">
                    <div className="left-wrapper">
                        <button id="toggleMenu" onClick={toggleMobileMenu}>
                            <img src={menuIcon} />
                        </button>
                        <img src={logoHeader} className="logo-header-mob" />
                    </div>
                </header>
                <div className="nav-container-mob" id="navContainerMob">
                    <nav className="nav-element-mob">
                        <ul className="menu-list-mob">
                            <li className="nav-item">
                            <a href="#" className="nav-link">
                                <img src={homeIcon} alt="Home Icon" className="nav-icon" />
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#plans" className="nav-link">
                                <img src={plansIcon} alt="Plans Icon" className="nav-icon" />
                                Planos
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="https://www.instagram.com/infobr.telecom/" target='_blank' className="nav-link">
                                <img src={socialIcon} alt="Social Icon" className="nav-icon" />
                                Social
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="wa.me/5579981360580" target='_blank' className="nav-link">
                                <img src={contactIcon} alt="Contact Icon" className="nav-icon" />
                                Contato
                            </a>
                        </li>
                        </ul>
                    </nav>
                </div>
            </React.Fragment>
        )
    }
}

export default Header;