<script setup>
import { useAuthStore } from '@/stores/AuthStore.js';
import { useAlumnoStore } from '@/stores/AlumnoStore.js';
import { useAutenStore } from '@/stores/AutenStore.js';
import router from "@/router/index.js";
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import { reactive } from 'vue';
import { onMounted } from 'vue';

const AuthStore = useAuthStore();
const AlumnoStore = useAlumnoStore();
const AutenStore = useAutenStore();

const buscar = reactive({
  txt: '',
});

onMounted(() => {
  console.log("Mounted ...")
  console.log(AuthStore.usuario);
  console.log('Cargando Lista de Grupos');
  AuthStore.gruposxusuario(AuthStore.userid);
  console.log(AuthStore.usuario);
})

function certificacion(nombre,id)
{
  console.log('autenticidad:',id,nombre);
  AutenStore.idalumno=id;
  AutenStore.nombre=nombre;
  router.push('/autenticidad/'+id);
}
async function txtSearch(buscar)
{
  try {
    if(buscar=='@')
    {
      buscar=AlumnoStore.listaGGG+' @';
    }
    else
    {
      buscar=AlumnoStore.listaGGG+' '+buscar.toUpperCase();
    }
    let url = AuthStore.url+'/txtBuscar/' + buscar;
    console.log(url);
    let res = await fetch(url);
    const data = await res.json();
    const result = {
      data: data,
    }
    console.log("Datos recibidos: ", result.data);
    AlumnoStore.listaGrupos = result.data;
  }
  catch (error) {
    console.log(error.message);
  }
  this.buscar.txt='';
}
</script>

<template>
  <Header />

  <div class="home">
    <ul>
      <li v-for="(item, index) in AuthStore.usuarioGrupos">
        <a @click="AlumnoStore.listaGrupo(item.generacion,item.grado,item.grupo)">
          {{ item.grado }} {{ item.grupo}}</a>
      </li>
    </ul>
    <div class="flex-container">
      <div>{{ AlumnoStore.listaGGG }}</div>
    </div>

    <div v-if="AlumnoStore.vrfLista">
      <table>
        <tr>
          <th>ID</th>
          <th>CURP</th>
          <th>NOMBRE &nbsp;
            <i class="fa fa-search"></i>&nbsp;
            <input class="home_input" type="search" v-model="buscar.txt" v-on:change="txtSearch(buscar.txt)">  
            &nbsp;<i class="fa fa-refresh" v-on:click="txtSearch('@')"></i>&nbsp;&nbsp;


          </th>
          <th>SEXO</th>
          <th>TURNO</th>
        </tr>
        <tr v-for="(item, index) in AlumnoStore.listaGrupos">
          <td >{{ index + 1 }}</td>
          <td>{{ item.curp }}</td>
          <td>{{ item.nombre }}</td>
          <td>{{ item.sexo }}</td>
          <td>{{ item.turno }}</td>
          <td><button class="home_back-btn" v-on:click="certificacion(item.nombre,item.id)"><i class="fa fa-check">Autenticidad</i></button></td>
        </tr>
      </table>
    </div>

  </div>


  <Footer />
</template>

<style lang="scss" scoped>
@import '@/assets/main.scss';

.home {
  //height: 70vh;
  //position: relative;
  //margin-top: 20px;
  margin-top: 0em;
  background-color: #eff1f3;
  font-family: testB;
  font-size: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: left;

  &__input {
    margin-left: 10px;
    height: 35px;
    width: 250px;
    border-style: none;
    padding-left: 10px;
    border-radius: 4px;
    background-color: transparent;
    font-family: test;
    font-size: 80px;

    &__back-link {
      text-decoration: none;
    }
  }

  &__back-btn {
    padding: 5px 5px;
    display: flex;
    font-family: testB;
    font-size: 32px;
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
  font-family: test;
  font-size: 18px;
  width: 100%;
  border: 1px solid #ddd;
}

/* Style table headers and table data */
th {
  text-align: left;
  text-decoration: double;
  font-size: 24px;
}

td {
  text-align: left;
  font-size: 18px;
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
.fa-refresh {
  color: rgb(20, 161, 20);
}
.fa-search {
  color: rgb(204, 95, 22);
}

ul {
  list-style-type: none;
  font-family: test;
  margin-top: 0px;
  padding: 0;
  overflow: hidden;
  background-color: #58d3e9;
}

li {
  float: left;
  font-family: test;
  font-size: 18px;
  margin-left: 30px;
}

li a {
  display: block;
  color: rgb(22, 20, 15);
  text-align: center;
  font-size: 28px;
  font-family: broaek;
  padding: 5px 5px;
  text-decoration: none;
}

li a:hover {
  background-color: #111;
  color: aliceblue;
}
</style>
