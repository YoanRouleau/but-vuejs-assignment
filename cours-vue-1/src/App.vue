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
    -webkit-text-stroke: 1px #000;
    color: #fff;
  }
</style>
