import React, { useState } from "react";
// Componente para mostrar la fecha y hora actual
function FechaHoraActual() {
    const [fecha, setFecha] = useState(new Date());

    React.useEffect(() => {
        const timer = setInterval(() => setFecha(new Date()), 1000);
        return () => clearInterval(timer); // Limpiar el intervalo cuando el componente se desmonta
    }, []);

    const formatoFecha = fecha.toLocaleDateString("es-ES", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });

    const formatoHora = fecha.toLocaleTimeString("es-ES");

    return (
        <div>
            <p>Fecha: {formatoFecha}</p>
            <p>Hora: {formatoHora}</p>
        </div>
    );
}