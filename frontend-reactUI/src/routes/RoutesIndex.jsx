import { Routes, Route } from "react-router-dom";

import Libros from "../pages/Libros";
import Portada from "../pages/Portada";
import Login from "../pages/Portada";
import Register from "../pages/Portada";


export default function RoutesIndex() {
  return (
    <Routes>
      <Route path="/" element={<Portada />} />
      {/* Rutas de Auth (authentication / authorization) */}
      <Route path="/libros" element={<Libros />} />
      <Route path="/registro" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}