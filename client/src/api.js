import axios from "axios";
import { logout } from "./shared/utils/auth";

const apiClient = axios.create({
  baseURL: "http://localhost:5001/api/auth/",
  timeout: 1000,
});

apiClient.interceptors.request.use(
  (config) => {
    const userDetails = localStorage.getItem("user");
    if (userDetails) {
      const token = JSON.parse(userDetails).token;
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const login = async (data) => {
  try {
    return await apiClient.post("login", data);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

export const register = async (data) => {
  try {
    return await apiClient.post("register", data);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

// secure routes

const checkResponseCode = (exception) => {
  const responseCode = exception?.response?.status;

  if (responseCode) {
    (responseCode === 401 || responseCode === 403) && logout();
  }
};
