import axios, { AxiosError } from "axios";
import { authService } from "@/services/authService";

export const api = axios.create({
  baseURL: "http://localhost:3000",
});

// Attach token automatically
api.interceptors.request.use((config) => {
  const token = authService.getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auto‑logout on 401
api.interceptors.response.use(
  (res) => res,
  (err: AxiosError) => {
    if (err.response?.status === 401) {
      authService.logout();
      window.location.href = "/auth/login";
    }
    return Promise.reject(err);
  }
);
