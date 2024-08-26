import { Fragment } from "react";
import Cabecera from './componente/Cabecera';
import './Cabecera.css'; 
import Cuerpo from './componente/Cuerpo';
import Formulario from './componente/Formulario'
import Pie from './componente/Pie'

function App() {
  return (
    <>
      <Cabecera />
      <Cuerpo />
      <Formulario />
      <Pie />
    </>
  );
}

export default App;
