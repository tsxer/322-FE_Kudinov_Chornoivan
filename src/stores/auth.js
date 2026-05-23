import { defineStore } from "pinia";
import api from "../api/index.js";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    loading: false,
    error: null,
  }),

  getters: {
    isLoggedIn: (state) => !!state.user,
    userRole: (state) => state.user?.role,
  },

  actions: {
    async login(email, password) {
      this.loading = true;
      this.error = null;
      try {
        const response = await api.post("/auth/login", { email, password });
        this.user = response.data;
        return true;
      } catch (e) {
        this.error = e.response?.data?.detail || "Login failed";
        return false;
      } finally {
        this.loading = false;
      }
    },

    async register(email, password, role) {
      this.loading = true;
      this.error = null;
      try {
        const response = await api.post("/auth/register", {
          email,
          password,
          role,
        });
        this.user = response.data;
        return true;
      } catch (e) {
        this.error = e.response?.data?.detail || "Register failed";
        return false;
      } finally {
        this.loading = false;
      }
    },

    async fetchMe() {
      try {
        const response = await api.get("/auth/me");
        this.user = response.data;
      } catch (e) {
        this.user = null;
      }
    },

    async logout() {
      await api.post("/auth/logout");
      this.user = null;
    },
  },
});
