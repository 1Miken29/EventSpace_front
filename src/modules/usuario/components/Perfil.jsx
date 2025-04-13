import { useUser } from "../../../UserContext";

export default function PerfilUser() {
  const { userData } = useUser()
  return (
    <>
    <div className="my-8">
      <p className="text-3xl">Perfil</p>
    </div>
    <div>
      <p>Nombre: {userData.nombre}</p>
      <p>Apellido Paterno: {userData.apellidoPat}</p>
      <p>Apellido Materno: {userData.apellidoMat}</p>
      <p>Correo: {userData.email}</p>
      <p>Teléfono: {userData.telefono}</p>
      <p>Contraseña: {userData.password}</p>
      <button className="border border-[#8B5DFF] px-4 py-2 rounded-4xl bg-[#8B5DFF]/30">Editar Datos</button>
      <button className="border border-[#8B5DFF] px-4 py-2 rounded-4xl bg-[#8B5DFF]/30">Editar Contraseña</button>
    </div>
    </>
  );
}
