import axios from "axios";
import { toast } from "react-toastify";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const api = axios.create({
  baseURL: `${BACKEND_URL}/api/v1`,
});

// Attach token automatically to all requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      toast.error("Session expired. Please login again.");

      // Redirect to login page
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default api;
