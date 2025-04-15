import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../modules/salones/Dashboard";
import RegisterS from "../modules/salones/RegistroS";
import Perfil from "../modules/usuario/Perfil";
import Salon from "../modules/salones/Salon";
import TyC from "../modules/registro/TyC";

export const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/terminos-y-condiciones" element={<TyC />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/Dashboard/:salonId" element={<Salon />} />
      <Route path="/registerS" element={<RegisterS />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="*" element={<Navigate to="/Dashboard" />} />
    </Routes>
  );
};
