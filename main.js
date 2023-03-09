const { createApp } = Vue

createApp({
    data() {
      return {
        array: [],
        search:"",
        fetchMsg:"Chargement en cours...",
        fetchStatus:false
      }
    },
    computed: {
      filteredMemes() {
          test = this.array.filter(word => word.name.toLowerCase().includes(this.search.toLowerCase()))
          return test
      }
    },
    methods: {
      add() {
        // AJAX -> POST
        // if (this.newBeer.name != "") {
        //   this.beers.push(this.newBeer)
        //   this.newBeer =  { name: "", degree: 0 }
        // }
      }
    },
    mounted() {
      // Exécution dès que tout est prêt
      // Chargement initial de données (AJAX)
      fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => {
          this.array = data.data.memes
          setTimeout((e) => {
            this.fetchStatus=true
          }, 1500);
        })
        .catch(error=> {
          console.log('error')
        })
    }
}).mount('#app')



