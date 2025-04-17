import CardReserva from "./CardReserva";
import { reservas } from "../../../assets/mockups";

export default function Reservas() {
  return (
    <>
      {/*<div className="flex justify-center items-center h-screen">
      <p>No tienes reservas aún</p>
    </div>*/}
      <div className="flex flex-row gap-6 flex-wrap h-[calc(100vh-110px)] overflow-y-scroll">
        {reservas.map((reserva) => (
          <CardReserva res={reserva} />
        ))}
      </div>
    </>
  );
}
