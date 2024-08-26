import React, { useState } from "react";

// Componente para el formulario
function Formulario() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // validacion para nombres y apellidos
    const validarNombre = (name) => /^[a-zA-Z\s]+$/.test(name);

    // validacion para el correo electrónico
    const validarEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validarNombre(name)) {
            alert("Por favor, ingrese un nombre y apellidos válidos (solo letras).");
            return;
        }

        if (!validarEmail(email)) {
            alert("Por favor, ingrese un correo electrónico válido.");
            return;
        }

        // Si todas las validaciones pasan, mostrar los datos en un alert
        alert(`Datos enviados:\nNombre: ${name}\nCorreo electrónico: ${email}\nMensaje: ${message}`);
    };

    return (
        <div>
            <FechaHoraActual />

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nombre y apellidos:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Correo electrónico:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message">Qué lugar y cuándo te interesa conocer:</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default Formulario;