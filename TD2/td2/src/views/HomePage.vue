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
                this.passedMemeId = memeId
            },
            closeMemeCallBack() {
                console.log("fermer")                
                this.passedMemeId = null
            }
        }
    }
</script>

<template>
    <main>
    <br>
        <RouterLink to="/addCard" class="meme-goback"> New Meme</RouterLink>
        <br>
        <div class="cards-container">
            <Card
             v-for="obj in data.memes" :data="obj" @edit-meme="$event=> editMemeCallBack(obj.id)"/>
        </div>
        <EditModal :passedMemeId="passedMemeId" @close-meme="closeMemeCallback"/>
    </main>
</template>


<style scoped>
.meme-goback{
    font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
    font-size: 16px;
    display: inline-block;
    border-radius: 8px;
    transition: background-color .5s,color .5s;
    text-decoration: none;
    position: relative;
    font-weight: 600;
    background-color: #42b883;
    color: #fff;
    margin-left: 18px;
    padding: 8px;
}

</style>
