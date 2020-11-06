import React,{useEffect} from 'react';

const Mensaje=()=>{

    useEffect(()=>{
        
        console.info("+++Mostrando componentes");
        return ()=>{
            console.info("---Desmontando el componente ");
        }
    },[])
       
    

    return (
        <div>
            "Aqui se muestra el msj"
        </div>
    )
}
export default Mensaje;