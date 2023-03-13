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
      this.memes = fetch( "https://api.imgflip.com/get_memes" )
                    .then(response => response.json())
                    .then(data => {
                        return data.memes
                    })
                    .catch(error => {
                        console.log(error)
                    })
    console.log(this.memes)
  }

}
</script>

<template>
    <main>
        <h2>Ajout de meme</h2>
        <p v-for="meme in memes">{{meme.name}}</p>
        <select name="" id="">
            <option value=""></option>
        </select>
    </main>
</template>

<style scoped>
</style>