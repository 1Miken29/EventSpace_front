import { useState } from "react";
import { useSalon } from "../../../../hooks/SalonContext";

export default function RS1({ onNext }) {
  
  const { saveSalonInfo } = useSalon()
  const [formData, setFormData] = useState({
    nombre: "",
    tipo: "",
    capacidadMin: "",
    capacidadMax: "",
    horarioApertura: "",
    horarioCierre: "",
    descripcion: ""
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    saveSalonInfo(formData)
    console.log(formData);

    onNext()
  }

  return (
    <div className="font-outfit border border-[#8B5DFF]/70 bg-[#8B5DFF]/10 rounded-4xl p-9">
      <h1 className="font-outfit-semibold text-4xl mb-5">Describe tu salón</h1>
      <span className="text-[#8B5DFF] font-semibold">Nombre</span>
      <form onSubmit={handleSubmit} className="flex flex-col gap-1">
        <input
          type="text"
          name="nombre"
          className="border border-[#C4C4C4] rounded-lg py-1 px-2 bg-white text-sm"
          value={formData.nombre}
          onChange={handleChange}
        />
        <span className="text-[#8B5DFF] font-semibold">Tipo</span>
        <input
          type="text"
          name="tipo"
          className="border border-[#C4C4C4] rounded-lg py-1 px-2 bg-white text-sm"
          value={formData.tipo}
          onChange={handleChange}
        />
        <div className="flex flex-row gap-2">
          <div className="flex flex-col">
            <span className="text-[#8B5DFF] font-semibold">
              Capacidad Mínima
            </span>
            <input
              type="text"
              name="capacidadMin"
              className="border border-[#C4C4C4] rounded-lg py-1 px-2 bg-white text-sm"
              value={formData.capacidadMin}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[#8B5DFF] font-semibold">
              Capacidad Máxima
            </span>
            <input
              type="text"
              name="capacidadMax"
              className="border border-[#C4C4C4] rounded-lg py-1 px-2 bg-white text-sm"
              value={formData.capacidadMax}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <div className="flex flex-col">
            <span className="text-[#8B5DFF] font-semibold">
              Horario de Apertura
            </span>
            <input
              type="text"
              name="horarioApertura"
              className="border border-[#C4C4C4] rounded-lg py-1 px-2 bg-white text-sm"
              value={formData.horarioApertura}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[#8B5DFF] font-semibold">
              Horario de Cierre
            </span>
            <input
              type="text"
              name="horarioCierre"
              className="border border-[#C4C4C4] rounded-lg py-1 px-2 bg-white text-sm"
              value={formData.horarioCierre}
              onChange={handleChange}
            />
          </div>
        </div>
        <span className="text-[#8B5DFF] font-semibold">Descripción</span>
        <textarea
          name="descripcion"
          className="border border-[#C4C4C4] rounded-lg py-1 px-2 bg-white text-sm h-[10  0px]"
          value={formData.descripcion}
          onChange={handleChange}
        />
        <button className="border border-[#8B5DFF] mt-6 py-2 px-9 bg-[#8B5DFF]/70 text-white rounded-4xl">Siguiente</button>
      </form>
    </div>
  );
}
