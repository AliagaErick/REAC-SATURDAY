import { Fragment } from "react";
import './App.css'
import Menu from './Menu'
import Cabecera from './Cabecera'
import Cuerpo from './Cuerpo'
import Pie from './Pie'

function App() {
  return (
    <>
      <Menu />
      <Cabecera />
      <Cuerpo />
      <Pie />
    </>
  );
}

export default App;