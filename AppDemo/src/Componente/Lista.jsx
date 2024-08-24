import { Fragment } from "react";

function Lista() {
    return (
        <>
            <div className="card" style={{ width: '18rem;' }}>
                <div className="card-header">
                    Ciudades
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Lima</li>
                    <li className="list-group-item">Ayacucho</li>
                    <li className="list-group-item">Huancavelica</li>
                </ul>
            </div>
        </>
    );

}

export default Lista;