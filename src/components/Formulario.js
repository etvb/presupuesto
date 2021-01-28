import React from 'react';

const Formulario = () => {
  return(
    <>
      <form>
        <label className="d-block font-weight-bold">Nombre Gasto
          <input type="text" className="d-block w-100" />
        </label>
        <label className="d-block font-weight-bold">Cantidad Gasto
          <input type="number" className="d-block w-100" />
        </label>
        <input type="submit" className=" btn btn-primary w-50 d-block m-auto" />
      </form>
    </>
  )
}

export default Formulario;