<script>
import Card from "../components/Card.vue"
import EditModal from "../components/EditModal.vue"
import {data} from "../store.js"
export default {
  data() {
    return {
        data,
        memes: []
    }
  },
  components: {
  },
  methods: {
  },
  mounted() {
      fetch("https://api.imgflip.com/get_memes" )
                .then(response => response.json())
                .then( ({data}) => {
                    this.memes = data.memes
                })
    console.log(this.memes)
  }

}
</script>

<template>
    <main>
        <h2>Ajout de meme</h2>
        <select>
            <option v-for="meme in memes" :value="meme.id">{{meme.name}}</option>
        </select>
    </main>
</template>

<style scoped>
</style>