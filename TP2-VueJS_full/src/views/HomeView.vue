<script>
import Card from "../components/Card.vue"
import EditModal from "../components/EditModal.vue"
import {data} from "../store.js"
export default {
  data() {
    return {
      data,
      memeId: null
    }
  },
  components: {
    Card,
    EditModal
  },
  methods: {
    editMemeCallback(id) {
      this.memeId = id
    }
  }
}
</script>

<template>
  <main>
    <h2>Page d'acceuil</h2>
    <div id="cards">
      <Card v-for="meme in data.memes" :meme="meme" @edit-meme="editMemeCallback(meme.id)"/>
    </div>
    <EditModal :memeid="memeId"/>
  </main>
</template>

<style scoped>
h2 {
  margin-bottom: 20px;
}

#cards {
  display: flex;
  justify-content: space-around;
}
</style>