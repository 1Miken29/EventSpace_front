import { IconlyArrowRight2 } from "../icons/Icons";

export default function Tab({ text, img: Icon, onClick, isActive, activeBar }) {
  return (
    <button
      onClick={onClick}
      className={`flex justify-between items-center w-full cursor-pointer p-2 rounded-3xl transition-all font-outfit 
        ${isActive ? "bg-[#8B5DFF]/20" : "hover:bg-[#8B5DFF]/10"}`}
    >
      <div className="w-90 h-7 flex items-center gap-2">
        <Icon />
        <h1 className={`${activeBar ? "text-lg" : "hidden"}`}>{text}</h1>
      </div>
      <div>
        <IconlyArrowRight2/>
      </div>
    </button>
  );
}
