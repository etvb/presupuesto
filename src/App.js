import React, { useEffect, useState } from 'react';
import Pregunta from './components/Pregunta';
import Formulario2 from './components/Formulario2';
import Listado from './components/Listado';
import ControlGasto from './components/ControlGasto';


function App() {

  const [presupuesto, setPresupuesto] = useState();
  const [resto, setResto] = useState();
  const [gastos, setGastos] = useState([]);
  const [gasto, setGasto] = useState({});
  const [ocultarLista, setOcultarLista] = useState(true);

  useEffect(()=>{
    setGastos([...gastos, gasto]);

    const presupuestoRestante = resto - gasto.cantidad;
    setResto(presupuestoRestante);

  },[gasto]);

  // function agregarNuevoGasto(gasto) {
  // }

  return (
    <>
    <div className="container mt-5">
      <div className="row justify-content-center">
        <h1>PRESUPUESTO</h1>
      </div>
      <div className="row d-flex flex-column align-items-center">
        <h2>Ingresa el Presupuesto</h2>
        <Pregunta
          setPresupuesto = {setPresupuesto}
          setResto = {setResto}
          setOcultarLista={setOcultarLista}
        />
      </div>
      <div class="row justify-content-center mt-3">
        <div className="col-sm-6 border pb-2">
          <h2 className="text-center">Gastos</h2>
          <Formulario2
            setGasto={setGasto}  
            setOcultarLista={setOcultarLista}        
          />

        </div>
        <div className={ ocultarLista ? "col-sm-6 border d-none" : " col-sm-6 border"} >
          <h2 className="text-center" >Listado</h2>
          <ControlGasto
            presupuesto={presupuesto}
            resto={resto}
          />
          <Listado
            gastos={gastos}
          />
        </div>

      </div>
    </div>
    </>

  );
}

export default App;
