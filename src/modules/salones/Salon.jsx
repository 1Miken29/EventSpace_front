import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import {
  IconlyArrowLeft,
  IconlyDelete,
  IconlyEdit,
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

  const [isHover, setIsHover] = useState(false);
  const [activeImg, setActiveImg] = useState(0);

  const handlePerfil = () => {
    navigate("/perfil");
  };
  const handleSalones = () => {
    navigate("/Dashboard");
  };

  return (
    <>
      <header className="px-11 py-[18px] flex flex-row justify-between items-center font-outfit">
        <h1 className="font-outfit-semibold text-4xl">Salon</h1>
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
      <div className="overflow-y-auto overflow-x-hidden h-[calc(100vh-70px)] font-outfit">
        <div className="border border-[#C4C4C4] px-6 py-2 flex flex-row justify-between items-center">
          <button
            className=" cursor-pointer"
            onClick={() => navigate("/Dashboard")}
          >
            <IconlyArrowLeft />
          </button>
          <div className="flex flex-row gap-4">
            <motion.button
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
              initial={{ width: "48px" }}
              animate={{ width: isHover ? "180px" : "48px" }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="border border-[#EA4335] font-outfit-semibold text-white px-3 py-2 rounded-4xl bg-[#EA4335] cursor-pointer flex items-center gap-3"
            >
              <div className="min-w-[20px] flex justify-center items-center">
                <IconlyDelete />
              </div>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: isHover ? 1 : 0 }}
                transition={{ duration: 0.2 }}
                className="whitespace-nowrap"
              >
                Eliminar salón
              </motion.span>
            </motion.button>
          </div>
        </div>
        <div className="px-16 py-6 flex flex-row gap-10">
          <div className="w-2/3">
            <img
              src={salon.imagenes[activeImg]}
              alt={salon.imagenes[activeImg]}
              className="border w-full h-[470px]"
            />
            <h1 className="text-xl font-outfit-bold my-3">Galeria</h1>
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
          </div>
          <div className="w-1/3">
            <h1 className="text-2xl font-outfit-bold">{salon.nombre}</h1>
            <div className="flex flex-row items-center gap-3 my-4">
              <div className="px-2.5 py-1.5 rounded-2xl bg-[#8B5DFF]/10">
                <p className="text-xs text-[#8B5DFF] font-outfit-bold">
                  {salon.tipo}
                </p>
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
                <p>
                  {salon.capacidadMin} a {salon.capacidadMax}
                </p>
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
            <h1 className="text-xl font-outfit-bold">Descripcion del salon</h1>
            <p>{salon.descripcion}</p>
            <h1 className="text-xl font-outfit-bold">Amenidades</h1>
            <p>Aun en construcción 🚧</p>
            <h1 className="text-xl font-outfit-bold">Ubicación</h1>
            <div className="flex flex-row items-center gap-2 my-2">
              <IconlyLocation />
              <p>{salon.ubicacion}</p>
            </div>
            <div className="my-2">
              <p>mapa</p>
            </div>
            <button className="flex flex-row items-center gap-2 border border-[#8B5DFF] font-outfit-semibold text-white px-5 py-2 rounded-4xl my-3 bg-[#8B5DFF] cursor-pointer transition-all duration-200 hover:bg-[#6b569e] hover:border-[#6b569e]">
              Editar salon
              <IconlyEdit />
            </button>
            <div>
              <button onClick={() => navigate(`/servicios/${salon.id}`)} className="border border-[#8B5DFF] font-outfit-semibold text-white px-5 py-2 rounded-4xl bg-[#8B5DFF] cursor-pointer transition-all duration-200 hover:bg-[#6b569e] hover:border-[#6b569e]">
                Ir al panel de administración
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
