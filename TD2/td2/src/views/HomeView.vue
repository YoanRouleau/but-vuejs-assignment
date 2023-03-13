<script>
import Card from '../components/Card.vue'
import {data} from '../store.js'

export default {
  data(){
		//properties
		return{
			search: ""
		}
	},
  components:{
    Card
  },
  methods:{
	  lookStarCallback(starId){
		  this.passedStarId = starId
	  },
	  closeMemeCallback() {
		  this.passedStarId = null
	  }
  },
  computed: 
  {
    filteredAct(){
			return data.actress.filter(b => b.data.Name.toUpperCase().includes(this.search.toUpperCase()) || b.data.BirthDate.includes(this.search) || b.data.KnownFor.toUpperCase().includes(this.search.toUpperCase()))
		}
  },
  mounted(){

  }
}

</script>

<template>
  
  <main>
    <p id="recherche">Recherche : <input v-model="search" type="text" placeholder="Rechercher" /></p>
    <article id="cards-container">
      <Card v-for="obj in filteredAct" :data="obj" @look-star="$event => lookStarCallback(obj.Const)"/>
    </article>
    {{filteredAct}}
  </main>
</template>

<style>
*{
	margin: 0;
	padding: 0;
	font-family: sans-serif;
}

body {
	background-color: #202020;
}

#cards-container{
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	justify-content: center;
	margin-top: 50px;
}

/*
header{
	display: flex;
	justify-content: center;
	height: 50px;
	background-color: #1b1b1b;
	position: fixed;
	width: 100%;
	top: 0;
}

#titlepage{
	
	display: inline-flex;
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
}*/

#recherche{
	color: white;
	position: absolute;
	top: 15px;
	left: 20px;
  position: fixed;
}
</style>