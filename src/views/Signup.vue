<script setup></script>

<template>
  <div class="wall-page">
    <div class="signup-card">
      <div class="signup-card__input-content">
        <h1>Hello, friend!</h1>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Surname" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <input type="text" placeholder="Repeat password" />
        <div><input type="checkbox" name="" id="" />Terms and condition</div>
        <button>Create account</button>
        <span>Already have an account? <RouterLink to="/login">Sign in</RouterLink> </span>
      </div>
      <div class="signup-card__slogan">
        <div class="signup-card__slogan__glass">
          <h2>Glad to see you</h2>
          <h4>Here is where you and us get comfortable</h4>
        </div>
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
    background-color: white;

    width: 900px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    border-radius: 4px;
    padding: 20px;

    &__input-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 15px;
      padding: 20px;
      height: 100%;

      input:not([type='checkbox']) {
        height: 35px;
        width: 300px;
        border-style: none;
        border-radius: 4px;
        border: 0.5px solid black;
        padding-left: 10px;
      }

      button {
        height: 35px;
        width: 300px;
        border-radius: 4px;
        background-color: $secondary-color;
        border-style: none;
        font-family: test;
      }
    }

    &__slogan {
      display: flex;
      align-items: center;
      justify-content: center;

      &__glass {
        padding: 20px;
        border-radius: 10px;

        background: rgba(255, 255, 255, 0.1);
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        backdrop-filter: blur(5px);
        border-radius: 10px;

        color: $contrast-color;
      }
    }
  }
}
</style>
