<script>
export default {
    props: ["meme"],
    methods: {
        editCard() {
            this.$emit("editMeme")
        }
    }
}
</script>

<template>
    <main>
        <div class="card">
            <p>{{ meme.name }}</p>
            <img :src="meme.imgSrc"/>
            <button @click="editCard">Edit</button>
        </div>
    </main>
</template>

<style scoped>
.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    background-color: lightgrey;
    border-radius: 20px;
    box-shadow: 5px 5px 10px gray;
}

p {
    margin-bottom: 10px;
}

button {
    padding: 5px;
    margin-top: 10px;
}
</style>