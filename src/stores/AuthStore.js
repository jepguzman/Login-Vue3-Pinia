import { defineStore } from "pinia";
import axios from "axios";
import router from "@/router/index.js";

export const useAuthStore = defineStore({
  id: "authStore",

  state: () => {
    return {
      user: {},
    };
  },

  getters: {
  },

  actions: {
    login(email, pwd) {
        axios.post("https://demo.treblle.com/api/v1/auth/login", {
          email: email,
          password: pwd,
        })
        .then(() => {})
        .catch(()=> {});
    },

  },
});