import React, { useState, useEffect } from 'react';

const TiempoActual = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (timeUnit) => {
    return timeUnit < 10 ? `0${timeUnit}` : timeUnit;
  };

  const hours = formatTime(time.getHours());
  const minutes = formatTime(time.getMinutes());
  const seconds = formatTime(time.getSeconds());
  const date = time.toLocaleDateString();

  return (
    <div>
      <p>Hora Actual: {hours}:{minutes}:{seconds}</p>
      <p>Fecha Actual: {date}</p>
    </div>
  );
};

export default TiempoActual;