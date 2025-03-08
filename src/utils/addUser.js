import { client } from "../api/client";

export const addUser = async (userData) => {
    try {
        const response = await client.post("/register", userData);
        return response.data; // Retorna solo los datos de la respuesta
    } catch (error) {
        console.error("Error al registrar usuario:", error);
        throw error; // Para manejar el error en el componente
    }
};
