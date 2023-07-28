import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.predict.app.br",
  headers: {
    "Content-Type": "application/json",
    'Authorization': `Bearer ${'AUTH_TOKEN'}`,
    "X-TENANT-ID": "arnia",
  },
});
