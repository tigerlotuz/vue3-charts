<template>
  <div class="app">
    <div class="nav">
      <router-link to="/">Line </router-link> |
      <router-link to="/bar">Bar </router-link> |
      <router-link to="/doughnut">Doughnut </router-link> |
      <router-link to="/pie">Pie </router-link> |
      <router-link to="/radar">Radar </router-link> |
      <router-link to="/polar-area">Polar Area </router-link> |
      <router-link to="/bubble">Bubble </router-link> |
      <router-link to="/scatter">Scatter </router-link>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-12">
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
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav {
  padding: 30px 30px 60px;
}

.nav a {
  font-weight: bold;
  text-decoration: none;
  color: #2c3e50;
  padding: 0 1rem;
}

.router-link-exact-active {
  color: #42b983;
}
</style>
