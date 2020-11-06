import React, {useState} from 'react';

const estadoInicial = 0;

const Ejemplo2 = () => {

    const [contador, setContador] = useState(estadoInicial);
    const reiniciarContador=()=>{
        setContador(estadoInicial);
    }

    return (
        <div>
            <div>Contador: {contador}</div>

            <button onClick={()=>setContador(contador+1)}>Sumar 1</button>
            <button onClick={()=>setContador(contador-1)}>Restar 1</button>
            <button onClick={reiniciarContador}>Reiniciar</button>
        </div>
    )
}
export default Ejemplo2;