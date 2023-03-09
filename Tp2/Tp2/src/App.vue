<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HomePage from './views/HomePage.vue'
</script>

<template>
  <header>
    <h1>Le site des memes</h1>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
      <nav>
        <RouterLink to="/about">About</RouterLink>
      </nav>
      <RouterLink to="/addCard"> New Meme</RouterLink>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header{
  padding: 60px;
  background: #1abc9c;
  color: white;
  font-size: 30px;
  
}
body {
  font-family: Arial;
  margin: 0;
}
</style>
