import React from 'react';

 export function  CalculoFormulario({ 
  pasadasAgujasMuestra, 
  setPasadasAgujasMuestra, 
  cmMuestra, 
  setCmMuestra, 
  cmMolde, 
  setCmMolde, 
  handleClick,
  labelPasadasAgujasMuestra,   
  labelCmMuestra,
  labelCmMolde}) {
  return (
    <>
    <section>
      <div className="pasadasAgujasMuestra">
        <label>{labelPasadasAgujasMuestra}</label>
        <input
          type='number'
          value={pasadasAgujasMuestra}
          onChange={(e) => setPasadasAgujasMuestra(e.target.value)}
        />
      </div>
      <div className='cmMuestra'>
        <label>{labelCmMuestra}</label>
        <input
          type='number'
          value={cmMuestra}
          onChange={(e) => setCmMuestra(e.target.value)}
        />
      </div>
      <div className='cmMolde'>
        <label>{labelCmMolde}</label>
        <input
          type='number'
          value={cmMolde}
          onChange={(e) => setCmMolde(e.target.value)}
        />
      </div>
      <button onClick={handleClick}>
        <p>Calcular</p>
      </button>
    </section>
  </>
  );
}


