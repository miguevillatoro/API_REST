import React from "react";
import "./BannerPublicitario.css";

function BannerPublicitario() {
    return (
        <div className="publicidad-container">  
            <div className="publicidad">
                <div className="oferta">
                    <img src="/src/img/Blouse.png" alt=""/>
                </div>
                <div className="content-publicidad">
                    <span>HASTA</span>
                    <h3>50% 0ff</h3>
                    <p>La oferta finaliza en 8 días</p>
                    <a href="#" className="btn">Ver oferta</a>
                </div>
                <div className="women">
                    <img src="/src/img/Women.png" alt=""/>
                </div>
            </div>
        </div>
    );
}

export default BannerPublicitario;