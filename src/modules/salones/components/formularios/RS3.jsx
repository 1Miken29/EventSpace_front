import { useState } from "react";
import imagen from "../../../../assets/Imagen.jpg";
import agregar from "../../../../assets/Agregar.jpg";
import { useSalon } from "../../../../hooks/SalonContext";
import { useNavigate } from "react-router-dom";

export default function RS3() {
  const navigate = useNavigate();

  const { saveSalonImg } = useSalon();

  const [archivos, setArchivos] = useState([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

    // Guardamos los nombres por separado solo para mostrarlos
    const nuevosNombres = files.map((file) => file.name);
    setArchivos((prev) => [
      ...prev,
      ...nuevosNombres.filter((name) => !prev.includes(name)),
    ]);

    e.target.value = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveSalonImg(archivos);
    navigate("/Dashboard");
  };

  return (
    <div className="font-outfit border border-[#8B5DFF]/70 bg-[#8B5DFF]/10 rounded-4xl p-9">
      <h1 className="font-outfit-semibold text-4xl my-5">
        Da a conocer tu salon
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <span className="text-[#8B5DFF] font-semibold">Imagenes del salón</span>
        <div className="border border-[#C4C4C4] text-sm p-2.5 text-[#C4C4C4] bg-white flex flex-col">
          <label
            htmlFor="images"
            className="cursor-pointer flex items-center gap-2 justify-between"
          >
            Agregar imágenes
            <img src={agregar} className="w-5 h-5" />
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
          <div
            key={index}
            className="border border-[#C4C4C4] text-sm p-2.5 bg-[#8B5DFF]/30 flex flex-col"
          >
            <span key={index} className="flex flex-row justify-between">
              {archivo}
              <img src={imagen} className="w-5 h-5 rounded-sm" />
            </span>
          </div>
        ))}
        <button className="border border-[#8B5DFF] mt-6 py-2 px-9 bg-[#8B5DFF]/70 text-white rounded-4xl">
          Siguiente
        </button>
      </form>
    </div>
  );
}
