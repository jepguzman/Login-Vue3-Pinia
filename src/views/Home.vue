<script setup>
import { useAuthStore } from '@/stores/AuthStore.js'
const AuthStore = useAuthStore()
</script>

<template>
  <div class="home">
    <h2>
      Welcome <span class="home__title--highligted">{{ AuthStore.token }}</span>
    </h2>
    <router-link to="/" class="home__back-link">
      <div class="home__back-btn">Go back</div>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/main.scss';
.home {
  height: 100vh;
  background-color: #eff1f3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__title--highligted {
    background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
    background-repeat: no-repeat;
    background-size: 100% 0.2em;
    background-position: 0 88%;
    transition: background-size 0.25s ease-in;

    &:hover {
      background-size: 100% 88%;
    }
  }

  &__back-link {
    text-decoration: none;
  }

  &__back-btn {
    padding: 10px 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    color: white;
    border-radius: 5px;
    transition: 1s;

    &:hover {
      transition: 0.5s;
      transform: scale(1.05);
    }
  }
}
</style>
