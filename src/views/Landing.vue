<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <Header />
  <div class="landing">
    <div class="landing__body">
      <div class="landing__body__slogan">
        <h1>Cystem's</h1>
        <h3 class="landing__body__slogan__description"></h3>
        <button><router-link class="landing__routes__links" to="/login">Iniciar sesión!</router-link></button>
      </div>
    </div>
  </div>
  <Footer />
</template>

<style lang="scss" scoped>
@import '@/assets/main.scss';
.landing {
  height: 30vh;
  margin-top: 1.5em;
  background-color: #eff1f3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:left;
}
</style>


