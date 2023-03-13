<script>
    export default {
        props: ['data'],
        emits: ['lookStar'],
        methods: {
            lookStar(){
                console.log(this.data.data.Name)
                this.$emit('lookStar', this.data.data.Const)
            }
        },
        mounted(){
            
        }
    }
</script>

<template>
    <div class="card" @click="lookStar">
        <!--<div class="card">
        <h2>{{data.data.Name}}</h2>
            <img class="imagecard" :src='data.url'>
        </div>-->
        <!--<p>{{ chut }}</p>-->
        <div class="personnalinfo">
            <!--<p>{{act.data.Position}}</p>-->
            <div><p class="name">{{this.data.data.Name}}</p></div>
            <div><p class="birth">{{this.data.data.BirthDate}}</p></div>
            <div><p class="known"> She's known for : {{this.data.data.KnownFor}}</p></div>
        </div>
        <div class="divimage">
            <img :src="this.data.url" alt="No image" class="uneimage">
        </div>
    </div>
</template>

<style>
.imagecard{
    height: 60vh;
}

.card{
	color: white;
	margin: 5px;
	background-color: #292929;
	width: 45vw;
	height: 60vh;
	display: flex;
	border: solid 2px #808080;
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
</style>