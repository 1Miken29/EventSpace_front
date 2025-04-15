import { useUser } from "../../../hooks/UserContext";

export default function CierreSesion() {
  const { logout } = useUser()
  return (
    <div className="border border-[#8B5DFF]/70 p-7 w-[440px] rounded-4xl bg-[#8B5DFF]/10">
      <h1 className="text-3xl py-8 px-3.5">
        ¿Estas seguro de querer cerrar sesión?
      </h1>
      <div className="flex flex-row gap-3.5 justify-end">
        <button className="border border-[#8B5DFF] text-[#666876] px-5 py-2.5 rounded-4xl bg-[#8B5DFF]/30">
          Cancelar
        </button>
        <button onClick={logout} className="border border-[#8B5DFF] text-white px-11 py-2.5 rounded-4xl bg-[#8B5DFF]/70">
          Cerrar
        </button>
      </div>
    </div>
  );
}
