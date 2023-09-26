import { defineStore } from "pinia";
import auth from "@/services/auth.service.js";
import router from "@/router/index.js";


export const useAuthStore = defineStore({
  id: "authStore",

  state: () => {
    return {
      token: {},
    };
  },

  getters: {
  },

  actions: {
    async login(email, pwd){
      try {
        let response = await auth.login(email, pwd);
        this.token = response.data.token;
        router.push("/home")
      } 
      catch (error) {
        console.log(error.message);
      }
    },

    async register(email, pwd){
      await auth.register(email, pwd)
      .then((res)=>{
        console.log(res);
        this.token = res.data.token;
        router.push("/home")
      })
      .catch ((error)=>{
        console.log(error);
      }) 
    }
  },
});