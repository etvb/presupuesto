import React, { useState } from 'react';

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
      return;
    }
    setError(false);
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