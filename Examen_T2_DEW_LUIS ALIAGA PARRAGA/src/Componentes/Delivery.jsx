import React from 'react';
import './Delivery.css';

function Delivery() {
  return (
    <div className="delivery">
      <div className="image-container">
        <img src="imagen/Pizzadelivery.png" alt="Imagen Delivery 1" />
      </div>
      <div className="text-container">
        <h2>Delivery y Reservaciones</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="image-container">
        <img src="imagen/PizzaDelivery.jpeg" alt="Imagen Delivery 2" />
      </div>
    </div>
  );
}

export default Delivery;