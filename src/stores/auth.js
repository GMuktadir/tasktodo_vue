
import { defineStore } from "pinia";
import http from "@/http/http.js";
import { toast } from "vue3-toastify";
import router from "@/router";

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

        if(response.data.status === 'success'){
            toast.success(response.data.message);

            this.user =response?.data?.data?.user;
            this.access_token = response?.data?.data?.access_token;
            
            localStorage.setItem("access_token", this.access_token);
            localStorage.setItem("user", JSON.stringify(this.user)); // object to string

            // Redirect to Dashboard or another page if needed
         
            setTimeout(() => {
                router.push('/admin/dashboard')
            },3000);
           
        }
      } catch (error) {
        console.log(error);
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