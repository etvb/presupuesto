import React, { useState } from 'react';
import toastr from 'toastr';
import 'toastr/build/toastr.css';

const Pregunta = () => {
  
  const [ cantidad, setCantidad ] = useState(0);
  const [error, setError] = useState(false); //maneja la validacion si el error es false se manda el presupuesto

  const handChange = (e) => {
    setCantidad(parseInt(e.target.value));
  }

  const agregarPresupuesto = (e) => {
    e.preventDefault();

    if(cantidad < 1 || isNaN(cantidad)){
      setError(true);
      toastr.error('El valor tienen que ser mayor de 0 y solo numeros');
      return;
    }
    setError(false);
    toastr.success('Valor agregado correctamente');

  }


  return (
    <>

    <form 
      className="w-100 border text-center"
      onSubmit={agregarPresupuesto}
    >
      <input
        type="text"
        className="w-50"
        onChange={handChange}

      />
      <input type="submit" className="btn btn-sm btn-primary ml-5" value="Enviar"/>  

    </form>
      
    </>

  );
}

export default Pregunta;