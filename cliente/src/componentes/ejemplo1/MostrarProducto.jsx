import React from "react";

const MostrarProducto = ({nombre,descripcion}) => {
 
  return (
    <>
      <h3>{nombre}</h3>
      <div>{descripcion}</div>
    </>
  );
};
export default MostrarProducto;
