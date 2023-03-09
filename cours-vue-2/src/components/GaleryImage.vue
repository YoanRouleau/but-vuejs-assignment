<script setup>
import { ref, computed, onMounted } from 'vue';
import Card from './Card.vue';
import EditModal from './EditModal.vue';

let searchQuery = ref("")
let dataMeme = ref([])
let passedMeme = ref(null)


const filteredItems = computed(() => {
    if (!searchQuery) {
        return dataMeme.value
      }
      return dataMeme.value.filter(item => {
        return item.name.toLowerCase().includes(searchQuery.value.toLowerCase())
      })
})

onMounted(() => {
    getData();
})

const getData = async () => {
    const res = await fetch("https://api.imgflip.com/get_memes");
        const finalRes = await res.json();
        dataMeme.value = finalRes.data.memes;
}

const editModalCallback = (item) => {
    passedMeme.value = item
}

const closeModalCallback = () => {
    passedMeme.value = null
}


</script>

<template>
    
    <input type="text" placeholder="Recheche..." v-model="searchQuery">
    <div class="image-container">
        <Card @edit-meme="$event => editModalCallback(item)" v-for="item in filteredItems" :item="item"/>
    </div>

    <EditModal :passedMeme="passedMeme" @close-meme="$event => closeModalCallback()"/>


</template>

<style scoped>

input{
    width: calc(100% - 20px);
    outline: none;
    padding: 10px;
    margin: 10px;
    border: solid 2px #000;
    border-radius: 10px;
    font-size: 20px;
}

.image-container{
    width: calc(100% - 20px);
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 10px;
}

</style>