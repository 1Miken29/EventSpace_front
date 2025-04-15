import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LayoutForm from "../components/LayoutForm";
import "../../index.css";
import { IconlyHide, IconlyShow } from "./icons/Icons";
import Bullet from "../registro/components/Bullet";

const LoginP = () => {
  const navigate = useNavigate();
  const bulletlist = [
    { text: "Al menos 8 caracteres", regex: /.{8,}/ },
    { text: "Letras minúsculas (a-z)", regex: /[a-z]/ },
    { text: "Letras mayúsculas (A-Z)", regex: /[A-Z]/ },
    { text: "Número (0-9)", regex: /\d/ },
    { text: "Caracteres especiales (@$!%*?&)", regex: /[@$!%*?&]/ },
  ];

  const [showRequisitos, setShowRequisitos] = useState(false);
  const [isHide, setIsHide] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    isAdmin: true,
  })

  const bulletsToShow = bulletlist.map((rule) => ({
    text: rule.text,
    isReady: rule.regex.test(formData.password),
  }));
  const allReady = bulletsToShow.every((b) => b.isReady);


  const handleRegisterP = () => {
    navigate("/registro");
  };
  const handleContraP = () => {
    navigate("/ContraP");
  };
  const handleLoginP = () => {
    navigate("/Dashboard");
  };
  return (
    <LayoutForm>
      <div className="w-full max-w-sm space-y-4 bg-white p-4 md:p-6 lg:p-8 rounded-4xl mx-auto shadow-form">
        <div className="flex flex-col md:flex-row items-center md:items-center justify-between mb-4 space-y-2 md:space-y-1">
          <div className="flex flex-row items-center gap-2 border-r border-r-black pr-2 py-1">
            <img src="src/assets/icon.png" className="w-12 h-12" />
            <h1 className="text-xl md:text-[30px] font-outfit-semibold">
              EventSpace
            </h1>
          </div>
          <h2 className="text-sm md:text-base font-outfit-semibold">
            Propietarios
          </h2>
        </div>
        <p className="font-outfit text-[16px] text-center">Inicia sesión</p>

        <form onSubmit={handleLoginP} className="font-outfit">
          <div className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Correo Electrónico*"
              className="w-full p-2 md:p-4 border border-gray-300 rounded-xl"
            />
            <div className="flex flex-row items-center border border-gray-300 rounded-xl p-2 md:p-4 focus-within:border-black focus-within:border-2">
              <input
                type={isHide ? "password" : "text"}
                placeholder="Contraseña*"
                name="password"
                className="w-full outline-none"
                onFocus={() => setShowRequisitos(true)}
                onBlur={() => setShowRequisitos(false)}
              />
              <button
                type="button"
                aria-label="Mostrar u ocultar contraseña"
                onClick={() => {
                  isHide ? setIsHide(false) : setIsHide(true);
                }}
              >
                {isHide ? <IconlyShow /> : <IconlyHide />}
              </button>
            </div>
            <div
              className={`text-xs overflow-hidden m-0 transition-all duration-300 transform ${
                showRequisitos
                  ? "border p-4 opacity-100 scale-100 max-h-96 translate-y-0 mb-4"
                  : "opacity-0 scale-95 max-h-0 -translate-y-2 pointer-events-none"
              }`}
            >
              <p className={allReady ? "border-[#4285F4] text-[#4285F4]" : ""}>
                Tu contraseña debe contener:
              </p>
              {bulletsToShow.map((b, index) => (
                <Bullet key={index} text={b.text} isReady={b.isReady} />
              ))}
            </div>
            <a
              href=""
              className="transition-all text-center duration-200 text-black-500 font-semibold cursor-pointer hover:text-gray-700"
              onClick={handleContraP}
            >
              ¿Olvidaste tu contraseña?
            </a>
            <button className="flex flex-row justify-center items-center w-full transition-all duration-200 cursor-pointer bg-blue-500 text-white py-4 px-4 rounded-full hover:bg-blue-700">
              Iniciar Sesión
            </button>
            <p className="text-center">
              ¿Aún no tienes una cuenta?{" "}
              <a
                href=""
                className="transition-all duration-200 text-black-500 font-semibold cursor-pointer hover:text-gray-700"
                onClick={handleRegisterP}
              >
                Registrate
              </a>
            </p>

            <div className="flex justify-center">
              <button
                aria-label="Sign in with Google"
                className="flex items-center bg-white border border-button-border-light rounded-full p-0.5 pr-4"
              >
                <div className="flex items-center justify-center bg-white w-9 h-9 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                  >
                    <title>Continua con Google</title>
                    <desc>Google G Logo</desc>
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      className="fill-google-logo-blue"
                    ></path>
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      className="fill-google-logo-green"
                    ></path>
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      className="fill-google-logo-yellow"
                    ></path>
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      className="fill-google-logo-red"
                    ></path>
                  </svg>
                </div>
                <span className="text-sm text-google-text-gray tracking-wider">
                  Continua con Google
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </LayoutForm>
  );
};
export default LoginP;
