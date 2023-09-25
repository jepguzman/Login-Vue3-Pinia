import { defineStore } from "pinia";
import auth from "@/helpers/auth.service.js";


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
        console.log(response);
       /*  router.push("/users") */
      } 
      catch (error) {
        console.log(error.message);
      }
    },
    /* login(email, pwd) {
        axios.post("https://demo.treblle.com/api/v1/auth/login", {
          email: email,
          password: pwd,
        })
        .then(() => {})
        .catch(()=> {});
    }, */
  },
});