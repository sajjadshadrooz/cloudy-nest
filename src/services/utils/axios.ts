import axios from "axios";

import { apiUrl } from "@/configs/setting";

const instance = axios.create({
  baseURL: apiUrl,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
