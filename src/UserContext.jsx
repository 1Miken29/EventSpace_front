import { createContext, useContext, useState } from "react";

// Crear el contexto
const UserContext = createContext();

// Proveedor del contexto
export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    apellidoMat: "",
    apellidoPat: "",
    cumple: "",
    correo: "",
    password: "",
    isAdmin: false //si es admin es un propietario
  });

  // Función para actualizar los datos del usuario
  const updateUser = (newData) => {
    setUserData((prev) => ({ ...prev, ...newData }));
  };

  const setAdmin = (status) => {
    setUserData((prev) => ({ ...prev, isAdmim: status }))
  }

  return (
    <UserContext.Provider value={{ userData, updateUser, setAdmin }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook personalizado para acceder al contexto
export const useUser = () => useContext(UserContext);
