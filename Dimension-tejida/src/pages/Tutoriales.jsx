import Barra from '../component/navbar.jsx';
import VideoEmbed from '../component/videosembed.jsx';

function Tutoriales() {

  return (

    <> <Barra/>
      
            <h1 className='tutoriales'>Mis Tutoriales</h1>
            <div className='galeria-videos-contenedor'>
              <div className="galeria-videos">
            <VideoEmbed 
                videoId="nB6BTAgGo?si=b3D52dEt70XDFFzY" // ID de ejemplo
                titulo="Limpieza y lubricacion de la máquina de tejer"
            />
             <VideoEmbed 
                videoId="6jukp7QPUHM" // Otro ID de ejemplo
                titulo="Ondas con relieve"
            />
             <VideoEmbed 
                videoId="5jlqHTPouwE" // Otro ID de ejemplo
                titulo="Punto motas de colores"
            />
            <VideoEmbed 
                videoId="s2_hF3o-jBI" // Otro ID de ejemplo
                titulo="Rayas 3D"
            />
            <VideoEmbed 
                videoId="dPrgAb5diw0" // Otro ID de ejemplo
                titulo="Sweater fácil en máquina de tejer"
            />
            </div>
        </div>
 

 

      
      
  </>  
  );
 
}


 

export default Tutoriales;

