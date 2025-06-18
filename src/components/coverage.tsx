import mapLocationImg from "../img/map-location.svg";

import "../style/coverage.css";

function Coverage() {
    return (
        <div className="coverage-container">
            <div className="coverage-wrapper">
                <b>Área de cobertura:</b>

                <div className="cities-wrapper">
                    <div className="column">
                        <span>Aracaju - SE</span>
                        <span>Propriá - SE</span>
                        <span>Cedro de São João - SE</span>
                        <span>São Brás - AL</span>
                        <span>Capela - SE</span>
                    </div>
                    <div className="column">
                        <span>Porto Real do Colégio - AL</span>
                        <span>Telha - SE</span>
                        <span>Amparo do São Franciso - SE</span>
                        <span>Canhoba - SE</span>
                    </div>
                    <div className="column">
                        <span>São Francisco - SE</span>
                        <span>Malhada dos Bois - SE</span>
                        <span>Muribeca - SE</span>
                        <span>Aquidabã - SE</span>
                    </div>
                </div>
            </div>
            <img src={mapLocationImg} className="map-icon" />
        </div>
    )
}

export default Coverage;