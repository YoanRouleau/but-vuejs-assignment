<script>
    export default {
  data() {
    return {
      data: [],
      searchQuery: ""
    }
  },
  methods: {
    async getData(){
      const res = await fetch("https://api.imgflip.com/get_memes");
        const finalRes = await res.json();
        this.data = finalRes.data.memes;
    }
  },
  computed:{
    filteredItems() {
      if (!this.searchQuery) {
        return this.data
      }
      return this.data.filter(j => {
        return j.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      })
    }
  },
  mounted(){
      this.getData();
    }
}
</script>

<template>
    <input v-model="searchQuery" type="text" placeholder="Recheche...">
    <div class="data-container">
        <div class="data-item" v-for="j in filteredItems">
            <h2>{{j.name}}</h2>
            <img :src="j.url" :width="j.width" :height="j.height" alt="#">
        </div>
    </div>
</template>

<style scoped>
    input{
    margin: 0 20px;
    outline: none;
    border: solid 1px #000;
    border-radius: 10px;
    padding: 5px;
    font-size: 20px;
    width: 50%;
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