import { Fragment, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Contador() {
    const [contar, setContar] = useState(0);
    const hacerClic = () => {
        setContar(contar + 1);
    }

    return (
        <>
            <div className="container mt-3">
            <div className="row justify-content-center">
            <div className="col-md-auto">
            <p className="display-4 text-center" >Haz realizado {contar} veces clic en el botón </p>
            <button onClick={hacerClic} className="btn btn-danger">Contar</button>
            </div>
            </div>
            </div>
        </>
    );
}

export default Contador;