import React, {useState} from "react";
// Asumo que tienes un componente Barra
import Barra from "../component/navbar.jsx"; 
import { CalculoFormulario } from '../component/formularioCalculo.jsx';
// Asumo que este util.js contiene la función calcularDimensiones
import calcularDimensiones from '../util.js'; 

function Calculadora() {

const [resultadoAgujas, setResultadoAgujas] = useState(''); // Usamos nombres más descriptivos
const [resultadoPasadas, setResultadoPasadas] = useState(''); // Usamos nombres más descriptivos


  return (
    <>
      <Barra/>
      <div className="p">
        <h1> Como hacer uso de la calculadora de tejido</h1> <br></br>
        <p>Para hacer uso de la calculadora de tejido, necesitamos elegir primero el hilado y 
          la tensión en la cual tejeremos. Una vez decidido esto, y establecido nuestro proyecto, 
          sabremos si tenemos que tejer una muestra pequeña (Ejemplo ropa de niños o medias),
          o una muestra grande (ropa de adultos).</p>
        <p> Diferenciar ello es importante, ya que nuestra muestra debe ser lo mas fiable 
          posible para mostrarnos como se comporta el hilado una vez tejido.</p>
        <p>En muestras pequeñas, alcanza con usar 25/30 agujas, y unas 50 pasadas aproximadamente.
          En muestras grandes, es recomendable que la muestra tenga minimo 50/70 agujas, y un 
          minimo de 80/100 pasadas.</p>
        <p>La manera correcta de realizar una muestra es iniciando y finalizando con un hilo 
          auxiliar contrastante con el que tejeremos unas 10 pasadas, para luego pasar al hilado elegido.
          En cuanto a las agujas, es ideal hacer marcas delimitando las agujas centrales que son las que voy
          a medir. Para ello, agrego 5 o 10 agujas de mas en los laterales, y cada 20 o 30 pasadas hago marcas tejiendo de
          forma manual un punto con hilado de otro color, el punto donde empiezan y terminan esas agujas centrales. De esta manera me aseguro que aunque el tejido se enrolle, podre medirlo correctamente sin tironear.</p>
        <p>Idealmente dejamos descansar las muestras de un dia para el otro.</p>

        <p>Nota: si bien la calculadora fue concebida para utilizar en tejido a máquina, tambien sera 
          de utilidad en el tejido a mano, tomando agujas como puntos, y pasadas como vueltas.
        </p>
      </div>

      <div className='calculadora'>

        {/* --- FORMULARIO 1: Cálculo de Agujas (Ancho) --- */}
        <div className='form'>
          <CalculoFormulario
            labelPasadasAgujasMuestra="Cantidad de agujas:"
            labelCmMuestra="Centímetros de la muestra:"
            labelCmMolde="Centímetros del molde:"
            calcularDimensiones={calcularDimensiones}
            setResultadoEnPadre={setResultadoAgujas}
            
           
            resultado={resultadoAgujas} 
          />
          
        </div>

      
        <div className='form'>
          <CalculoFormulario
            labelPasadasAgujasMuestra="Cantidad de pasadas:"
            labelCmMuestra="Centímetros de la muestra:"
            labelCmMolde="Centímetros del molde:"
            calcularDimensiones={calcularDimensiones}
            setResultadoEnPadre={setResultadoPasadas}
            
           
            resultado={resultadoPasadas} 
          />
          
        </div>
        
      </div> 
    </>  
  );
}

export default Calculadora;


/*import React, {useState} from "react";
import Barra from "../component/navbar.jsx";
import { CalculoFormulario } from '../component/formularioCalculo.jsx';
import calcularDimensiones from '../util.js';

function  Calculadora() {

const [resultado, setResultado] = useState('');
const [resultado2, setResultado2] = useState('');


  return (
      <>
 
 <Barra/>
<div className="p">
<h1> Como hacer uso de la calculadora de tejido</h1> <br></br>
      <p>Para hacer uso de la calculadora de tejido, necesitamos elegir primero el hilado y 
        la tensión en la cual tejeremos. Una vez decidido esto, y establecido nuestro proyecto, 
        sabremos si tenemos que tejer una muestra pequeña (Ejemplo ropa de niños o medias),
        o una muestra grande (ropa de adultos).</p>
       <p> Diferenciar ello es importante, ya que nuestra muestra debe ser lo mas fiable 
        posible para mostrarnos como se comporta el hilado una vez tejido.</p>
        <p>En muestras pequeñas, alcanza con usar 25/30 agujas, y unas 50 pasadas aproximadamente.
        En muestras grandes, es recomendable que la muestra tenga minimo 50/70 agujas, y un 
        minimo de 80/100 pasadas.</p>
        <p>La manera correcta de realizar una muestra es iniciando y finalizando con un hilo 
        auxiliar contrastante con el que tejeremos unas 10 pasadas, para luego pasar al hilado elegido.
        En cuanto a las agujas, es ideal hacer marcas delimitando las agujas centrales que son las que voy
        a medir. Para ello, agrego 5 o 10 agujas de mas en los laterales, y cada 20 o 30 pasadas hago marcas tejiendo de
        forma manual un punto con hilado de otro color, el punto donde empiezan y terminan esas agujas centrales. De esta manera me aseguro que aunque el tejido se enrolle, podre medirlo correctamente sin tironear.</p>
        <p>Idealmente dejamos descansar las muestras de un dia para el otro.</p>

        <p>Nota: si bien la calculadora fue concebida para utilizar en tejido a máquina, tambien sera 
          de utilidad en el tejido a mano, tomando agujas como puntos, y pasadas como vueltas.
        </p>
      </div>
      <div className='calculadora'>
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


 

export default Calculadora;*/
