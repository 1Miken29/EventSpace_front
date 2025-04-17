import { motion } from "motion/react";
import { IconlyPaperPlus } from "../icons/Icons";
import { useState } from "react";

export default function Servicios() {
  const servicios = [
    {
      nombre: "Catering",
      precio: 1000,
    },
    {
      nombre: "Audio",
      precio: 900,
    },
  ];
  const [isHover, setIsHover] = useState(false);
  return (
    <div className="font-outfit m-4">
      <div className="flex flex-row justify-between items-center">
        <h1 className="font-outfit-semibold text-4xl">Servicios</h1>
        <motion.button
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          initial={{ width: "52px" }}
          animate={{ width: isHover ? "190px" : "52px" }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="border border-[#8B5DFF] font-outfit-semibold text-white px-3 py-2 rounded-4xl bg-[#8B5DFF] cursor-pointer flex items-center gap-2"
        >
          <div className="flex justify-center items-center">
            <IconlyPaperPlus />
          </div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: isHover ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            className="whitespace-nowrap"
          >
            Agregar servicios
          </motion.span>
        </motion.button>
      </div>
      <table className="w-full my-3">
        {servicios.length > 0 ? (
          <>
            <tr className="bg-[#31137E]/30">
              <th className="p-2 border border-[#31137E]/40">Servicio</th>
              <th className="p-2 border border-[#31137E]/40">Costo</th>
            </tr>
            {servicios.map((servicio) => (
              <tr>
                <td className="p-2 border border-[#31137E]/40 text-center">
                  {servicio.nombre}
                </td>
                <td className="p-2 border border-[#31137E]/40 text-center">
                  ${servicio.precio}
                </td>
              </tr>
            ))}
          </>
        ) : (
          <p>No tienes servicios agregados</p>
        )}
      </table>
    </div>
  );
}
