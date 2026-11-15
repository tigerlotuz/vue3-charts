<template>
  <div class="app">
    <div class="nav">
      <router-link to="/">Line </router-link>
      <router-link to="/bar">Bar </router-link>
      <router-link to="/doughnut">Doughnut </router-link>
      <router-link to="/pie">Pie </router-link>
      <router-link to="/polar-area">Polar Area </router-link>
      <router-link to="/radar">Radar </router-link>
      <router-link to="/bubble">Bubble </router-link>
      <router-link to="/scatter">Scatter </router-link>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 v-if="$route.meta.title">
            {{ $route.meta.title }} Chart in vue with vue3-chart-v2 and chart.js
          </h2>
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap");
* {
  font-family: "Roboto", sans-serif;
}
h2 {
  padding: 3rem;
}
.app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #131313;
}
.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 2rem;
  background-color: #131313;
  box-shadow: 0 2px 4px 0 rgb(0, 0, 0);
}
.nav a {
  font-weight: bold;
  text-decoration: none;
  color: #dadada;
  padding: 0 1rem;
}
.nav a:hover,
.nav a:focus,
.nav a:active,
.nav a.router-link-exact-active {
  color: hotpink;
}
</style>
