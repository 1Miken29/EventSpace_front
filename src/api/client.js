import axios from "axios";

export const client = axios.create({
    baseURL: "https://eventspce-production.up.railway.app/api"
})