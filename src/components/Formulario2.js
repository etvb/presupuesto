import React, { useState } from 'react';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
const Formulario = () => {

  const [nombre, setNombre] = useState('');
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);



  function handNombre(e) {
    setNombre(e.target.value)
  }

  function handCantidad(e) {
    setCantidad( parseInt(e.target.value));
  }

  const numRandom = () => {
    //Make a random number
    return Math.floor(Math.random() * (10000 - 0)) + 0;
  }

  function pasarGasto(e) {
    e.preventDefault();
    // validar
    if(cantidad < 1 || isNaN(cantidad) || nombre.trim()===''){
      setError(true);
      toastr.error('ambos campos son obligatorios')
      return
    }
    setError(false);

    //construir objeto 

    const gasto = {
      id: numRandom(),
      nombre: nombre ,
      cantidad: cantidad
    }

    console.log(gasto)


  }

  return(
    <>
      <form onSubmit={pasarGasto}>
        <label className="d-block font-weight-bold">Nombre Gasto
          <input type="text" className="d-block w-100" value={nombre} onChange={handNombre} />
        </label>
        <label className="d-block font-weight-bold">Cantidad Gasto
          <input type="number" className="d-block w-100" value={cantidad} onChange={handCantidad} />
        </label>
        <input type="submit" className=" btn btn-primary w-50 d-block m-auto" />
      </form>
    </>
  )
}

export default Formulario;