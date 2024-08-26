import React from "react";

import imgLogo from './image/Logo1.jpg';
import imgTurismo from './image/Turismo1.jpeg';

function Imagen() {
    return (
        <div>
            <img alt="Logo" src={imgLogo} className="img-cab" />
            <img alt="Turismo" src={imgTurismo} className="img-cab" />
        </div>
    );
}