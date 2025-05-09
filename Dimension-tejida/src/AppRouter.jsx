import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home.jsx";
import Calculadora from "./pages/calculadoraDeTejidos.jsx";
import Puntos from "./pages/puntos.jsx";

function AppRouter() {
  return (
    <Routes>
      {/* Rutas Públicas */}
      <Route path="/Home" element={<HomePage />} />
      <Route path="/CalculadoraDeTejidos" element={<Calculadora />} />
      <Route path="/Puntos" element={<Puntos />} />
    </Routes>
  );
}

export default AppRouter;