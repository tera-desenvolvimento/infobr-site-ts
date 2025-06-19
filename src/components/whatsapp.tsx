import whatsappIcon from '../img/whatsapp-btm.svg';

import "../style/whatsapp.css"

function Whatsapp() {
    return (
        <a href="https://wa.me/5579981360580" target='_blank' className='whatsapp-button'>
            <img src={whatsappIcon} alt="whatsapp-icon" className='whatsapp-icon' />
        </a>
    )
}

export default Whatsapp;