import { useState } from "react";
import { useSalon } from "../../../../hooks/SalonContext";

export default function RS2({ onNext }) {
  const { saveSalonUbicacion } = useSalon();
  const [formData, setFormData] = useState({
    calle: "",
    numero: "",
    colonia: "",
    alcaldia: "",
    codigopostal: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const direccionCompleta = Object.values(formData).join(", ");
  
    saveSalonUbicacion({
      ...formData,
      ubicacion: direccionCompleta,
    });
  
    console.log(direccionCompleta);
    onNext();
  };
  

  return (
    <div className="font-outfit border border-[#8B5DFF]/70 bg-[#8B5DFF]/10 rounded-4xl p-9">
      <h1 className="font-outfit-semibold text-4xl my-5">
        ¿Donde se encuentra tu salón?
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col">
        <span className="text-[#8B5DFF] font-semibold">Calle</span>
        <input
          type="text"
          name="calle"
          className="border border-[#C4C4C4] rounded-lg py-1 px-2 bg-white text-sm"
          value={formData.calle}
          onChange={handleChange}
        />
        <span className="text-[#8B5DFF] font-semibold">Número</span>
        <input
          type="text"
          name="numero"
          className="border border-[#C4C4C4] rounded-lg py-1 px-2 bg-white text-sm"
          value={formData.numero}
          onChange={handleChange}
        />
        <span className="text-[#8B5DFF] font-semibold">Colonia</span>
        <input
          type="text"
          name="colonia"
          className="border border-[#C4C4C4] rounded-lg py-1 px-2 bg-white text-sm"
          value={formData.colonia}
          onChange={handleChange}
        />
        <span className="text-[#8B5DFF] font-semibold">Alcaldia</span>
        <input
          type="text"
          name="alcaldia"
          className="border border-[#C4C4C4] rounded-lg py-1 px-2 bg-white text-sm"
          value={formData.alcaldia}
          onChange={handleChange}
        />
        <span className="text-[#8B5DFF] font-semibold">Código Postal</span>
        <input
          type="text"
          name="codigopostal"
          className="border border-[#C4C4C4] rounded-lg py-1 px-2 bg-white text-sm"
          value={formData.codigopostal}
          onChange={handleChange}
        />
        <button className="border border-[#8B5DFF] mt-6 py-2 px-9 bg-[#8B5DFF]/70 text-white rounded-4xl">
          Siguiente
        </button>
      </form>
    </div>
  );
}
