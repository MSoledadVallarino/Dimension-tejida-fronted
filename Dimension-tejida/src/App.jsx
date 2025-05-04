import { useState } from 'react';
import maquina from './fotos/maquinadetejer.jpg';
import { calcularDimensiones } from './util';
import { CalculoFormulario }  from './component/formularioCalculo.jsx';
import './App.css';
import {BasicExample} from './component/navbar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

const [resultado, setResultado] = useState('');
const [resultado2, setResultado2] = useState('');

  return (
      <>
 <header className='encabezado'>
  <h1 className='titulo'>DIMENSION TEJIDA</h1>
 <div className='banner'></div>
 <div className='barra'>
 <BasicExample/>
 </div>
</header>

      
      <div className='container'>
        <div className='form'>
      <CalculoFormulario
        labelPasadasAgujasMuestra="Cantidad de agujas:"
        labelCmMuestra="Centímetros de la muestra:"
        labelCmMolde="Centímetros del molde:"
        calcularDimensiones={calcularDimensiones}
        setResultadoEnPadre={setResultado}
      />

      {resultado && (
       <div className="resultado">
          {resultado}
        </div>
      )}
    </div>
    <div className='form'>
    <CalculoFormulario
        labelPasadasAgujasMuestra="Cantidad de pasadas:"
        labelCmMuestra="Centímetros de la muestra:"
        labelCmMolde="Centímetros del molde:"
        calcularDimensiones={calcularDimensiones}
        setResultadoEnPadre={setResultado2}
      />

      {resultado && (
        <div className="resultado">
          {resultado2}
        </div>      
      )}
      </div>
       </div>  

      
  </>  
  );
 
}


 

export default App;

