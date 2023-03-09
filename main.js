const {createApp} = Vue

createApp({
    data(){
        return {
           // welcome: "can i get some burgers",
            datas: [],
            nameData: ""
        }
    },
    computed: {
        filtered() {
            return this.datas.filter(b => b.name.toLowerCase().includes(this.nameData.toLowerCase()))
          }

    },
    methods: {

    },
    mounted(){
        
        fetch("https://api.imgflip.com/get_memes") //Datas/resources/light/data.json
        .then(res => res.json())
        .then(datas => {
          this.datas = datas.memes
        })

    }
}).mount("#app")
