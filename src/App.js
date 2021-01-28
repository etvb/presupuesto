import React, { useState } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';



function App() {

  const [presupuesto, setPresupuesto] = useState()
  const [resto, setResto] = useState()

  return (
    <>
    <div className="container mt-5">
      <div className="row justify-content-center">
        <h1>PRESUPUESTO</h1>
      </div>
      <div className="row d-flex flex-column align-items-center ">
        <h2>Ingresa el Presupeusto</h2>
        <Pregunta
          setPresupuesto = {setPresupuesto}
          setResto = {setResto}
        />
      </div>
      <div class="row justify-content-center">
        <div className="col-sm-6 border">
          <h2 className="text-center">skjflkasj</h2>
          <Formulario />
        </div>
        <div className="col-sm-6 border">
          <h2 className="text-center" >wjfpow</h2>

        </div>

      </div>
    </div>
    </>

  );
}

export default App;
