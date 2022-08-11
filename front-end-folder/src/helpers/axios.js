import axios from "axios";
import { api } from "../urlConfig";

const token = window.localStorage.getItem("token");

const axiosInstance = axios.create({
  baseURL: api,
  headers: {
    Authorization: token ? `Bearer ${token}` : " ",
  },
  timeout: 1000,
});

export default axiosInstance;
