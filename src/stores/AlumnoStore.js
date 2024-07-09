import { defineStore } from "pinia";
import router from "@/router/index.js";
import { useAuthStore } from '@/stores/AuthStore.js';

const AuthStore = useAuthStore();

export const useAlumnoStore = defineStore({
  id: "AlumnoStore",

  state: () => {
    return {
      listaGrupos:[],
      listaGGG : '',
      vrfLista:false
    };
  },

  getters: {
  },

  actions: {
    async listaGrupo(generacion,grado,grupo){
      try {
        let url = AuthStore.url+'/listagrupo/'+generacion+'/'+grado+'/'+grupo;
        let res = await fetch(url);
        const data = await res.json();
        const result = {
          data: data,
        }
        this.listaGrupos = result.data;
        this.vrfLista=true;
        this.listaGGG = generacion+' '+grado+' '+grupo;
        console.log("Lista Grupo:",url,"Verificado:",this.vrfLista,this.listaGGG,this.listaGrupos);
      }   
      catch (error) {
        console.log(error.message);
      }
    },
    test() {
        console.log("test")
      }    
  },
});