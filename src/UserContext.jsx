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
  });

  // Función para actualizar los datos del usuario
  const updateUser = (newData) => {
    setUserData((prev) => ({ ...prev, ...newData }));
  };

  return (
    <UserContext.Provider value={{ userData, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook personalizado para acceder al contexto
export const useUser = () => useContext(UserContext);
