import { useState } from "react";
import { useSalon } from "../../hooks/SalonContext";
import { useNavigate } from "react-router-dom";
import RS1 from "./components/formularios/RS1";
import RS2 from "./components/formularios/RS2";
import RS3 from "./components/formularios/RS3";

export default function RegisterS() {
  const navigate = useNavigate();
  const { saveSalonData } = useSalon();
  const [archivos, setArchivos] = useState([]);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nombre: "",
    tipo: "",
    capacidad: "",
    horarioApertura: "",
    horarioCierre: "",
    descripcion: "",
    imagenes: [],
    precio: "",
  });

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    // Guardamos los archivos en el estado
    setFormData((prev) => ({
      ...prev,
      imagenes: [...prev.imagenes, ...files],
    }));

    // Guardamos los nombres por separado solo para mostrarlos
    const nuevosNombres = files.map((file) => file.name);
    setArchivos((prev) => [
      ...prev,
      ...nuevosNombres.filter((name) => !prev.includes(name)),
    ]);

    e.target.value = "";
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveSalonData(formData);
    navigate("/Dashboard");
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        {step === 1 ? (
          <RS1 onNext={() => setStep(2)} />
        ) : step === 2 ? (
          <RS2 onNext={() => setStep(3)} />
        ) : (
          <RS3 />
        )}
        {/* {<form
          onSubmit={handleSubmit}
          className="flex flex-row gap-4 font-outfit"
        >
          <div className="flex flex-col w-[350px] p-9 border border-[#8B5DFF]/70 bg-[#8B5DFF]/10 rounded-4xl gap-2">
            <span className="text-[#8B5DFF] font-semibold">
              Nombre del salón
            </span>
            <input
              type="text"
              name="nombre"
              className="border border-[#C4C4C4] rounded-lg py-1 px-2 bg-white text-sm"
              value={formData.nombre}
              onChange={handleChange}
            />
            <span className="text-[#8B5DFF] font-semibold">Tipo de salón</span>
            <input
              type="text"
              name="tipo"
              className="border border-[#C4C4C4] rounded-lg py-1 px-2 bg-white text-sm"
              value={formData.tipo}
              onChange={handleChange}
            />
            <span className="text-[#8B5DFF] font-semibold">Ubicación</span>
            <input
              type="text"
              name="ubicacion"
              className="border border-[#C4C4C4] rounded-lg py-1 px-2 bg-white text-sm"
              value={formData.ubicacion}
              onChange={handleChange}
            />
            <p className="text-[#8B5DFF] font-semibold">Capacidad</p>
            <div className="flex flex-row gap-3">
              <div className="flex flex-col w-[calc((1/2*100%)-6px)]">
                <span className="text-[#8B5DFF] font-semibold">Mínima</span>
                <input
                  type="number"
                  className="border border-[#C4C4C4] rounded-lg py-1 px-2 bg-white text-sm"
                />
              </div>
              <div className="flex flex-col w-[calc((1/2*100%)-6px)]">
                <span className="text-[#8B5DFF] font-semibold">Máxima</span>
                <input
                  type="number"
                  name="capacidad"
                  className="border border-[#C4C4C4] rounded-lg py-1 px-2 bg-white text-sm"
                  value={formData.capacidad}
                  onChange={handleChange}
                />
              </div>
            </div>
            <p className="text-[#8B5DFF] font-semibold">Horario</p>
            <div className="flex flex-row gap-3">
              <div className="flex flex-col w-[calc((1/2*100%)-6px)]">
                <span className="text-[#8B5DFF] font-semibold">Apertura</span>
                <input
                  type="time"
                  name="horarioApertura"
                  className="border border-[#C4C4C4] rounded-lg py-1 px-2 bg-white text-sm"
                  value={formData.horarioApertura}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col w-[calc((1/2*100%)-6px)]">
                <span className="text-[#8B5DFF] font-semibold">Cierre</span>
                <input
                  type="time"
                  name="horarioCierre"
                  className="border border-[#C4C4C4] rounded-lg py-1 px-2 bg-white text-sm"
                  value={formData.horarioCierre}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[350px] p-9 border border-[#8B5DFF]/70 bg-[#8B5DFF]/10 rounded-4xl gap-2">
            <span className="text-[#8B5DFF] font-semibold">
              Descripción del salón
            </span>
            <textarea
              name="descripcion"
              className="border border-[#C4C4C4] rounded-lg py-1 px-2 bg-white h-full text-xs"
              value={formData.descripcion}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col justify-between w-[350px] p-9 border border-[#8B5DFF]/70 bg-[#8B5DFF]/10 rounded-4xl gap-2">
            <span className="text-[#8B5DFF] font-semibold">
              Imagenes del salón
            </span>
            <div className="border border-[#C4C4C4] text-sm p-2.5 text-[#C4C4C4] bg-white flex flex-col">
              <label
                htmlFor="images"
                className="cursor-pointer flex items-center gap-2 justify-between"
              >
                Agregar imágenes
                <img src="src/assets/Agregar.png" className="w-5 h-5" />
              </label>
              <input
                id="images"
                name="images"
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleFileChange}
              />
            </div>
            {archivos.map((archivo, index) => (
              <div className="border border-[#C4C4C4] text-sm p-2.5 bg-[#8B5DFF]/30 flex flex-col">
                <span key={index} className="flex flex-row justify-between">
                  {archivo}
                  <img
                    src="src/assets/Imagen.png"
                    className="w-5 h-5 rounded-sm"
                  />
                </span>
              </div>
            ))}
            <div className="flex justify-center">
              <button className="border border-[#8B5DFF] mt-6 py-1 px-9 bg-[#8B5DFF]/70 text-white rounded-4xl">
                Siguiente
              </button>
            </div>
          </div>
        </form>} */}
      </div>
    </>
  );
}
