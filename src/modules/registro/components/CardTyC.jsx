import { IconlyArrowRight } from "../../../icons/Icons";

export default function CardTyC({ num, texto }) {
  const handleScroll = () => {
    const target = document.getElementById(`section-${num}`);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      onClick={handleScroll}
      className="cursor-pointer flex flex-col justify-between border-2 border-white shadow-form rounded-xl m-2 py-2 px-4 bg-[#31137E]/30 w-[200px] h-[200px] transition-all duration-200 hover:bg-[#31137E]/50 hover:shadow-none hover:translate-2"
    >
      <h1 className="font-outfit-semibold text-4xl">{num}</h1>
      <p className="font-outfit">{texto}</p>
      <IconlyArrowRight />
    </div>
  );
}
