<script setup>
import { ref, computed, onMounted } from 'vue';
import Card from './Card.vue';
import EditModal from './EditModal.vue';
let searchQuery = ref("")
let data = ref([])
let passedMemeId = ref(null)

const filteredItems = computed(() => {
    if (!searchQuery) {
        return data.value
      }
      return data.value.filter(item => {
        return item.name.toLowerCase().includes(searchQuery.value.toLowerCase())
      })
})

onMounted(() => {
    getData();
})

const getData = async () => {
    const res = await fetch("https://api.imgflip.com/get_memes");
        const finalRes = await res.json();
        data.value = finalRes.data.memes;
}

const editModalCallback = (id) => {
    passedMemeId.value = id
}

const closeModalCallback = () => {
    passedMemeId.value = null
}


</script>

<template>
    
    <input type="text" placeholder="Recheche..." v-model="searchQuery">

    <div class="image-container">
        <Card @edit-meme="$event => editModalCallback(item.id)" v-for="item in filteredItems" :item="item"/>
    </div>

    <EditModal :passedMemeId="passedMemeId" @close-meme="$event => closeModalCallback()"/>


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