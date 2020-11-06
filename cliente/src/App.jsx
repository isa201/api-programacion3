import React from 'react';
import MostrarProducto from './componentes/MostrarProducto';

const listaProductos=[
  {
    id:1,
    nombre:"Producto 1",
    descripcion:"Descripcion producto 1"
  }
];
const App = () => {
    return ( <>
                  <MostrarProducto nombre="Producto 1" descripcion="Descripcion producto 1"/>
                  <MostrarProducto nombre="Producto 2" descripcion="Descripcion producto 2"/>
                  <MostrarProducto nombre="Producto 3" descripcion="Descripcion producto 3"/>                 
                  <MostrarProducto nombre="Producto 4" descripcion="Descripcion producto 4"/>
                  <MostrarProducto nombre="Producto 5" descripcion="Descripcion producto 5"/>
                  <MostrarProducto nombre="Producto 6" descripcion="Descripcion producto 6"/>
             </>);
  }
export default App;