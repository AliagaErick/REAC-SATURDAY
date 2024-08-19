import React from 'react';
import './ProductList.css';

function ProductList() {
  const products = [
    { name: 'Pizza Americana', img: 'imagen/Pizzaamericana.jpeg', description: 'Descripción de la pizza americana.' },
    { name: 'Pizza Vegetariana', img: 'imagen/Pizzavegetariana.jpeg', description: 'Descripción de la pizza vegetariana.' },
    { name: 'Pizza Hawaiana', img: 'imagen/Pizzahawaiana.jpeg', description: 'Descripción de la pizza hawaiana.' }
  ];

  return (
    <div className="product-list">
      {products.map((product, index) => (
        <div className="product" key={index}>
          <img src={product.img} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;