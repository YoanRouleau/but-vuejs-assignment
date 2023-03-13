<script setup>
import { ref } from 'vue';
const emit = defineEmits(['closeMeme'])
const props = defineProps({
    passedMemeId : {
        type: Number,
        default: null
    }
})
const closeMemeFunction = function(){
    console.log('log')    
    $emit('closeMeme')
}
let texte1 = ref('')
let texte2 = ref('')
</script>


<template>
    
    <div class="edit-modal" v-if="props.passedMemeId !== null">
        <form class="edit-modal-form">
            <div @click="$emit('closeMeme')" class="close-modal">X</div>
            <label for="">Texte 1</label>
            <input v-model="texte1" type="text" id="text1">
            <label for="">Texte 2</label>
            <input v-model="texte2" type="text" id="text2">
            <div class="edit-image">
                <p>{{ texte1 }}</p>
                <img :src="props.passedMemeId.url">
                <p>{{ texte2 }}</p>
            </div>
            <button type="submit">Modifier</button>
        </form>
    </div>
</template>


<style scoped>
    .edit-modal{
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .close-modal{
        align-self: end;
        cursor: pointer;
        outline: none;
        border: none;
        background-color: crimson;
        text-align: center;
        line-height: 30px;
        border-radius: 8px;
        font-weight: 700;
        color: #fff;
        width: 30px;
        height: 30px;
    }
    form{
        width: 300px;
        padding: 10px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        background-color: #fff;
    }
    form .edit-image{
        position: relative;
        width: 100%;
        margin: 10px 0;        
    }
    form .edit-image img{
        width: 100%;
        height: auto;
    }
    form .edit-image p{
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
        font-weight: bold;
        font-size: 22px;
        width: 100%;
        text-align: center;
    }
    form .edit-image p:nth-child(1){
        top: 5%;
    }
    form .edit-image p:nth-child(3){
        bottom: 5%;
    }
    form label{
        font-weight: bold;
    }
    form input{
        margin: 0px 0 15px;
        outline: none;
        border: solid 1px #000;
        border-radius: 5px;
        font-size: 18px;
    }
    button {
        width: 50%;
        align-self: center;
        cursor: pointer;
        padding: 10px 20px;
        border: unset;
        border-radius: 15px;
        color: #212121;
        z-index: 1;
        background: #e8e8e8;
        position: relative;
        font-weight: 1000;
        font-size: 17px;
        -webkit-box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
        box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
        transition: all 250ms;
        overflow: hidden;
    }
    button::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 0;
        border-radius: 15px;
        background-color: #212121;
        z-index: -1;
        -webkit-box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
        box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
        transition: all 250ms
    }
    button:hover {
        color: #e8e8e8;
    }
    button:hover::before {
        width: 100%;
    }
</style>