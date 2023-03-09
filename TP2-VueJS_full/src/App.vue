<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <h1>The Memes Warehouse</h1>
      <nav>
        <RouterLink to="/" class="navlinks">Home</RouterLink>
        <RouterLink to="/about" class="navlinks">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView id="maincontent"/>
</template>

<style scoped>

</style>