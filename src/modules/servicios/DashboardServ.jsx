import { useSalon } from "../../hooks/SalonContext";
import icon from "../../assets/AdminDashboard.png";
import logo from "../../assets/icon.jpg";
import { motion } from "framer-motion";
import Servicios from "./components/Servicios";
import Tab from "./components/Tab";
import { useEffect, useState } from "react";
import {
  IconlyArrowRight2,
  IconlyCategory,
  IconlySetting,
  Iconlyuser,
} from "./icons/Icons";
import Personal from "./components/Personal";
import Inventario from "./components/Inventario";
import { useNavigate } from "react-router-dom";

export default function DashboardServ() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const { salon } = useSalon();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const [activeTab, setActiveTab] = useState("Servicios");
  const [isActiveBar, setIsActiveBar] = useState(true);

  const tabs = [
    { text: "Servicios", img: IconlySetting },
    { text: "Personal", img: Iconlyuser },
    { text: "Inventario", img: IconlyCategory },
  ];

  if (isLoading) {
    return (
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 0.9, type: "spring" ,repeat: Infinity }}
        className="flex justify-center items-center h-screen"
      >
        <img src={logo} className="w-16 h-16" />
      </motion.div>
    );
  }

  return (
    <div className="flex flex-row h-screen font-outfit">
      {/* SIDEBAR ANIMADA */}
      <motion.section
        initial={{ width: "25%" }}
        animate={{ width: isActiveBar ? "25%" : "9%" }}
        transition={{ duration: 0.4, type: "spring", damping: 20 }}
        className="p-4 overflow-hidden relative"
      >
        {/* HEADER DE LA BARRA */}
        <div className="h-16 flex justify-between items-center mb-4">
          <div className="flex flex-row items-center gap-4">
            <img
              src={icon}
              onClick={() => navigate(`/Dashboard/${salon.id}`)}
              className="cursor-pointer w-10 h-10"
            />
            <h1
              className={`text-2xl font-outfit-semibold text-wrap transition-opacity duration-350 ${
                isActiveBar ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              {salon.nombre}
            </h1>
          </div>
          <button
            className={`mr-2 transition-all cursor-pointer ${isActiveBar ? "rotate-180" : ""}`}
            onClick={() => setIsActiveBar(!isActiveBar)}
          >
            <IconlyArrowRight2 />
          </button>
        </div>

        {/* TABS */}
        <div className="flex flex-col gap-3 mt-6">
          {tabs.map((tab) => (
            <Tab
              key={tab.text}
              text={tab.text}
              img={tab.img}
              color={tab.color}
              danger={tab.text === "Salir de la cuenta"}
              onClick={() => setActiveTab(tab.text)}
              isActive={activeTab === tab.text}
              activeBar={isActiveBar}
            />
          ))}
        </div>
      </motion.section>

      {/* CONTENIDO PRINCIPAL */}
      <motion.div
        initial={{ width: "75%" }}
        animate={{ width: isActiveBar ? "75%" : "91%" }}
        className="flex flex-col h-screen mx-11 my-5"
      >
        {activeTab === "Servicios" && <Servicios />}
        {activeTab === "Personal" && <Personal />}
        {activeTab === "Inventario" && <Inventario />}
      </motion.div>
    </div>
  );
}
