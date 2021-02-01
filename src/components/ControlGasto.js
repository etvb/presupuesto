import React from 'react';

const ControlGasto = ({presupuesto, resto}) => {
  return(
    <>
      <div>
        <div>Presupuesto: ${presupuesto}</div>
        <div>Resto: ${resto}</div>
      </div>
    </>

  );
}

export default ControlGasto;