import React from 'react';
import MostrarProducto from './MostrarProducto';


const LISTA_PRODUCTOS = [
    {
        id: 1,
        nombre: "Producto 1",
        descripcion: "Descripcion producto 1"
    },
    {
        id: 2,
        nombre: "Producto 2",
        descripcion: "Descripcion producto 2"
    },
    {
        id: 3,
        nombre: "Producto 3",
        descripcion: "Descripcion producto 3-Test"
    }
];
const Ejemplo1 = () => {
    return LISTA_PRODUCTOS.map((prod) => {
        return <MostrarProducto key={prod.id} nombre={prod.nombre} descripcion={prod.descripcion} />
    })

}

export default Ejemplo1;