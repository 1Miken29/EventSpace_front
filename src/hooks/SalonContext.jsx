import { createContext, useContext, useEffect, useState } from "react";

const SalonContext = createContext();

export const SalonProvider = ({ children }) => {
  const [salon, setSalon] = useState(null);
  const [salonData, setSalonData] = useState({
    id: "",
    nombre: "",
    tipo: "",
    capacidadMin: "",
    capacidadMax: "",
    horarioApertura: "",
    horarioCierre: "",
    descripcion: "",
    ubicacion: "",
    imagenes: [],
    precio: "",
  });

  const generateId = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  useEffect(() => {
    const storedSalon = localStorage.getItem("salon");
    const storedSalonData = localStorage.getItem("salonData");

    if (storedSalon) setSalon(JSON.parse(storedSalon));
    if (storedSalonData) setSalonData(JSON.parse(storedSalonData));
  }, []);

  useEffect(() => {
    if (salon) {
      localStorage.setItem("salon", JSON.stringify(salon));
    }
    localStorage.setItem("salonData", JSON.stringify(salonData));
  }, [salon, salonData]);

  // ✅ Función general
  const saveSalonData = (partialData) => {
    setSalonData((prevData) => {
      const merged = { ...prevData, ...partialData };
      const id = merged.id || generateId();

      const imagenes = merged.imagenes?.map((file) =>
        typeof file === "string" ? file : URL.createObjectURL(file)
      ) || [];

      const fullData = {
        ...merged,
        id,
        imagenes,
      };

      setSalon(fullData); // si necesitas guardar para otro uso
      return fullData;
    });
  };

  // ✅ Funciones específicas
  const saveSalonInfo = (info) => {
    saveSalonData(info); // ejemplo: { nombre, descripcion }
  };

  const saveSalonUbicacion = (ubicacion) => {
    saveSalonData(ubicacion); // ejemplo: { estado, ciudad }
  };

  const saveSalonImg = (imagenes) => {
    saveSalonData({ imagenes }); // array de File o strings
  };

  return (
    <SalonContext.Provider
      value={{
        salon,
        salonData,
        saveSalonData,
        saveSalonInfo,
        saveSalonUbicacion,
        saveSalonImg,
      }}
    >
      {children}
    </SalonContext.Provider>
  );
};

export const useSalon = () => useContext(SalonContext);
