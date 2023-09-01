import axios from "axios";

export const api = axios.create({
   baseURL: "https://technical-test-coopercarga.onrender.com",
   timeout: 30000,
});
