<script setup>
import Header from '@/components/Header.vue'
</script>

<template>
  <div class="home">
    <Header />

    <div class="home__body">
      <div class="home__body__slogan">
        <h1>Hey! We know you're tired... Just join us to save more time!</h1>
        <h3 class="home__body__slogan__description">
          <p>*</p>
          Sometimes you have to be handle by a good team like us.
        </h3>
        <RouterLink to="/login">Join us!</RouterLink>
      </div>
      <div class="home__body__ilustration">
        <img src="@/assets/imgs/home.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/main.scss';
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  background-color: #eff1f3;

  &__body {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 90vh;
    width: 100%;

    &__slogan {
      width: 50%;
      display: flex;
      flex-direction: column;

      justify-content: center;
      padding: 50px;

      h1 {
        font-size: 60px;
        text-shadow: 2px 2px 2px green;
      }

      &__description {
        display: flex;
        flex-direction: row;
        align-items: center;
      }

      button {
        padding: 10px 20px;
      }
    }

    &__ilustration {
      width: 50%;

      align-self: flex-end;
      justify-self: flex-end;

      img {
      }
    }
  }
}
</style>
