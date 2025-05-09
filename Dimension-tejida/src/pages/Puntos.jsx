import { useState } from 'react';
import Barra from '../component/navbar.jsx';

function Puntos() {

const [resultado, setResultado] = useState('');
const [resultado2, setResultado2] = useState('');

  return (
      <>
 <header className='encabezado'>
  <h1 className='titulo'>DIMENSION TEJIDA</h1>
 <div className='banner'></div>
 <div className='barra'>
 <Barra/>
 </div>
</header>

      
      
  </>  
  );
 
}


 

export default Puntos;

