import axios from "axios"
import { token } from "../Components/Token/Token"



export const api = axios.create ({
  baseURL: "https://api.predict.app.br",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token.token}`, 
    "X-TENANT-ID": "arnia"
  },
})