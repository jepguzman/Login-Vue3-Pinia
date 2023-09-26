<script setup>
import Header from '@/components/Header.vue'
</script>

<template>
  <div class="landing">
    <Header />

    <div class="landing__body">
      <div class="landing__body__slogan">
        <h1>Join us to save time</h1>
        <h3 class="landing__body__slogan__description">
          <p>*</p>
          Organize better. Produce more.
        </h3>
        <button><router-link class="link-button" to="/login">Get Started!</router-link></button>
      </div>
      <div class="landing__body__ilustration">
        <img src="@/assets/imgs/land-hero.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/main.scss';
.landing {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
        color: $primary-color;
        font-size: 90px;
        font-weight: 700;
        text-shadow: -5px 5px 5px rgb(173, 173, 173);
      }

      &__description {
        font-size: 30px;
        display: flex;
        flex-direction: row;
        align-items: center;
        color: $font-color;

        p {
          color: red;
          margin-right: 10px;
        }
      }

      button {
        width: fit-content;
        padding: 15px 70px;
        background-color: $secondary-color;
        border-style: none;
        border-radius: 4px;

        .link-button {
          text-decoration: none;
          font-size: 20px;
          color: $font-color;
          font-weight: 600;
        }
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
