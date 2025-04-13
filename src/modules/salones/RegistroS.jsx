import { useState } from "react";

export default function RegisterS() {
  const [archivos, setArchivos] = useState([]);
  const [bloqueado, setBloqueado] = useState(true);

  const handleFileChange = (e) => {
    const nuevosArchivos = Array.from(e.target.files).map((file) => file.name);
    setArchivos((prev) => [
      ...prev,
      ...nuevosArchivos.filter((name) => !prev.includes(name)),
    ]);
    e.target.value = "";
  };

  return (
    <>
      <div className="flex flex-row gap-2 items-center justify-center h-screen">
        <div>
          <form className="flex flex-col w-[350px] p-9 border border-[#8B5DFF]/70 bg-[#8B5DFF]/10 rounded-4xl gap-2">
            <span className="text-[#8B5DFF] font-semibold">
              Nombre del salón
            </span>
            <input
              type="text"
              className="border border-[#C4C4C4] rounded-lg py-1 px-2 bg-white text-sm"
            />
            <span className="text-[#8B5DFF] font-semibold">Tipo de salón</span>
            <input
              type="text"
              className="border border-[#C4C4C4] rounded-lg py-1 px-2 bg-white text-sm"
            />
            <span className="text-[#8B5DFF] font-semibold">Ubicación</span>
            <input
              type="text"
              className="border border-[#C4C4C4] rounded-lg py-1 px-2 bg-white text-sm"
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
                  className="border border-[#C4C4C4] rounded-lg py-1 px-2 bg-white text-sm"
                />
              </div>
            </div>
            <p className="text-[#8B5DFF] font-semibold">Horario</p>
            <div className="flex flex-row gap-3">
              <div className="flex flex-col w-[calc((1/2*100%)-6px)]">
                <span className="text-[#8B5DFF] font-semibold">Apertura</span>
                <input
                  type="time"
                  className="border border-[#C4C4C4] rounded-lg py-1 px-2 bg-white text-sm"
                />
              </div>
              <div className="flex flex-col w-[calc((1/2*100%)-6px)]">
                <span className="text-[#8B5DFF] font-semibold">Cierre</span>
                <input
                  type="time"
                  className="border border-[#C4C4C4] rounded-lg py-1 px-2 bg-white text-sm"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <button className="border border-[#8B5DFF] mt-6 py-1 px-9 bg-[#8B5DFF]/70 text-white rounded-4xl">
                Siguiente
              </button>
            </div>
          </form>
        </div>
        <div>
          <form className="flex flex-col w-[350px] p-9 border border-[#8B5DFF]/70 bg-[#8B5DFF]/10 rounded-4xl gap-2">
            <span className="text-[#8B5DFF] font-semibold">
              Descripción del salón
            </span>
            <textarea className="border border-[#C4C4C4] rounded-lg py-1 px-2 bg-white h-60 text-xs"></textarea>
            <div className="flex justify-center">
              <button className="border border-[#8B5DFF] mt-6 py-1 px-9 bg-[#8B5DFF]/70 text-white rounded-4xl">
                Siguiente
              </button>
            </div>
          </form>
        </div>
        <div>
          <form className="flex flex-col w-[350px] p-9 border border-[#8B5DFF]/70 bg-[#8B5DFF]/10 rounded-4xl gap-2">
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
          </form>
        </div>
      </div>
    </>
  );
}
