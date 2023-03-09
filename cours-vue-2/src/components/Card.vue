<script setup>
    const props = defineProps({
        item: Object
    })

    const emit = defineEmits(['editMeme'])

    const editCard = () => {
        emit('editMeme')
    }

</script>

<template>
    <div @click="editCard" class="item-image">
        <h2>{{ item.name }}</h2>
        <img :src="item.url">
    </div>

</template>

<style scoped>

.image-container .item-image{
    width: fit-content;
    padding: 10px;
    border: solid 2px #000;
    border-radius: 5px;
    margin: 10px;
    box-shadow: -5px 5px 0 #333;
}

.image-container .item-image img{
    max-width: 300px;
    height: auto;
}

</style>