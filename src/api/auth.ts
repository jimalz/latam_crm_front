import ky from "ky";
import type { LoginRequest, LoginResponse } from "@/types/auth.model";

const api = ky.create({
  prefixUrl: import.meta.env.VITE_API_URL, // http://localhost:3000/
  headers: {
    "Content-Type": "application/json",
  },
});

export const authApi = {
  login: (data: LoginRequest): Promise<LoginResponse> =>
    api.post("auth/login", { json: data }).json(),
};
