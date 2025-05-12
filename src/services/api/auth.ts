import { LoginAPIInterface, RegisterAPIInterface } from "../types/auth";
import axios from "../utils/axios";

export const currentUserAPI = async () => {
  const res = await axios.get("/user");
  return res.data;
};

export const loginAPI = async (data: Partial<LoginAPIInterface>) => {
  const res = await axios.post("/users/login", { user: data });
  return res.data;
};

export const registerAPI = async (data: Partial<RegisterAPIInterface>) => {
  const res = await axios.post("/users", { user: data });
  return res.data;
};
