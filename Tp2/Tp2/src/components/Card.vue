<!--<template>
    <div class="meme-item">
        <p>{{data.name}}</p>
    </div>
</template>
<script>
//     export default {
//         components:{
//             EditModal
//         },
//         props:{
//             'data'
//         },
//         emits:{'editMeme'},
//         methods:{
//             editCard(){
//                 this.$emit
//                 ('editMeme', this.data.id);
//             }
//         },
//         mounted(){
//         }
//     }
// </script>-->
<script>
    export default {
        props: ['data'],
        mounted(){

        }
    }
</script>

<template>
<div id="oui">
    <div>
        <h2>{{data.name}}</h2>
        <img :src='data.imgSrc'>
    </div>
</div>
    
</template>

<style>
#oui{
display: inline-block;
border-radius: 25px;
  border: 2px solid #73AD21;
  padding: 20px;
    width: 25%;
  height: 25%;
  margin: 10px;
      transition: 1s all ease;
}
#oui:hover{
    width: 28%;
    height: 28%;
    transition: 1s all ease;
}
img{
    display: block;
  width: 60%;
  margin-left: auto;
  margin-right: auto; 
}
h2{
    text-align: center;
    text-decoration : underline;
}
</style>