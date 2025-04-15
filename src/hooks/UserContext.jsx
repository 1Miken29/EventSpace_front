import { createContext, useContext, useEffect, useState } from "react";

// Crear el contexto
const UserContext = createContext();

// Proveedor del contexto
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState({
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    fechaNacimiento: "",
    telefono: "",
    email: "",
    password: "",
  });

  // ✅ Recuperar datos guardados al iniciar la app
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedUserData = localStorage.getItem("userData");

    if (storedUser) setUser(JSON.parse(storedUser));
    if (storedUserData) setUserData(JSON.parse(storedUserData));

    setIsLoading(false); // ← después de cargar datos
  }, []);

  // ✅ Guardar automáticamente en localStorage cuando cambien
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [user, userData]);

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
    setUser({ ...userData, ...credentials }); // ← Esto activa la sesión
  };

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  return (
    <UserContext.Provider
      value={{ user, userData, savePersonalData, saveCredentials, isLoading, logout }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Hook personalizado para acceder al contexto
export const useUser = () => useContext(UserContext);
