import { defineStore } from "pinia";
import http from "@/http/http.js";
import { toast } from "vue3-toastify";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    email: '',
    access_token: localStorage.getItem('access_token') || null,
    sending: false,
    message:'',
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
  }),
  getters: {
    isAuthenticated: (state) => state.access_token ? true : false,
    // getUser: (state) => state.user,
  },
  actions: {
    async login(credentials) {
        this.sending = true;
      try {
        const response = await http.post("/auth/login", credentials);
        console.log(response);
        // const { user, token } = response.data;
        // this.user = user;
        // this.token = token;
        // localStorage.setItem("access_token", token);
        // localStorage.setItem("user", JSON.stringify(user));
      } catch (error) {
        // console.error("Login failed:", error);
        const message = error.response?.data?.message
        toast.error(message);
      } finally {
        this.sending = false;
      }
    },
    // logout() {
    //   this.user = null;
    //   this.token = null;
    //   localStorage.removeItem("access_token");
    //   localStorage.removeItem("user");
    // },
  },
});