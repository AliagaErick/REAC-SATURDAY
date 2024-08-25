import { Fragment, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from "./componente/Formulario";


function App() {

  return (
    <>
      <div className="container containmer-fluid">
        <br />
        <br />
        <h1>Ingresa tus datos</h1>
        <Formulario />
      </div>
    </>
  );
}

export default App;
