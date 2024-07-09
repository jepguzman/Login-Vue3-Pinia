<script setup>
import { useAuthStore } from '@/stores/AuthStore.js'
import { useAlumnoStore } from '@/stores/AlumnoStore.js'
import { useAutenStore } from '@/stores/AutenStore.js'
import { reactive } from 'vue'
import router from "@/router/index.js";
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

const AuthStore = useAuthStore();
const AlumnoStore = useAlumnoStore();
const AutenStore = useAutenStore();

const aut = reactive({
  idalumno: AutenStore.idalumno,
  nombre: AutenStore.nombre,
  periodo: 'AGOSTO 2018 A JULIO 2021',
  expedicion:'',
  folio:'',
  extdia:'',
  extmes:'',
  extanio:''
})

console.log(AutenStore.idalumno);

async function autenticidad(aut)
{
    //console.log(this.aut.idalumno);console.log(this.aut.folio);
    this.aut.folio=aut.folio;
    this.aut.expedicion=aut.expedicion.toUpperCase();
    this.aut.periodo=aut.periodo.toUpperCase();
    this.aut.extdia=aut.extdia.toUpperCase();
    this.aut.extmes=aut.extmes.toUpperCase();
    this.aut.extanio=aut.extanio.toUpperCase();
    try 
      {
        let url = AuthStore.url+'/autenticidad/'+this.aut.idalumno+'/'+this.aut.nombre+'/'+this.aut.folio+'/'+this.aut.periodo+'/'+this.aut.expedicion+'/'+this.aut.extdia+'/'+this.aut.extmes+'/'+this.aut.extanio;
        console.log('URL: ',url);
        let res = await fetch(url);
        router.push('/usuarioGrupos/'+this.userid);                 
      }   
      catch (error) {
        console.log(error.message);
      }
}


</script>



<template>
  <Header />

  <div class="main-wall">
    <div class="login-card">
      <div class="login-card__brand">
        <div class="login-card__title">CONSTANCIA DE AUTENTICIDAD</div>
        <br><br>
      </div>
      <div>
        <h2>[{{aut.idalumno}}] {{ aut.nombre }}</h2>
      </div>
      <div>
        <h3>PERIODO</h3>
      </div>
      <div class="login-card__input-box">
        <input class="login-card__input-box__input uppercase-text" v-model="aut.periodo" type="text" placeholder="periodo" />
      </div>
      <div>
        <h3>FECHA DE EXPEDICIÓN</h3>
      </div>
      <div class="login-card__input-box">
        <input class="login-card__input-box__input" v-model="aut.expedicion" type="text" placeholder="fecha" />
      </div>
      <div>
        <h3>FOLIO</h3>
      </div>
      <div class="login-card__input-box">
        <input class="login-card__input-box__input" v-model="aut.folio" type="text" placeholder="folio" />
      </div>
      <div>
        <h3>FECHA QUE SE EXTIENDE</h3>
      </div>
      <div class="login-card__input-box">
        <input class="login-card__input-box__fecha" v-model="aut.extdia" type="text" placeholder="dia" />
        <input class="login-card__input-box__fecha" v-model="aut.extmes" type="text" placeholder="mes" />
        <input class="login-card__input-box__fecha" v-model="aut.extanio" type="text" placeholder="anio" />
      </div>
      <div>
        <button @click.prevent="autenticidad(aut)">Grabar</button>
      </div>
      
    </div>
  </div>

  <Footer />
</template>

<style lang="scss" scoped>
@import '@/assets/main.scss';

.main-wall {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 70vh;
  gap: 10px;
  background-color: $back-color;
  //background-color: #eff1f3;

  .login-card {
    position: flex;
    top: 200px;
    left: 450px;
    width: 800px;
    height: 670px;
    background-color: $card-color;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    gap: 10px;

    &__title {
      display: flex;
      align-items: center;
      //font-family: super;
      font-size: 40px;
      //border-bottom: 1.5px solid black;
    }
    &__input-box {
      display: flex;
      align-items: center;
      border-bottom: 1.5px solid black;

      &__fecha {
        margin-left: 10px;
        height: 35px;
        width: 200px;
        border-style: none;
        padding-left: 10px;
        border-radius: 4px;
        background-color: transparent;
        font-family: test;
        font-size: 18px;
        &:focus {
          background-color: rgb(236, 127, 222);
          color: rgb(15, 14, 14);
        }
        &::placeholder {
          color: black;
        }
      }

      &__input {
        margin-left: 10px;
        height: 35px;
        width: 600px;
        border-style: none;
        padding-left: 10px;
        border-radius: 4px;
        background-color: transparent;
        font-family: test;
        font-size: 18px;
        &:focus {
          background-color: rgb(236, 127, 222);
          color: rgb(15, 14, 14);
        }
        &::placeholder {
          color: black;
        }
      }
    }
  }

  button {
    height: 75px;
    width: 300px;
    border-radius: 4px;
    background-color: rgb(236, 127, 222);
    border-style: none;
    font-family: broaek;
    font-weight: 700;
    font-size: 64px;
    cursor: pointer;

    &:hover {
      background-color: $primary-color;
      color: $contrast-color;
    }

    span {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 5px;

      .highlighted {
        color: $contrast-color;
        text-decoration: none;

        &:hover {
          border-bottom: 1px solid $primary-color;
        }
      }
    }
  }
}

</style>
