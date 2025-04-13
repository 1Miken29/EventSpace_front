import { createContext, useContext, useState } from "react";

// Crear el contexto
const UserContext = createContext();

// Proveedor del contexto
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(false)
  const [userData, setUserData] = useState({
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    fechaNacimiento: "",
    telefono: "",
    email: "",
    password: "",
  });

  const savePersonalData = (personalData) => {
    setUserData((prevData) => ({
      ...prevData,
      ...personalData,
    }));
  };

  const saveCredentials = (credentials) => {
    setUserData((prevData) => ({
      ...prevData,
      ...credentials,
    }));
    setUser(true);
  };

  return (
    <UserContext.Provider value={{ user ,userData, savePersonalData, saveCredentials }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook personalizado para acceder al contexto
export const useUser = () => useContext(UserContext);
