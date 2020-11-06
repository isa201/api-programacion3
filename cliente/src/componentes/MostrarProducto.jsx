import React from "react";

const MostrarProducto = ({nombre,descripcion}) => {
  /*
  const nombre = props.nombre;
  const descripcion = props.descripcion;
  */
  const {nombre,descripcion} = props;

  return (
    <>
      <h3>{nombre}</h3>
      <div>{descripcion}</div>
    </>
  );
};
export default MostrarProducto;
