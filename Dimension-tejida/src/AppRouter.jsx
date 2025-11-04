import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/home.jsx";
import Calculadora from "./pages/CalculadoraDeTejidos.jsx";
import Tutoriales from "./pages/Tutoriales.jsx";

function AppRouter() {
  return (
    
    <Routes>
      {/* Rutas Públicas */}
      <Route path="/" element={<HomePage />} />
      <Route path="/Home" element={<HomePage />} />
      <Route path="/CalculadoraDeTejidos" element={<Calculadora />} />
      <Route path="/Tutoriales" element={<Tutoriales />} />
    </Routes>
    
  );
}

export default AppRouter;