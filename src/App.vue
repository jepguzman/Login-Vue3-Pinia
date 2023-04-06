<script setup>
import { RouterLink, RouterView } from 'vue-router'

import Login from '@/views/Login.vue'
</script>

<template>
  <div class="main-wall">
    <div class="main-wall__more">
      <h1>Prepare-ya!</h1>
      <p>Where correctness comes to reality</p>
      <img src="@/assets/imgs/organica.png" alt="" />
    </div>
    <div class="main-wall__content">
      <Login />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './assets/main.scss';

.main-wall {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 10px;
  background-color: $primary-color;
  font-family: fuente;

  &__more {
    height: 600px;
    background-color: $contrast-color;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    padding-top: 50px;

    img {
      height: 500px;
    }
  }

  &__content {
  }
}
</style>
