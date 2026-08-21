import { api } from "@/lib/api";

export const campaignService = {
  async getAll() {
    const res = await api.get("/campaigns");
    return res.data;
  },
};