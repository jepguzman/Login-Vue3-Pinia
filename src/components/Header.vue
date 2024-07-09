<script setup></script>

<template>
  <div class="header">
      <img src="/src/assets/imgs/logoSEP.png" alt="Logo SEP" />
      <img src="/src/assets/imgs/logoNacional.png" alt="Logo Nacional">
      <img src="/src/assets/imgs/logoSecundaria.png" alt="Logo Secundaria">
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/main.scss';

.header {
  background-color: $primary-white;
  display: flex;
  flex-direction: row;
  align-items: center;
  //justify-content: center;
  justify-content: space-around;
  height: 10vh;
  width: 80%;
  margin-top: 50px;
  margin-bottom: 20px;
  margin-right: 150px;
  margin-left: 150px;
}

</style>
