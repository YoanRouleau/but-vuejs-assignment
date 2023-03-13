<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/list">List</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<style scoped>

header{
  width: 100%;
  height: 50px;
}

nav{
  width: 100%;
  height: 100%;
  background-color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
}

nav a{
  text-decoration: none;
  color: #f1f1f1;
  font-size: 24px;
  font-weight: bold;
  margin: 0 10px;
  display: block;
  position: relative;
  width: fit-content;
}

nav a::after{
  content: "";
  display: block;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2px;
  background-color: #f1f1f1;
  transform-origin: right;
  transform: scaleX(0);
  transition: transform .2s ease-in-out;
}

nav a:hover::after{
  transform-origin: left;
  transform: scaleX(1);
}

</style>
