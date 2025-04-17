import cardSalon from "../../../assets/cardSalon.jpg";

export default function CardReserva({ res }) {
  return (
    <div className="border border-[#C4C4C4] w-[250px] h-[330px] rounded-xl p-3 text-[15px]">
      <img src={cardSalon} className="h-1/2 w-full" />
      <div className="mt-5">
        <p className="font-outfit-semibold">{res.salon}</p>
        <div className="font-outfit text-[#666876]">
          <p>{res.nombre + " " + res.apellido}</p>
          <p>{res.fecha}</p>
          <p>De: {res.horario}</p>
        </div>
      </div>
      <div className="text-xs flex flex-row mt-2 justify-around">
        <p>- Habilitada</p>
        <p>- Confirmada</p>
      </div>
    </div>
  );
}
