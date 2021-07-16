import axios from "axios";
import { buyersContactUrl as buyersUrl } from "../../../constants/backend";

export const sendBuyersContact = (form) => axios.post(buyersUrl, form);
