<script>
    import EditModal from "./EditModal.vue";

    export default {
        components: {
            EditModal

        },        
        props: [
            'data'
        ],
        emits: [
            'editMeme'
        ],
        methods:{
            editCard(){
                this.$emit('editMeme',this.data.id);
            }
        },
        mounted(){
        }
    }
</script>

<template>

<div id="card">
    <h2>{{data.name}}</h2>
    <img :src="data.imgSrc" alt="image">
    <button
        class="meme-button"
        @click="editCard">
        Edit
    </button>
</div>

</template>

<style>
#card{
    display: inline-block;
    border-radius: 25px;
    background: #2f2f2f;
    padding: 20px;
    width: 25%;
    height: 25%;
    margin: 10px;
    transition: 1s all ease;
}

img{
    background: #2f2f2f;
    display: block;
    width: 60%;
    margin-left: auto;
    margin-right: auto; 
}
h2{
    background: #2f2f2f;
    text-align: center;
    text-decoration : none;
}
</style>