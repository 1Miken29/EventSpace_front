import { useState } from "react";

export default function LayoutForm({ children }) {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/*Lado Izquierdo */}
      <div className="w-full md:w-1/2 bg-white p-2 md:p-4 lg:p-8 xl:p-16 overflow-hidden">
        <div className="max-w-xl mx-auto">
          <h1 className="text-2xl md:text-3xl lg:text-[40px] mb-4 md:mb-6 font-outfit-bold leading-tight">
            ¡Te damos la bienvenida a Event Space para Propietarios!
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-[32px] font-outfit mb-4 md:mb-8 leading-normal">
            Regístrate para potenciar tu negocio
          </h2>
          <ul className="space-y-3 md:space-y-6 mb-4 md:mb-8 list-disc px-6">
            <li className="font-outfit text-lg md:text-xl lg:text-[24px] leading-relaxed">
              Publica tu(s) salon(es) disponibles
            </li>
            <li className="font-outfit text-lg md:text-xl lg:text-[24px] leading-relaxed">
              Gestiona tus reservas y tus clientes
            </li>
            <li className="font-outfit text-lg md:text-xl lg:text-[24px] leading-relaxed">
              Gestiona con facilidad tu personal y el inventario que tiene cada
              uno de tus salones
            </li>
          </ul>
        </div>
      </div>
      {/*Lado Derecho */}
      <div className="w-full md:w-1/2 bg-[#c3b6e3] flex items-center justify-center p-4">
        {children}
      </div>
    </div>
  );
}
