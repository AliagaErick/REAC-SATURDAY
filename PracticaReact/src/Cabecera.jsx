import React from "react";

// importamos como "imgcabecera" el archivo 
import imgcabecera from './image/header.jpg';

// 1. componente que monstrará un título
function Titulo() {
    return (
        <h1 className="h1cab">Tradiciones</h1>
    );
}

// 2. componente que mostrará la imagen de la cabecera
function Imagen() {
    return (
        <img alt="cabecera" src={imgcabecera} className="imgcab" />
    );
}

// componente principal
function Cabecera() {
    return (
        <div className="bloque">
            <Titulo></Titulo>
            <Imagen></Imagen>
        </div>
    );
}
// exportamos el componente principal
export default Cabecera;