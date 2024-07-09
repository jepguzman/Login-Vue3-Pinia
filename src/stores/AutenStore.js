import { defineStore } from "pinia";
import router from "@/router/index.js";


export const useAutenStore = defineStore({
  id: "autenStore",

  state: () => {
    return {
      idalumno:{},
      nombre:{}
    };
  },

  getters: {
  },

  actions: {    
    /*async login(usuario,password)
    {
      try 
      {
        let url = this.url+'/login/'+usuario+'/'+password;
        //console.log(url);
        let res = await fetch(url);
        const data = await res.json();
        const result = {
          data: data
        };
        //console.log("Datos recibidos: ",result.data);
        if( result.data != null)
          {
            console.log("Datos en el IF: ",result.data['id']);
            this.userid=result.data['id'];
            this.usuario=result.data['usuario'];
          }          
          //this.usuarioDatos = result.data;       
          router.push('/usuarioGrupos/'+this.userid);
          //console.log('Ejecutó router.push');                 
      }   
      catch (error) {
        console.log(error.message);
      }
    },

    async gruposxusuario(iduser){
      try {
        let url = this.url+'/gruposxusuario/'+iduser;
        let res = await fetch(url);
        const data = await res.json();
        const result = {
          data: data,
        }
        this.usuarioGrupos = result.data;
      }   
      catch (error) {
        console.log(error.message);
      }
    },*/
  },
});
