import { Fragment } from "react";
import Mensaje from "./Componente/Mensaje";
import Contador from "./Componente/Contador";
import MiCard from "./Componente/Card";
import Lista from "./Componente/Lista";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
      <Mensaje />
      <Contador />
      <MiCard />
      <Lista />
    </>
  );
}

export default App;
