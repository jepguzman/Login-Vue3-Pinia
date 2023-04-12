<script setup></script>

<template>
  <div class="header">
    <div class="header__logo">
      <img src="@/assets/imgs/Ya.png" alt="" />
    </div>

    <div class="header__routes">
      <RouterLink class="header__routes__links" to="">Support</RouterLink>
      <RouterLink class="header__routes__links" to="/login">Pricing</RouterLink>
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
    margin-left: 20px;
    img {
      width: 70px;
      height: 70px;
    }
  }

  &__routes {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-inline: 30px;
    gap: 10px;

    &__links {
      text-decoration: none;
      font-size: 20px;
      border: 1px solid white;
      padding: 7px 14px;
      border-radius: 4px;
      color: $contrast-color;

      &:last-child {
        border: 1px solid $secondary-color;
        color: $secondary-color;
      }
    }

    &__links:hover {
      background-color: $contrast-color;
      color: $primary-color;

      &:last-child {
        background-color: $secondary-color;
        color: $primary-color;
      }
    }
  }
}
</style>
