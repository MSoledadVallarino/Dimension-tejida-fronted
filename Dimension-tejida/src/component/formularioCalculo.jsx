import React, { useState } from 'react';
import "./formularioCalculo.css";

export function CalculoFormulario({
  labelPasadasAgujasMuestra,
  labelCmMuestra,
  labelCmMolde,
  calcularDimensiones,
  setResultadoEnPadre
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
      setResultadoEnPadre(`El resultado es: ${resultadoEntero}`);
    }
  };

  // 🔹 Borrar todos los campos
  const borrarTodo = () => {
    setPasadasAgujasMuestraLocal('');
    setCmMuestraLocal('');
    setCmMoldeLocal('');
    setResultadoEnPadre('');
  };

  // 🔹 Borrar solo los cm del molde
  const borrarCmMolde = () => {
    setCmMoldeLocal('');
  };

  return (
    <>
      <section className='formCalculo'>
        <div className="pasadasAgujasMuestra">
          <label>{labelPasadasAgujasMuestra}</label>
          <input
            className='datos'
            type='number'
            value={pasadasAgujasMuestraLocal}
            onChange={(e) => setPasadasAgujasMuestraLocal(e.target.value)}
          />
        </div>

        <div className='cmMuestra'>
          <label>{labelCmMuestra}</label>
          <input
            className='datos'
            type='number'
            value={cmMuestraLocal}
            onChange={(e) => setCmMuestraLocal(e.target.value)}
          />
        </div>

        <div className='cmMolde'>
          <label>{labelCmMolde}</label>
          <input
            className='datos'
            type='number'
            value={cmMoldeLocal}
            onChange={(e) => setCmMoldeLocal(e.target.value)}
          />
        </div>

        <div className='botones'>
          <button className='botonCalcular' onClick={handleClickInterno}>
            <p>Calcular</p>
          </button>
          <button className='botonBorrarTodo' onClick={borrarTodo}>
            <p>Borrar todo</p>
          </button>
          <button className='botonBorrarMolde' onClick={borrarCmMolde}>
            <p>Borrar cm molde</p>
          </button>
        </div>
      </section>
    </>
  );
}

/*
export function CalculoFormulario({
  labelPasadasAgujasMuestra,
  labelCmMuestra,
  labelCmMolde,
  calcularDimensiones,
  setResultadoEnPadre,
}) {
  const [datos, setDatos] = useState({
    pasadasAgujasMuestra: "",
    cmMuestra: "",
    cmMolde: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatos(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const resultado = calcularDimensiones(
      parseFloat(datos.pasadasAgujasMuestra),
      parseFloat(datos.cmMuestra),
      parseFloat(datos.cmMolde)
    );

    // mostramos con dos decimales, o vacío si hay error
    setResultadoEnPadre(
      isNaN(resultado) ? "" : Math.round(`La dimensión calculada es: ${resultado}`)
    );
  };

  const borrarTodo = () => {
    setDatos({ pasadasAgujasMuestra: "", cmMuestra: "", cmMolde: "" });
    setResultadoEnPadre("");
  };

  const borrarCmMolde = () => {
    setDatos(prev => ({ ...prev, cmMolde: "" }));
  };

  return (
    <form onSubmit={handleSubmit} className="formCalculo">
      <label>{labelPasadasAgujasMuestra}</label>
      <input
        type="number"
        name="pasadasAgujasMuestra"
        value={datos.pasadasAgujasMuestra}
        onChange={handleChange}
      />

      <label>{labelCmMuestra}</label>
      <input
        type="number"
        name="cmMuestra"
        value={datos.cmMuestra}
        onChange={handleChange}
      />

      <label>{labelCmMolde}</label>
      <input
        type="number"
        name="cmMolde"
        value={datos.cmMolde}
        onChange={handleChange}
      />

      <div className="botones-form">
        <button type="submit">Calcular</button>
        <button type="button" onClick={borrarTodo}>Borrar todo</button>
        <button type="button" onClick={borrarCmMolde}>Borrar cm molde</button>
      </div>
    </form>
  );
}
  
  /*const [pasadasAgujasMuestraLocal, setPasadasAgujasMuestraLocal] = useState('');
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
          <input className='datos'
            type='number'
            value={pasadasAgujasMuestraLocal}
            onChange={(e) => setPasadasAgujasMuestraLocal(e.target.value)}
          />
        </div>
        <div className='cmMuestra'>
          <label>{labelCmMuestra}</label>
          <input className='datos'
            type='number'
            value={cmMuestraLocal}
            onChange={(e) => setCmMuestraLocal(e.target.value)}
          />
        </div>
        <div className='cmMolde'>
          <label>{labelCmMolde}</label>
          <input className='datos'
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
}*/