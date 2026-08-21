import { api } from "@/lib/api";

export const messageService = {
  async getAll() {
    const res = await api.get("/messages");
    return res.data;
  },
};