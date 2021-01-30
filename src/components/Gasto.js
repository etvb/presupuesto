import React from 'react';

const Gasto = ({gasto}) => {

  return(
    <>
      <div className="row justify-content-between">
        <p>{gasto.nombre}</p>
        <p>{gasto.cantidad}</p>
      </div>
    </>
  );
}

export default Gasto;