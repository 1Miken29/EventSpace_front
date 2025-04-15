import { Navigate, Route, Routes } from "react-router-dom";
import Inicio from "../inicio";
import LoginP from "../modules/autenticacion/LoginP";
import ContraP from "../modules/autenticacion/ContraP";
import TyC from "../modules/registro/TyC";
import Registro from "../modules/registro/Registro";

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/terminos-y-condiciones" element={<TyC />} />
      <Route path="/LoginP" element={<LoginP />} />
      <Route path="/ContraP" element={<ContraP />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
