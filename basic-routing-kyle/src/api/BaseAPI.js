import axios from "axios"
export const baseAPI = axios.create({ baseURL: import.meta.env.VITE_API_URL })
export const baseURL = "http://localhost:3000/"
