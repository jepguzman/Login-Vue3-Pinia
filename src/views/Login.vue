<script setup>
import { useAuthStore } from '@/stores/AuthStore.js'
import { reactive } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

const AuthStore = useAuthStore()

const user_data = reactive({
  usuario: 'vicky',
  clave: 'herhid03'
})
</script>

<template>
  <Header />

  <div class="main-wall">
    <div class="login-card">
      <img src="@/assets/imgs/3G-.jpg" />
      <div class="login-card__brand">
        <div class="login-card__title">Secundaria Federal</div>
        <div class="login-card__title">"Rodulfo Figueroa"</div>
        <br><br>
      </div>
      <div class="login-card__input-box">
        <img class="login-card__input-box__icon" src="@/assets/imgs/icons/user.svg" alt="" />
        <input class="login-card__input-box__input" v-model="user_data.usuario" type="text" placeholder="usuario" />
      </div>
      <div class="login-card__input-box">
        <img class="login-card__input-box__icon" src="@/assets/imgs/icons/pwd.svg" alt="" />
        <input class="login-card__input-box__input" v-model="user_data.clave" type="password" placeholder="Password" />
      </div>


      <button @click="AuthStore.login(user_data.usuario, user_data.clave)">Iniciar</button>

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
    width: 600px;
    height: 600px;
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
      font-family: super;
      font-size: 40px;
      //border-bottom: 1.5px solid black;
    }
    &__input-box {
      display: flex;
      align-items: center;
      border-bottom: 1.5px solid black;

      &__input {
        margin-left: 10px;
        height: 35px;
        width: 250px;
        border-style: none;
        padding-left: 10px;
        border-radius: 4px;
        background-color: transparent;
        font-family: test;
        font-size: 24px;

        &:focus {
          background-color: black;
          color: white;
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
    background-color: $back-color;
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
