import React, { useState } from "react";
import imgLogo from './image/Logo1.jpg';
import imgTurismo from './image/Turismo1.jpeg';
import './Cabecera.css'; // Asegúrate de importar los estilos

function Cabecera() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div>
            <img
                alt="Logotipo"
                src={imgLogo}
                className={`img-cab ${isHovered ? 'hovered' : ''}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            />
            <img
                alt="Turismo"
                src={imgTurismo}
                className="img-cab"
            />

            {/* Enlaces con iconos sociales */}
            <div className="social-icons">
                <a href="#"><i className="bx bxl-facebook"></i></a>
                <a href="#" className="clr"><i className="bx bxl-instagram-alt"></i></a>
                <a href="#"><i className="bx bxl-google"></i></a>
            </div>
        </div>
    );
}

export default Cabecera;

