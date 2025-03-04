import React from 'react';
import './index.css';
import logo from './logo.png';
import Button from './Button';

function App() {
  return (
    <div className="relative h-screen overflow-hidden flex items-center justify-center">
      <div className="relative transform translate-x-80 text-center">
        <div className="flex justify-center">
          <img src={logo} alt="" className="w-70 md:w-69" />
        </div>
        <div className="mt-0">
          <p className="font-rubik font-light text-[16px] leading-[110%] text-[#666876] tracking-widestr">
            BIENVENIDO A EVENTSPACE
          </p>
          <h2 className="font-rubik font-semibold text-[24px] md:text-[32px] leading-[90%] text-center text-[#191D31] mt-2">
            Tu salón, El Escenario De
          </h2>
          <h2 className="font-rubik font-semibold text-[24px] md:text-[32px] leading-[130%] text-center text-[#9B47C3] mt-2">
            Grandes Momentos
          </h2>
          <p className="font-rubik font-light text-[18px] leading-[180%] text-[#666876] mt-4">
            Registrate en EventSpace
          </p>
          <div className="flex justify-center">
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
