import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './index.css';
import logo from './logo.png';
import Button from './Button';
import img99 from './img99.jpeg';

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
            <Link to="/register">Registrate en EventSpace</Link>
          </p>
          <div className="flex justify-center">
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
};

const Register = () => {
  return (
    <div className="bg-gray-200 h-screen flex items-center justify-start">
      <div className="max-w-2xl w-flex bg-pink-100 p-20">
        <h1 className="text-3xl font-rubik mb-4 mt-4">
          ¡Te damos la bienvenida a Event Space para Clientes!
        </h1>
        <h2 className="text-xl mb-8">
          Regístrate y reserva el salón de tus sueños
        </h2>
        <ul className="space-y-4 mb-8">
          <li className="flex items-center">
            Revisa los Salones disponibles
          </li>
          <li className="flex items-center">
            Analiza los datos actuales y las fechas disponibles
          </li>
          <li className="flex items-center">
            Completa tu perfil y comparte tus opiniones para conectar con más clientes.
          </li>
        </ul>
      </div>

      <div className="bg-[#c3b6e3] h-screen flex items-center justify-end w-flex">
        <div className="space-y-4 bg-white p-2 rounded-lg w-100 mb-8">
          <h1 className="text-xl font-semibold">EventSpace</h1>
          <p>Crea tu usuario</p>

          <input
            type="text"
            placeholder="Nombre(s)*"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Apellido Materno*"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Apellido Paterno*"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Fecha de Nacimiento (DD/MM/AAAA)"
            className="w-full p-2 border border-gray-300 rounded"
          />

          <button className="w-full bg-blue-500 text-white py-2 px-4 rounded mt-8 hover:bg-blue-700">
            Siguiente
          </button>
          <p className="text-center mt-4">
            ¿Ya tienes una cuenta?{" "}
            <a href="#" className="text-blue-500 hover:text-blue-700">
              Inicia sesión
            </a>
          </p>

          <Button />
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
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;