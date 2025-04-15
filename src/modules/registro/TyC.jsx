import { terminos } from "../../assets/data";
import CardTyC from "./components/CardTyC";

export default function TyC() {
  return (
    <div className="relative h-screen overflow-y-auto">
      <header className="px-11 py-[18px] flex flex-row items-center font-outfit">
        <img src="src/assets/icon.jpg" className="w-12 h-12 mx-4" />
        <h1 className="text-xl md:text-2xl font-outfit-semibold">EventSpace</h1>
      </header>
      <div className="p-11">
        <p className="font-outfit-extralight text-lg text-[#545454] pb-1">
          Ultima actualización: 15/04/2025
        </p>
        <p className="font-outfit-extralight text-lg pb-1">EventSpace</p>
        <h1 className="text-5xl font-outfit">Términos y condiciones</h1>
        <div className="flex flex-row gap-5 flex-wrap m-4">
          {terminos.map((termino, index) => (
            <CardTyC key={index} num={index + 1} texto={termino.text} />
          ))}
        </div>
        <div>
          {terminos.map((termino, index1) => (
            <div key={index1} className="font-outfit">
              <div className="flex flex-row items-center">
              <h1 id={`section-${index1 + 1}`} className="text-3xl">
                {index1 + 1}. {termino.text}
              </h1>
              <hr className="ml-4 flex-grow border-2 border-[#31137E]/30" />
              </div>

              {termino.descripcion?.includes("<") ? (
                <div
                  className="my-4"
                  dangerouslySetInnerHTML={{ __html: termino.descripcion }}
                />
              ) : (
                <p className="my-4">{termino.descripcion}</p>
              )}

              {termino.sub.map((sub, index2) => (
                <div key={index2}>
                  <h1 className="text-2xl">
                    {index1 + 1}.{index2 + 1} {sub.text}
                  </h1>

                  {sub.descripcion?.includes("<") ? (
                    <div
                      className="my-4"
                      dangerouslySetInnerHTML={{ __html: sub.descripcion }}
                    />
                  ) : (
                    <p className="my-4">{sub.descripcion}</p>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
