<script>
import {data} from "../store.js"
export default {
  props: ["meme"],
  data() {
    return {
      data
    }
  },
  components: {
  },
  methods: {
    closeEdit() {
      this.$emit("closeEditModal", false, this.meme)
    },
    saveEdit() {
      this.$emit("closeEditModal", true, this.meme)
    }
  }
}
</script>

<template>
  <main>
    <div id="editCard">
      <div id="name">
        <p>Nom :</p>
        <input type="text" v-model="meme.name">
      </div>
      <img :src="meme.imgSrc"/>
      <div id="buttons">
        <button @click="closeEdit">Annuler</button>
        <button @click="saveEdit">Enregistrer</button>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
}

#editCard {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  width: 30vw;
  height: 75vh;
  background-color: white;
}

#name {
  width: 95%;
  padding-top: 10px;
  padding-bottom: 10px;
}

#name p {
  margin-bottom: 5px;
}

#name input {
  width: 40%;
  object-fit: contain;
}

img {
  height: 100%;
  width: 100%;
  object-fit: contain;
}

#buttons {
  display: flex;
  align-items: center;
  justify-content: center;
}

#buttons button {
  padding: 5px;
  margin: 10px;
}
</style>