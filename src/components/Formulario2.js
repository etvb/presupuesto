import React, { useState } from 'react';

const Formulario = () => {

  const [nombre, setNombre] = useState('');
  const [cantidad, setCantidad] = useState(0);

  function handNombre(e) {
    setNombre(e.target.value)
  }

  function handCantidad(e) {
    setCantidad( parseInt(e.target.value));
  }

  return(
    <>
      <form>
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