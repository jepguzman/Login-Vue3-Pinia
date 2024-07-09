<script setup>
import { useAuthStore } from '@/stores/AuthStore.js'
import { useAlumnoStore } from '@/stores/AlumnoStore.js'
import { onMounted } from 'vue';
const AuthStore = useAuthStore()
const AlumnoStore = useAlumnoStore()

onMounted(() => {
  console.log("Mounted ...")
  console.log('Cargando Lista de Grupos');
  AuthStore.gruposxusuario(2);
  console.log(AuthStore.usuario);
})

</script>

<template>
  <div class="home">
    <h2>
      Bienvenido <span class="home__title--highligted">{{ AuthStore.usuario }}</span>
    </h2>

    <ul>
      <li v-for="item in AuthStore.usuarioGrupos" class="home__back-link">
        <router-link to="" v-slot="{ navigate }">
          <span @click="AlumnoStore.listaGrupo(item.generacion,item.grado,item.grupo)" role="link">{{item.grupo}}</span>
        </router-link>
      </li>
    </ul>

    <!--div style="overflow-x:auto;"   <i class="fa fa-remove"></i> <i class="fa fa-check"></i> -->
    <div>
      <h1>{{ AlumnoStore.listaGGG }}</h1>
      <table>
        <tr>
          <th>ID</th>
          <th>CURP</th>
          <th>NOMBRE</th>
          <th>SEXO</th>
          <th>TURNO</th>
        </tr>
        <tr v-for="(item, index) in AlumnoStore.listaGrupos">
          <td>[{{ index + 1 }}]</td>
          <td>{{ item.curp }}</td>
          <td>{{ item.paterno }} {{ item.materno }} {{ item.nombres }}</td>
          <td>{{ item.sexo }}</td>
          <td>{{ item.turno }}</td>
          <td><i class="fa fa-check">Editar</i></td>
        </tr>
      </table>
    </div>
    <router-link to="/home" class="home__back-link">
      <div class="home__back-btn"><i class="fa fa-home"> </i>Inicio</div>
    </router-link>
  </div>

</template>

<style lang="scss" scoped>
@import '@/assets/main.scss';

.home {
  height: 97vh;
  margin-top: 1.5em;
  background-color: #eff1f3;
  display: flex;
  flex-direction: column;
  align-items: center;
  //justify-content: center;

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
    background-color: rgb(50, 74, 214);
    color: white;
    border-radius: 5px;
    transition: 1s;

    &:hover {
      transition: 0.5s;
      transform: scale(1.05);
    }
  }
}

/* Style the table */
table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #ddd;
}

/* Style table headers and table data */
th {
  text-align: left;
  text-decoration: double;
  text-padding: 16px;
  font-size: 20px;
}

td {
  text-align: left;
  padding: 16px;
}

th:first-child,
td:first-child {
  text-align: left;
}

/* Zebra-striped table rows */
tr:nth-child(even) {
  background-color: #04cca154
}

.fa-check {
  color: green;
}

.fa-remove {
  color: red;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover {
  background-color: #111;
}
</style>
