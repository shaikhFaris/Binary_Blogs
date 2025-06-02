import axios from "axios";
const BASE_URL = "https://binary-blogs-backend.onrender.com";

export default axios.create({
  baseURL: BASE_URL,
});
export const PrivateAxios = axios.create({
  baseURL: BASE_URL,
  // headers: { "Content-Type": "appilcation/json" },
  withCredentials: true, // send cookies automatically in each req
});
