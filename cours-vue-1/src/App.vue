<script>
  //import data from '../../resources/light/data.json'
  import GaleryImage from './components/GaleryImage.vue'

  export default {
  data() {
    return {
      welcome: 'Bienvenue sur mon site Vue',
    }
  },
  components:{
    GaleryImage
  }
}
</script>

<template>
    <h1>{{this.welcome}}</h1>

    <GaleryImage/>
</template>

<style scoped>
  h1{
    -webkit-text-stroke: 3px #fff;
    font-size: 60px;
    margin-bottom: 10px;
    font-weight: 900;
    text-align: center;
    padding: 20px;
    background-color: #000;
    color: #000;
  }
</style>
