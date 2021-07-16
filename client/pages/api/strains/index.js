import axios from "axios";
import { backendUrl } from "../../../constants/backend";

const API = axios.create({ baseURL: backendUrl });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("admin")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("admin")).token
    }`;
  }
  return req;
});

export const addStrain = (strain) => API.post(`${backendUrl}/strains`, strain);

export const deleteStrains = (strains) =>
  API.post(`${backendUrl}/strains/delete`, strains);

export const updateStrain = (strain) =>
  API.post(backendUrl + "/strains/update", strain);

export const toggleVisible = (strain) =>
  API.post(backendUrl + "/strains/visibility", strain);

export const fetchStrains = () => axios.get(`${backendUrl}/strains/fetch`);

export const fetchStrain = (strain) =>
  axios.get(`${backendUrl}/strains/fetch/${strain}`);
