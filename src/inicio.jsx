import React from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import './index.css';
import salon from './assets/salon.jpg';
import RegisterP from './modules/registro/RegisterP';
import RegisterP2 from './modules/registro/RegisterP2';  
import LoginP from './modules/autenticacion/LoginP'; 
import ContraP from './modules/autenticacion/ContraP';
import Dashboard from './modules/salones/Dashboard';
import RegisterS from './modules/salones/RegistroS';
import Perfil from './modules/usuario/Perfil';
import { useUser } from './UserContext';

function Inicio() {
  const navigate = useNavigate();

  const { user } = useUser()

  const handlePropietarioClick = () => {
    navigate('/registerP');  
  };

  return (
    <Routes>
      <Route path="/" element={
        <div className="relative h-screen">
          {/* Header */}
          <div className="absolute top-0 left-0 right-0 bg-white h-16 md:h-22 z-10 flex items-center px-4 md:px-10">
            <img src="src/assets/icon.png" className='w-12 h-12 mx-4'/>
            <h1 className="text-xl md:text-2xl font-Outfit font-semibold">EventSpace</h1>
          </div>

          {/* Fondo con imagen */}
          <div className="absolute inset-0 top-16 md:top-20">
            <img 
              src={salon} 
              alt="background" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-white/15"></div>
          </div>

          <div className="absolute inset-0 top-24 md:top-40 z-20">
            <div className="container mx-auto px-4 md:px-20 lg:px-30">
              <h1 className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold font-Rubik text-left mb-8 md:mb-16">
                Celebra a lo Grande,<br/> Reserva en un Instante
              </h1>

              <div className="flex flex-col md:flex-row gap-4 md:gap-32 mb-8">
                <h3 className='text-white font-semibold font-Rubik text-lg md:text-xl text-center md:text-left'>
                  ¿Quieres hacer crecer tu negocio?
                </h3>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 md:gap-45 py-4 md:py-5">
                <button 
                  onClick={handlePropietarioClick}
                  className="w-full sm:w-auto bg-white hover:bg-gray-100 text-black font-semibold py-2 md:py-3 px-6 md:px-10 rounded-full text-sm md:text-base"
                >
                  Inicia como Propietario
                </button>   
              </div>
            </div>
          </div>
        </div>
      } />
      <Route path="/registerP" element={<RegisterP />} />
      <Route path="/registerP2" element={<RegisterP2 />} />  
      <Route path="/LoginP" element={<LoginP />} />
      <Route path="/ContraP" element={<ContraP />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/registerS" element={<RegisterS />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default Inicio;
