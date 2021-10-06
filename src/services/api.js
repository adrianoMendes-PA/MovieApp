import axios from "axios";
import { API_KEY, API_URL } from "@env";
//&language=pt-BR&page=1

export const key = API_KEY

const api = axios.create({
    baseURL: API_URL
})

export default api;