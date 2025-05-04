import React, { useState } from 'react';
import "./formularioCalculo.css";

export function CalculoFormulario({
  labelPasadasAgujasMuestra,
  labelCmMuestra,
  labelCmMolde,
  calcularDimensiones,
  setResultadoEnPadre,
}) {
  const [pasadasAgujasMuestraLocal, setPasadasAgujasMuestraLocal] = useState('');
  const [cmMuestraLocal, setCmMuestraLocal] = useState('');
  const [cmMoldeLocal, setCmMoldeLocal] = useState('');

  const handleClickInterno = () => {
    const pasadasAgujas = parseInt(pasadasAgujasMuestraLocal);
    const muestra = parseFloat(cmMuestraLocal);
    const molde = parseFloat(cmMoldeLocal);

    if (!isNaN(pasadasAgujas) && !isNaN(muestra) && !isNaN(molde) && typeof calcularDimensiones === 'function') {
      const dimensionCalculada = calcularDimensiones(pasadasAgujas, muestra, molde);
      const resultadoEntero = Math.round(dimensionCalculada);
      setResultadoEnPadre(`La dimensión calculada es: ${resultadoEntero}`);
      // Limpiar los inputs locales
      setPasadasAgujasMuestraLocal('');
      setCmMuestraLocal('');
      setCmMoldeLocal('');
    } else {
      setResultadoEnPadre('Por favor, ingrese valores numéricos válidos.');
    }
  };

  return (
    <>
      <section className='formCalculo'>
        <div className="pasadasAgujasMuestra">
          <label>{labelPasadasAgujasMuestra}</label>
          <input
            type='number'
            value={pasadasAgujasMuestraLocal}
            onChange={(e) => setPasadasAgujasMuestraLocal(e.target.value)}
          />
        </div>
        <div className='cmMuestra'>
          <label>{labelCmMuestra}</label>
          <input
            type='number'
            value={cmMuestraLocal}
            onChange={(e) => setCmMuestraLocal(e.target.value)}
          />
        </div>
        <div className='cmMolde'>
          <label>{labelCmMolde}</label>
          <input
            type='number'
            value={cmMoldeLocal}
            onChange={(e) => setCmMoldeLocal(e.target.value)}
          />
        </div>
        <button className='botonCalcular' onClick={handleClickInterno}>
          <p>Calcular</p>
        </button>
      </section>
    </>
  );
}