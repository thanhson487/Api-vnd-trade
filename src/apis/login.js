import axiosClient from "./axiosClient";
import { API_LOGIN } from "../constants/api.js";
export const fetchUser = (data) => {
  axiosClient.post(API_LOGIN, data);
};
