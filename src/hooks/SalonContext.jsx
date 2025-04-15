import { createContext, useContext, useEffect, useState } from "react";

const SalonContext = createContext();

export const SalonProvider = ({ children }) => {
  const [salon, setSalon] = useState(null);
  const [salonData, setSalonData] = useState({
    id: "",
    nombre: "",
    tipo: "",
    capacidad: "",
    horarioApertura: "",
    horarioCierre: "",
    descripcion: "",
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

  const saveSalonData = (info) => {
    const id = info.id || generateId();
    const newSalon = { ...info, id };

    const imagenesConURL = info.imagenes.map((file) =>
      typeof file === "string" ? file : URL.createObjectURL(file)
    );

    const dataConURLs = {
      ...newSalon,
      imagenes: imagenesConURL,
    };

    setSalonData(dataConURLs);
    setSalon(dataConURLs);
  };

  return (
    <SalonContext.Provider value={{ salon, salonData, saveSalonData }}>
      {children}
    </SalonContext.Provider>
  );
};

export const useSalon = () => useContext(SalonContext);
