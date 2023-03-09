<script>
    import Card from '../components/Card.vue'
    import EditModal from '../components/EditModal.vue'
    import {data} from '../store.js'

    console.log(data)
    

    export default{
        components: {
            EditModal,
            Card
        },
        data() {
            return{
                passedMemeId: null,
                data
            }
        },
        methods:{
            editMemeCallBack(memeId) {
                this.passedMemeId=memeId
            },
            closeMemeCallBack(memeId) {
                this.passedMemeId=memeId
            }
        }
    }
</script>

<template>
    <main>
    <h1>Home</h1>
        <RouterLink to="/addCard" class="meme-goback"> New Meme</RouterLink>
        <div class="cards-container">
            <Card
             v-for="obj in data.memes" :data="obj" @edit-meme="$event=> editMemeCallBack(obj.id)"/>
        </div>
        <EditModal :passedMemeId="passedMemeId" @close-meme="closeMemeCallback"/>
    </main>
</template>


<style scoped>

</style>
