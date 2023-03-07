<script>
  import data from '../../resources/light/data.json'
  export default {
  data() {
    return {
      welcome: 'Bienvenue sur mon site Vue',
      json: data
    }
  }
}
</script>

<template>
    <h1>{{this.welcome}}</h1>
    <div class="data-container">
        <div class="data-item" v-for="j in this.json">
            <h2>{{j.name}}</h2>
            <img :src="j.url" :width="j.width" :height="j.height" alt="#">
        </div>
    </div>

</template>

<style scoped>
  h1{
    -webkit-text-stroke: 1px #000;
    color: #fff;
  }

  .data-container{
    display: flex;
    flex-wrap: wrap;
  }

  .data-item{
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
    border: solid 1px #000;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
