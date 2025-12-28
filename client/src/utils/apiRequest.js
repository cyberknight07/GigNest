import axios from "axios";

const BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;

const newRequest = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
})

export default newRequest;