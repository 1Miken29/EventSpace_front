import { IconlyArrowRight2 } from "../icons/Icons";

export default function Tab({ text, img: Icon, danger, onClick, isActive }) {
  return (
    <button
      onClick={onClick}
      className={`flex justify-between items-center w-full cursor-pointer p-2 rounded-3xl transition-all font-outfit 
        ${isActive ? "bg-[#8B5DFF]/20" : "hover:bg-[#8B5DFF]/10"}`}
    >
      <div className="w-90 h-7 flex items-center gap-2">
        <Icon />
        <h1 className={`text-lg ${danger ? "text-[#F75555]" : ""}`}>{text}</h1>
      </div>
      <div>
        <IconlyArrowRight2 />
      </div>
    </button>
  );
}
