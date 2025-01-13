import axios from "axios";
const BASE_URL = "http://192.168.225.223:3000";

export default axios.create({
  baseURL: BASE_URL,
});
export const PrivateAxios = axios.create({
  baseURL: BASE_URL,
  // headers: { "Content-Type": "appilcation/json" },
  withCredentials: true,
});
