import React, { useState, useEffect } from 'react';

const CurrentDateTime = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer); 
  }, []);

  return (
    <div>
      <h1>Текущая дата и время:</h1>
      <p>{dateTime.toLocaleString()}</p>
    </div>
  );
};

export default CurrentDateTime;