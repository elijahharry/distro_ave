import axios from "axios";
import { backendUsers } from "../../../constants/backend";

export const signup = (form) => axios.post(`${backendUsers}signup/`, form);
export const signin = (form) => axios.post(backendUsers + "signin/", form);
