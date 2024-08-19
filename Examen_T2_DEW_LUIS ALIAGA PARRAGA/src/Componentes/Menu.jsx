import React from 'react';
import './Menu.css';

function Menu() {
  return (
    <nav className="menu">
      <ul>
        <li className="menu-item">Acerca de nosotros</li>
        <li className="menu-item">Pizzas</li>
        <li className="menu-item">Complementos</li>
        <li className="menu-item">Tiendas</li>
        <li className="menu-item order">Ordena aquí</li>
      </ul>
      <input type="text" placeholder="Busca tu pizza" />
    </nav>
  );
}