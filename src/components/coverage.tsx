import mapLocationImg from "../img/map-location.svg";

import "../style/coverage.css";

function Coverage() {
    return (
        <div className="coverage-container">
            <div className="coverage-wrapper">
                <b>Área de cobertura:</b>

                <div className="cities-wrapper">
                    <div className="column">
                        <span>Cidade 01</span>
                        <span>Cidade 02</span>
                        <span>Cidade 03</span>
                        <span>Cidade 04</span>
                    </div>
                    <div className="column">
                        <span>Cidade 05</span>
                        <span>Cidade 06</span>
                        <span>Cidade 07</span>
                        <span>Cidade 08</span>
                    </div>
                    <div className="column">
                        <span>Cidade 09</span>
                        <span>Cidade 10</span>
                        <span>Cidade 11</span>
                        <span>Cidade 12</span>
                    </div>
                </div>
            </div>
            <img src={mapLocationImg} className="map-icon" />
        </div>
    )
}

export default Coverage;