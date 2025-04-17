import ver from "../icons/ver.png"
import viñ from "../icons/viñ.png"

export default function Bullet({ text, isReady }) {
  return (
    <div
      className={`font-outfit flex flex-row items-center transition-colors duration-200 ${isReady ? "text-[#4285F4]" : ""}`}
    >
      <img
        src={isReady ? ver : viñ}
        className="w-3 h-3 mx-2 transition-all duration-200"
      />
      <p>{text}</p>
    </div>
  );
}
