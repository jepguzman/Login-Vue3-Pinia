<script setup>
import { useAuthStore } from '@/stores/AuthStore.js'
import { reactive } from 'vue'

const AuthStore = useAuthStore()

let user_data = reactive({
  email: 'eve.holt@reqres.in',
  pwd: 'pistol',
  repeat_pwd: 'pistol'
})
</script>

<template>
  <div class="wall-page">
    <div class="signup-card">
      <div class="signup-card__input-content">
        <img src="@/assets/imgs/logo/ya-logo.svg" alt="prepare-ya logo" />
        <h1>Hello, friend!</h1>
        <h4>This is where we get comfortable</h4>
        <div class="signup-card__input-content__input-box">
          <img
            class="signup-card__input-content__input-box__icon"
            src="@/assets/imgs/icons/user.svg"
            alt=""
          />
          <input
            class="signup-card__input-content__input-box__input"
            v-model="user_data.email"
            type="text"
            placeholder="Email"
          />
        </div>
        <div class="signup-card__input-content__input-box">
          <img
            class="signup-card__input-content__input-box__icon"
            src="@/assets/imgs/icons/pwd.svg"
            alt=""
          />
          <input
            class="signup-card__input-content__input-box__input"
            v-model="user_data.pwd"
            type="password"
            placeholder="Password"
          />
        </div>
        <div class="signup-card__input-content__input-box">
          <img
            class="signup-card__input-content__input-box__icon"
            src="@/assets/imgs/icons/re-pwd.svg"
            alt=""
          />
          <input
            class="signup-card__input-content__input-box__input"
            v-model="user_data.repeat_pwd"
            type="password"
            placeholder="Repeat password"
          />
        </div>
        <div><input type="checkbox" name="" id="" />Terms and condition</div>
        <button v-on:click="AuthStore.register(user_data.email, user_data.pwd)">
          Create account
        </button>
        <span
          >Already have an account?
          <router-link class="highlighted" to="/login">Sign in</router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/main.scss';
.wall-page {
  background-color: $primary-color;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  .signup-card {
    background-image: url('@/assets/imgs/wave.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-color: $secondary-color;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    border-radius: 10px;
    padding: 20px;

    &__input-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 15px;
      padding: 50px;
      height: 100%;

      &__input-box {
        display: flex;
        align-items: center;
        border-bottom: 1.5px solid black;
        margin-block: 5px;

        &__input {
          margin-left: 10px;
          height: 35px;
          width: 250px;
          border-style: none;
          padding-left: 10px;
          border-radius: 4px;
          background-color: transparent;
          font-family: test;

          &:focus {
            background-color: black;
            color: white;
          }

          &::placeholder {
            color: black;
          }
        }
      }
      button {
        height: 35px;
        width: 300px;
        border-radius: 4px;
        background-color: $primary-color;
        border-style: none;
        font-family: test;
        color: $contrast-color;
        cursor: pointer;
      }
      .highlighted {
        color: $contrast-color;
        text-decoration: none;

        &:hover {
          border-bottom: 1px solid $contrast-color;
        }
      }
    }
  }
}
</style>
