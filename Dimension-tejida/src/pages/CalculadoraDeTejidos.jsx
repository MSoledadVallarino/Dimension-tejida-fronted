import React, {useState} from "react";
import Barra from "../component/navbar";
import { CalculoFormulario } from '../component/formularioCalculo.jsx';
import calcularDimensiones from '../util.js';

function Calculadora() {

const [resultado, setResultado] = useState('');
const [resultado2, setResultado2] = useState('');


  return (
      <>
 
 <Barra/>

      
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


 

export default Calculadora;
