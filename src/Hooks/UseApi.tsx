import axios from "axios";
import { response } from "../Components/Token/Token";

export const api = axios.create({
  baseURL: "https://api.predict.app.br",
  headers: {
    "Content-Type": "application/json",
    'Authorization': `Bearer ${response.token}`,
    "X-TENANT-ID": "arnia",
  },
});
