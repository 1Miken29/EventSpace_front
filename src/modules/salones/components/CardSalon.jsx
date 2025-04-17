import cardSalonimg from "../../../assets/cardSalon.jpg"
import { useNavigate } from "react-router-dom";
import { IconlyStar } from "../icons/Icons";

export default function CardSalon({ salon }) {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/Dashboard/${salon.id}`)
  }
  return (
    <button onClick={handleClick} className="cursor-pointer w-[300px] h-[340px] rounded-3xl text-white flex flex-row justify-between border relative bg-gradient-to-t from-black to-45% to-transparent">
      <img src={cardSalonimg} className="absolute mix-blend-overlay" />
      <div className="flex flex-col justify-end items-start py-6 px-3">
        <p className="font-outfit-bold text-xl">{salon.nombre}</p>
        <p className="my-2.5">{salon.ubicacion}</p>
        <p className="font-outfit-bold text-xl">$123</p>
      </div>
      <div className="flex flex-col justify-between py-6 px-3">
        <div className="bg-white px-2.5 py-1 flex flex-row items-center justify-between rounded-2xl">
          <IconlyStar />
          <p className="text-xs text-blue-500">4.8</p>
        </div>
      </div>
    </button>
  );
}
