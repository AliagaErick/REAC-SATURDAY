import React from "react";

// importamos como "imgpie" el archivo 
import imgpie from './image/pie.jpg';

// componente que mostrará la imagen del pie
function Imgpie(){
    return (
        <img alt="pie de página" src={imgpie} className="imgpie"  />
    );
}

// componente principal
function Pie(){
    return (
        <div>
            <Imgpie></Imgpie>
        </div>
    );
}

// exportamos el componente principal
export default Pie;