import { defineStore } from "pinia";
import axios from "axios";
import router from "@/router/index.js";

import { fetchWrapper } from '@/helpers/fetch-wrapper.js';

const baseUrl = `http://127.0.0.1:5173/users`;

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
    /* login(email, pwd) {
        axios.post("https://demo.treblle.com/api/v1/auth/login", {
          email: email,
          password: pwd,
        })
        .then(() => {})
        .catch(()=> {});
    }, */

    async login(username, password) {
      try {
          const user = await fetchWrapper.post(`${baseUrl}/authenticate`, { username, password });    
          // update pinia state
          this.user = user;

          // store user details and jwt in local storage to keep user logged in between page refreshes
          localStorage.setItem('user', JSON.stringify(user));

      } catch (error) {
           console.log(error);
      }
    },

    async register(user) {
      await fetchWrapper.post(`${baseUrl}/register`, user);
    },

  },
});