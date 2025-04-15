import { useNavigate } from "react-router-dom";
import { IconlyHomeBold, IconlyProfile } from "./icons/Icons";
import CardSalon from "./components/CardSalon";
import { useSalon } from "../../hooks/SalonContext";

export default function Dashboard() {
  const navigate = useNavigate();

  const { salon } = useSalon()

  const handleRegister = () => {
    navigate("/registerS");
  };

  const handlePerfil = () => {
    navigate("/perfil");
  };
  const handleSalones = () => {
    navigate("/Dashboard");
  };

  return (
    <>
      <header className="px-11 py-[18px] flex flex-row justify-between items-center font-outfit">
        <h1 className="font-outfit-semibold text-4xl">Perfil</h1>
        <div className="flex flex-row gap-[70px] mx-8">
          <button
            className="flex flex-col cursor-pointer justify-center items-center text-[#8B5DFF]"
            onClick={handleSalones}
          >
            <IconlyHomeBold color="#8B5DFF" />
            Salones
          </button>
          <button
            className="flex flex-col cursor-pointer justify-center items-center"
            onClick={handlePerfil}
          >
            <IconlyProfile />
            Perfil
          </button>
        </div>
      </header>
      <div className={`flex flex-col h-screen font-outfit-medium ${salon ? "p-11" : "justify-center items-center"}`}>
        {salon ? (
          <CardSalon salon={salon}/>
        ) : (
          <>
            <p>Aun no hay salones registrados</p>
            <button
              onClick={handleRegister}
              className="underline text-[#8B5DFF] cursor-pointer"
            >
              Registrar un salón
            </button>
          </>
        )}
      </div>
    </>
  );
}
