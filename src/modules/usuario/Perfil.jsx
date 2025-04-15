import { useNavigate } from "react-router-dom";
import Tab from "./components/Tab";
import {
  IconlyCalendar,
  IconlyHome,
  IconlyLogout,
  IconlyNotification,
  IconlyProfile,
  IconlyProfileBold,
  IconlyWallet,
} from "./icons/Icons";
import { useState } from "react";
import PerfilUser from "./components/Perfil";
import { useUser } from "../../hooks/UserContext";
import CierreSesion from "./components/CierreSesion";

export default function Perfil() {
  const navigate = useNavigate();
  const { user } = useUser()
  
  const [activeTab, setActiveTab] = useState("Mis reservas")
  const tabs = [
    { text: "Mis reservas", img: IconlyCalendar },
    { text: "Pagos", img: IconlyWallet },
    { text: "Perfil", img: IconlyProfile },
    { text: "Notificaciones", img: IconlyNotification },
    { text: "Salir de la cuenta", img: IconlyLogout },
  ];
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
            className="flex flex-col cursor-pointer justify-center items-center"
            onClick={handleSalones}
          >
            <IconlyHome />
            Salones
          </button>
          <button
            className="flex flex-col cursor-pointer justify-center items-center text-[#8B5DFF]"
            onClick={handlePerfil}
          >
            <IconlyProfileBold />
            Perfil
          </button>
        </div>
      </header>
      <div className="flex flex-row font-outfit-medium">
        <div className="flex-1/3 flex flex-col bg-[#8B5DFF]/10 items-center h-screen py-[30px]">
          <div className="mb-[45px]">
            <img
              src="src/assets/icon.jpg"
              className="w-36 h-36 rounded-full mb-3"
            />
            <h1 className="text-2xl">{user.nombre + " " + user.apellidoPaterno}</h1>
          </div>
          <div className="flex flex-col gap-3">
            {tabs.map((tab) => (
              <Tab
                key={tab.text}
                text={tab.text}
                img={tab.img}
                color={tab.color}
                danger={tab.text === "Salir de la cuenta"}
                onClick={() => setActiveTab(tab.text)}
                isActive={activeTab === tab.text}
              />
            ))}
          </div>
        </div>
        {/*Parte Derecha*/}
        <div className="flex-2/3 flex flex-col h-screen mx-11">
          {activeTab === "Mis reservas" && <p>Contenido de reservas</p>}
          {activeTab === "Pagos" && <p>Contenido de pagos</p>}
          {activeTab === "Perfil" && <PerfilUser />}
          {activeTab === "Notificaciones" && <p>Contenido de notificaciones</p>}
          {activeTab === "Salir de la cuenta" && (
            <div className="flex h-10/12 justify-center items-center">
              <CierreSesion />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
