// importar las librerías de React
import React from "react";

// crear un arreglo con los nombres del menú
const nombres = ['Index', 'Tradiciones', 'Gastronomía', 'Plato Bandera', 'Contactenos'];

// recorre el arreglo de nombres (método map) para crear los elementos del menú
const items = nombres.map((x) => <a href="#" className="item">{x}</a>);

// crea un componente funcional para el menú
function Menu() {
    return (
        <div className="bloque">
            {items}
        </div>
    );
}

// exporta el componente a utilizar en el archivo Principal (App.js)
export default Menu;


