import { useNavigate } from "react-router-dom";
import {
  IconlyArrowLeft,
  IconlyHomeBold,
  IconlyLocation,
  IconlyProfile,
  IconlyStar,
  IconlyTimeCircle,
  Iconlyuser,
} from "./icons/Icons";
import { useSalon } from "../../hooks/SalonContext";
import { useState } from "react";

export default function Salon() {
  const navigate = useNavigate();

  const { salon } = useSalon();

  const [activeImg, setActiveImg] = useState(0);

  const handlePerfil = () => {
    navigate("/perfil");
  };
  const handleSalones = () => {
    navigate("/Dashboard");
  };

  return (
    <>
      <header className="px-11 py-[18px] flex flex-row justify-between items-center">
        <h1 className="font-Outfit font-semibold text-4xl">Salon</h1>
        <div className="flex flex-row gap-[70px] mx-8">
          <button
            className="flex flex-col cursor-pointer justify-center items-center text-[#8B5DFF]"
            onClick={handleSalones}
          >
            <IconlyHomeBold color="#8B5DFF" />
            Salones
          </button>
          <button
            className="flex flex-col cursor-pointer justify-center items-center"
            onClick={handlePerfil}
          >
            <IconlyProfile />
            Perfil
          </button>
        </div>
      </header>
      <div className="overflow-y-auto h-[calc(100vh-70px)]">
        <div className="border border-[#C4C4C4] px-6 py-2 flex flex-row justify-between items-center">
          <button
            className=" cursor-pointer"
            onClick={() => navigate("/Dashboard")}
          >
            <IconlyArrowLeft />
          </button>
          <div className="flex flex-row gap-4">
            <button className="border border-[#8B5DFF] font-semibold text-white px-9 py-2 rounded-4xl bg-[#8B5DFF] cursor-pointer">
              Eliminar salon
            </button>
            <button className="border border-[#8B5DFF] font-semibold text-white px-9 py-2 rounded-4xl bg-[#8B5DFF] cursor-pointer">
              Editar salon
            </button>
          </div>
        </div>
        <div className="px-16 py-6 flex flex-row gap-10">
          <div className="w-2/3">
            <img
              src={salon.imagenes[activeImg]}
              alt={salon.imagenes[activeImg]}
              className="border w-full h-[470px]"
            />
            <h1 className="text-xl font-bold my-3">Galeria</h1>
            <div className="flex flex-row gap-4">
              {salon.imagenes.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={index}
                  className="border w-28 h-28 rounded-xl cursor-pointer"
                  onClick={() => setActiveImg(index)}
                />
              ))}
            </div>
            <h1 className="text-xl font-bold">Descripcion del salon</h1>
            <p>{salon.descripcion}</p>
            <h1 className="text-xl font-bold">Amenidades</h1>
            <p>Aun en construcción 🚧</p>
          </div>
          <div className="w-1/3">
            <h1 className="text-2xl font-bold">{salon.nombre}</h1>
            <div className="flex flex-row items-center gap-3 my-4">
              <div className="px-2.5 py-1.5 rounded-2xl bg-[#8B5DFF]/10">
                <p className="text-xs text-[#8B5DFF] font-bold">{salon.tipo}</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <IconlyStar size="20" />
                <p>4.8 (1,275 reseñas)</p>
              </div>
            </div>
            <div className="flex flex-row gap-3 border-b-1 border-[#C4C4C4] pb-5 mb-5">
              <div className="flex flex-row gap-2 items-center">
                <div className="p-2 bg-[#8B5DFF]/10 rounded-full">
                  <Iconlyuser />
                </div>
                <p>{salon.capacidad} personas</p>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <div className="p-2 bg-[#8B5DFF]/10 rounded-full">
                  <IconlyTimeCircle />
                </div>
                <p>
                  {salon.horarioApertura} - {salon.horarioCierre}
                </p>
              </div>
            </div>
            <h1 className="text-xl font-bold">Ubicación</h1>
            <div className="flex flex-row items-center gap-2 my-2">
              <IconlyLocation />
              <p>{salon.ubicacion}</p>
            </div>
            <div className="my-2">
              <p>mapa</p>
            </div>
            <div>
              <h1 className="text-xl font-bold">Servicios</h1>
              <table className="w-full my-3">
                <tr className="bg-[#31137E]/30">
                  <th className="p-2 border border-[#31137E]/40">Servicio</th>
                  <th className="p-2 border border-[#31137E]/40">Costo</th>
                </tr>
                <tr>
                  <td className="p-2 border border-[#31137E]/40 text-center">
                    x
                  </td>
                  <td className="p-2 border border-[#31137E]/40 text-center">
                    $x
                  </td>
                </tr>
              </table>
              <button className="border border-[#8B5DFF] font-semibold text-white px-9 py-2 rounded-4xl bg-[#8B5DFF] cursor-pointer">
                Editar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
