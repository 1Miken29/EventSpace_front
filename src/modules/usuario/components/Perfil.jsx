import { useUser } from "../../../hooks/UserContext";

export default function PerfilUser() {
  const { user } = useUser()
  return (
    <>
    <div className="my-8">
      <p className="text-3xl">Perfil</p>
    </div>
    <div>
      <p>Nombre: {user.nombre}</p>
      <p>Apellido Paterno: {user.apellidoPaterno}</p>
      <p>Apellido Materno: {user.apellidoMaterno}</p>
      <p>Correo: {user.email}</p>
      <p>Teléfono: {user.telefono}</p>
      <p>Contraseña: {user.password}</p>
      <button className="border border-[#8B5DFF] px-4 py-2 rounded-4xl bg-[#8B5DFF]/30">Editar Datos</button>
      <button className="border border-[#8B5DFF] px-4 py-2 rounded-4xl bg-[#8B5DFF]/30">Editar Contraseña</button>
    </div>
    </>
  );
}
