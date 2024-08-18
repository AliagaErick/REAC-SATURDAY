import React from "react";
// importamos como "tradiciones" el archivo librería de imágenes
import Tradiciones from './Tradiciones'

// crea un arreglo con las imágenes para el cuerpo, recorriendo
// el arreglo devuelto en la librería de imágenes
const imgs = Tradiciones.map((x) =>
    <img className="imgseccion" alt={x} src={x}></img>
);

// componente principal
function Cuerpo() {
    return (
        <div className="divseccion">
            {imgs}
        </div>
    );
}
// exportamos el componente principal
export default Cuerpo;