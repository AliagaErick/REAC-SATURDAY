import { Fragment } from 'react';
import Menu from './Componentes/Menu';
import Banner from './Componentes/Banner';
import ProductList from './Componentes/ProductList';
import Delivery from './Componentes/Delivery';
import Footer from './Componentes/Footer';
import TiempoActual from './Componentes/Tiempoactual';
import './App.css';

function App() {
  return (
    <div className="App">
      <Menu />
      <Banner />
      <ProductList />
      <Delivery />
      <Footer />
    </div>
  );
}

export default App;
