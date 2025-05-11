
import { Barra } from '../component/navbar.jsx';
import logo from '../fotos/logo.jpg'

function HomePage() {

  return (
      <>
 
 <Barra/>


<main className='cuerpo'>
    

      <div><p>Dimensión tejida </p>
      <img src={logo}/>
      </div>
      </main>
  </>  
  );
 
}


 

export default HomePage;

