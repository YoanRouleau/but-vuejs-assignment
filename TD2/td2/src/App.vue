<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
      <div id="titlepage" @click="this.$router.push({ path: `/` })">
        <h1 id="titlefirstpart">Vue</h1>
        <h1 id="titlesecondpart">hub</h1>
      </div>
      <div id="buttons">
        <div class="routerbutton" id="addbutton" @click="this.$router.push({ path: `/add` })"><p>Ajouter</p></div>
        <div class="routerbutton" id="aboutbutton" @click="this.$router.push({ path: `/about` })"><p>À propos</p></div>
      </div>
  </header>
  
  <RouterView />
</template>

<style>

#buttons{
  display: flex;
  height: 80%;
  width: 30%;
  right: 30px;
  top:10%;
  background-color: white;
  position: absolute;
  justify-content: center;
}

.routerbutton{
  height: 100%;
  width: 15%;
  border: solid 2px black;
  justify-content: center;
  display: flex;
}



header{
	display: flex;
	justify-content: center;
	height: 50px;
	background-color: #1b1b1b;
	position: fixed;
	width: 100vw;
	top: 0;
}

#titlepage{
	
	display: inline-flex;
  cursor: pointer;
}

#titlefirstpart{
	color: white;
	line-height: 50px;
}

#titlesecondpart{
	background-color: #FFA31A;
	line-height: 46px;
	border-radius: 5px;
	margin: 5px;
}





</style>
