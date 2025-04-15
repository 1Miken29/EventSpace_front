import { IconlyCloseSquare } from "../icons/Icons";
import { AnimatePresence, motion } from "motion/react";

const Toast = ({ message, type = "success", isVisible }) => {
  const typeStyles = {
    success: "bg-green-500",
    error: "bg-white text-[#EA4335] font-outfit-semibold",
    warning: "bg-yellow-500 text-black",
    info: "bg-blue-500",
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -150, boxShadow: "0px 0px #000" }}
          animate={{
            y: 0,
            boxShadow:
              "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className={`w-max-[440px] text-center fixed top-5 left-1/2 transform -translate-x-1/2 z-50 px-4 py-2 rounded-full transition-all duration-300 ${typeStyles[type]}`}
        >
          <div className="flex items-center justify-between gap-2 text-[16px]">
            <IconlyCloseSquare />
            <span>{message}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
