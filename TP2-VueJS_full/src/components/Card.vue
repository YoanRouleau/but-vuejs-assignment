<script>
export default {
    props: ["meme"],
    methods: {
        editCard() {
            this.$emit("editMeme", this.meme.id)
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
    padding: 10px;
    background-color: lightgrey;
    border-radius: 20px;
}
</style>