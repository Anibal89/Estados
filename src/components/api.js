import React, { useEffect, useState } from "react";

const Api = () => {
  const [equipo, setEquipo] = useState([]);

  useEffect(() => {
    //console.log('hola')
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await data.json();
    //console.log(users)
    setEquipo(users);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Prueba de hooks :v</h1>
      <ul>
        {equipo.map((item) => (
          <li key={item.id}>
            {" "}
            {item.name} - {item.email} - {item.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Api;
