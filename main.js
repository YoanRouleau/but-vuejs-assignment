const { createApp } = Vue

  createApp({
    data() {
    //properties
      return {
        datas: [],
        search: "",
        boxCount:0,
      }
    },
    computed: {
        // "calculated" data mostly
        filteredResult: function() {
          if (!this.datas.length) return "Waiting for data"
          return this.datas.filter(data => {

            return data.name.toLowerCase().includes(this.search.toLowerCase()) || data.box_count>this.boxCount
          })
        }
    },
    methods: {
        // regular methods
      /*filtreName() {
        this.result = this.datas.filter(b => b.name.toLowerCase().includes(this.search.toLowerCase()))
      },
      filterBoxCount() {
        this.result = this.datas.filter(b => b.box_count>this.boxCount)
      }*/
    },
    mounted(){
        // executed at start
        fetch("data.json")
        .then(res => res.json())
        .then(data => {
          this.datas = data
          this.filteredResult = data
        })
    }
  }).mount('#App')

//CC => var aVariable = "coucou" bien
//SC => var a_Variable = "coucou" caca