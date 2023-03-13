<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
 <header>
			<p id="recherche">Recherche : <input v-model="search" type="text" placeholder="Rechercher" /></p>
			<div id="titlepage">
				<h1 id="titlefirstpart">Top</h1>
				<h1 id="titlesecondpart">160</h1>
			</div>
		</header>
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

article{
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	justify-content: center;
	margin-top: 50px;
}

header{
	display: flex;
	justify-content: center;
	height: 50px;
	background-color: #1b1b1b;
	position: fixed;
	width: 100%;
	top: 0;
  left: 0;
}

.act-container{
	color: white;
	margin: 5px;
	background-color: #292929;
	width: 45vw;
	height: 60vh;
	display: flex;
	border: solid 2px #808080;
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
}

.uneimage{
	width: auto;
	height: 57vh;
	margin: 1.5vh;
	max-width: 100%;
}

.personnalinfo{
	width: 50%;
	justify-content: center;
}

.personnalinfo div{
	display: flex;
	justify-content: center;
	height: 30%;
	margin: 20px;
}

.divimage{
	justify-content: center;
	width: 50%;
	display: flex;
}

.name{
	font-weight: bold;
	font-size: 20px;
}

#recherche{
	color: white;
	position: absolute;
	top: 15px;
	left: 20px;
}
</style>