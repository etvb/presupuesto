import React from 'react';
import Gasto from './Gasto';

const Listado = ({gastos}) => {

  return(
    <>
      <div className="container">
        {gastos.map((gasto) => {
          return(
            <Gasto
            key={gasto.id}
              gasto={gasto}
            />
          )
        })

        }
      </div>
      {console.log(gastos)}
    </>
  );
} 

export default Listado;