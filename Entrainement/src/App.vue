<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h1>FlightDB</h1>
    <nav>
      <RouterLink class="navlinks" to="/">Home</RouterLink>
      <RouterLink class="navlinks" to="/about">About</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>

<style scoped>
header {
  height: 20vh;
  background: url(./assets/img/plane-logo.png) no-repeat center center;
  background-size: cover;
}

h1 {
  background-color: rgba(255, 255, 255, 0.5);
  width: fit-content;
  align-self: center;
  text-align: center;
  padding: 2vh;
  border: 1px solid red;
}

.navlinks {
  text-decoration: none;
  color: black;
}
</style>