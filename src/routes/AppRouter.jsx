import { Routes, Route } from "react-router-dom";
import { useUser } from "../hooks/UserContext";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

export const AppRouter = () => {
  const { user, isLoading } = useUser();

  console.log("usuario actual:", user);

  if (isLoading) {
    return <div>Cargando...</div>; // o un spinner bonito
  }

  return (
    <Routes>
      {user ? (
        <Route path="/*" element={<PrivateRoutes />} />
      ) : (
        <Route path="/*" element={<PublicRoutes />} />
      )}
    </Routes>
  );
};
