import { api } from "@/lib/api";

export const customerService = {
  async getAll() {
    const res = await api.get("/customers");
    return res.data;
  },

  async getById(id: string) {
    const res = await api.get(`/customers/${id}`);
    return res.data;
  },
};