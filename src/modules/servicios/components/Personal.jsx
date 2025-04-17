import { useState } from "react";
import { IconlyPaperPlus } from "../icons/Icons";
import { motion } from "motion/react";

export default function Personal() {
  const [isHover, setIsHover] = useState(false);
  return (
    <div className="font-outfit m-4">
      <div className="flex flex-row justify-between items-center">
        <h1 className="font-outfit-semibold text-4xl">Personal</h1>
        <motion.button
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          initial={{ width: "52px" }}
          animate={{ width: isHover ? "195px" : "52px" }}
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
            Agregar personal
          </motion.span>
        </motion.button>
      </div>
      <table className="w-full my-3">
        <p>No tienes personal agregado</p>
      </table>
    </div>
  );
}
