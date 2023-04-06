<script setup></script>

<template>
  <div class="login-card">
    <h2 class="login-card__title">Connect to your account</h2>
    <input class="login-card__input" type="text" placeholder="Email" />
    <input class="login-card__input" type="text" placeholder="Password" />
    <div class="login-card__reminders">
      <div class="login-card__reminders__remember-pwd">
        <input type="checkbox" name="" id="" />
        <p>Remember password</p>
      </div>

      <p>Forgot password?</p>
    </div>

    <button>Get inside!</button>
    <span
      >Haven't you join us!
      <p>Subscribe now!</p></span
    >
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/main.scss';
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

  &__title {
    font-family: fuente;
  }

  &__reminders {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    &__remember-pwd {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
  }

  &__input {
    height: 30px;
    width: 300px;
    border-style: none;
    padding: 5px;
    border-radius: 4px;
  }

  button {
    height: 30px;
    width: 300px;
    border-radius: 4px;
    background-color: white;
    border-style: none;
  }

  span {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 5px;

    p {
      color: blue;
    }
  }
}
</style>
