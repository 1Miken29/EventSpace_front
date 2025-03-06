import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './index.css';
import logo from './logo.png';
import Button from './Button';
import img99 from './img99.jpeg';
import RegisterP from './RegisterP';
import RegisterP2 from './RegisterP2';


const Home = () => {
  return (
    <div className="relative h-screen overflow-hidden flex items-center justify-center">
      <div className="absolute left-0 m-10 hidden md:block top-1/3 transform -translate-y-1/3">
        <img src={img99} className="w-110 sm:w-60 md:w-80 lg:w-100 xl:w-165 h-auto" alt="img99" />
      </div>
      <div className="relative transform md:translate-x-20 lg:translate-x-40 xl:translate-x-60 text-center">
        <div className="flex justify-center mt-0">
          <img src={logo} alt="logo" className="w-20 md:w-40 lg:w-60 xl:w-60 mt-0" />
        </div>
        <div className="mt-0">
          <p className="font-rubik font-light text-[13px] md:text-[16px] leading-[110%] text-[#666876] tracking-widest">
            BIENVENIDO A EVENTSPACE
          </p>
          <h2 className="font-rubik font-semibold text-[15px] lg:text-[30px] leading-[90%] text-center text-[#191D31] mt-2">
            Tu salón, El Escenario De
          </h2>
          <h2 className="font-rubik font-semibold text-[15px] lg:text-[30px] leading-[130%] text-center text-[#9B47C3] mt-2">
            Grandes Momentos
          </h2>
          <p className="font-rubik font-light text-[14px] md:text-[18px] leading-[180%] text-[#666876] mt-4 block cursor-pointer">
            <Link to="/registerP">Registrate en EventSpace</Link>
          </p>
          <div className="flex justify-center">
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registerP" element={<RegisterP />} />
        <Route path="/registerP2" element={<RegisterP2 />} />
      </Routes>
    </Router>
  );
}

export default App;