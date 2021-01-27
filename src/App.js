import React from 'react';
import Pregunta from './components/pregunta';


function App() {
  return (
    <>
    <div className="container mt-5">
      <div className="row justify-content-center">
        <h1>PRESUPUESTO</h1>
      </div>
      <div className="row d-flex flex-column align-items-center ">
        <h2>Ingresa el Presupeusto</h2>
        <Pregunta />
      </div>
    </div>
    </>

  );
}

export default App;
