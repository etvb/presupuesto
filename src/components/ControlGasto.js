import React from 'react';
import {revisarPresupuesto} from '../helpers';

const ControlGasto = ({presupuesto, resto}) => {
  return(
    <>
      <div>
        <div>Presupuesto: ${presupuesto}</div>
        <div class={revisarPresupuesto(presupuesto, resto)}>Resto: ${resto}</div>
      </div>
    </>

  );
}

export default ControlGasto;