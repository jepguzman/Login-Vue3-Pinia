<script setup></script>

<template>
  <div class="header">
    <div class="header__logo">
      <img src="@/assets/imgs/test.png" alt="" />
    </div>

    <div class="header__routes">
      <RouterLink to="/login">Pricing</RouterLink>
      <RouterLink to="">Support</RouterLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/main.scss';
.header {
  background-color: $primary-color;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 10vh;
  width: 100%;

  &__logo {
    img {
      width: 70px;
      height: 50px;
    }
  }

  &__routes {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-inline: 30px;
    gap: 10px;
  }
}
</style>
