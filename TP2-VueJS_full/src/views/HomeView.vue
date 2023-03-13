<script>
import Card from "../components/Card.vue"
import EditModal from "../components/EditModal.vue"
import {data} from "../store.js"
export default {
  data() {
    return {
      data,
      meme: null,
      click: false
    }
  },
  components: {
    Card,
    EditModal
  },
  methods: {
    editMemeCallback(cardMeme) {
      this.meme = cardMeme
      this.click = true
    },
    closeEditModal(saving, meme) {
      console.log(meme)
      console.log(saving)
      this.click = false
    }
  }
}
</script>

<template>
  <main>
    <h2>Page d'acceuil</h2>
    <div id="cards">
      <Card v-for="meme in data.memes" :meme="meme" @edit-meme="editMemeCallback(meme)"/>
    </div>
    <EditModal v-if="click" :meme="meme" @close-edit-modal="closeEditModal"/>
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