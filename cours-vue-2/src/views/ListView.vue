<script setup>
import {data} from '../store'
import Card from '../components/Card.vue';
import draggable from 'vuedraggable'

console.log(data.memes);
</script>


<template>
    <h1>My Memes List</h1>

    <div class="container-list">

        <div class="list list-1">
            <h2>List 1</h2>
            <div v-for="item in data.memes">
                <img :src=item.imgSrc>
            </div>
        </div>
        
        <div class="list list-2">
            <h2>List 2</h2>
        </div>

    </div>
</template>


<style scoped>
    h1{
        text-align: center;
    }

    .container-list{
        display: flex;
        width: fit-content;
        margin: 0 auto;
    }

    .list{
        max-width: 300px;
    }
    .list img{
        max-width: 300px;
    }


</style>