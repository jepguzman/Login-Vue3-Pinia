<script setup>
import { useAuthStore } from '@/stores/AuthStore.js'
import { reactive } from 'vue'
const AuthStore = useAuthStore()

const user_data = reactive({
  email: 'eve.holt@reqres.in',
  pwd: 'cityslicka'
})
</script>

<template>
  <div class="main-wall">
    <!-- <div class="main-wall__more">
      <div class="main-wall__more__brand">
        <h1>Prepare-ya!</h1>
        <img src="@/assets/imgs/logo/ya-logo.svg" alt="" />
      </div>

      <p>Where correctness comes to reality</p>
      <img class="main-wall__more__ilustration" src="@/assets/imgs/organica.png" alt="" />
    </div> -->
    <div class="login-card">
      <div class="login-card__brand">
        <h1>Prepare-ya!</h1>
        <img src="@/assets/imgs/logo/ya-logo.svg" alt="" />
      </div>

      <h2 class="login-card__title">Connect to your account</h2>
      <input v-model="user_data.email" class="login-card__input" type="text" placeholder="Email" />
      <input
        v-model="user_data.pwd"
        class="login-card__input"
        type="password"
        placeholder="Password"
      />
      <div class="login-card__reminders">
        <div class="login-card__reminders__remember-pwd">
          <input type="checkbox" name="" id="" />
          <p>Remember password</p>
        </div>
        <p>Forgot password?</p>
      </div>

      <button v-on:click="AuthStore.login(user_data.email, user_data.pwd)">Get inside!</button>
      <span
        >Dont have an account?
        <RouterLink class="highlighted" to="/signup">Create one!</RouterLink></span
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/main.scss';

.main-wall {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 10px;
  background-color: $primary-color;

  /* &__more {
    height: 600px;
    background-color: $contrast-color;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    padding-top: 50px;

    &__brand {
      display: flex;
      flex-direction: row;
      align-items: center;

      img {
        height: 60px;
        width: 60px;
        margin-left: 20px;
      }
    }

    &__ilustration {
      height: 500px;
    }
  } */

  .login-card {
    width: 400px;
    height: 600px;
    background-color: $secondary-color;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border-radius: 4px;

    gap: 20px;

    &__brand {
      display: flex;
      flex-direction: row;
      align-items: center;

      img {
        height: 60px;
        width: 60px;
        margin-left: 20px;
      }
    }

    &__title {
    }

    &__reminders {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      font-size: 13px;

      &__remember-pwd {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
      }

      & > p:hover {
        color: $contrast-color;
        border-bottom: 1px solid $contrast-color;
      }
    }

    &__input {
      height: 35px;
      width: 300px;
      border-style: none;
      padding-left: 10px;
      border-radius: 4px;
      border: 1px solid black;
      font-family: test;
    }

    button {
      height: 35px;
      width: 300px;
      border-radius: 4px;
      background-color: $contrast-color;
      border-style: none;
      font-family: test;
      font-weight: 700;

      &:hover {
        background-color: $primary-color;
        color: $contrast-color;
      }
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
