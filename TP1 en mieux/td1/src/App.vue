<script>
  export default{
    data(){
        // Properties
        return{
            datas: [],
            nameData: ""
        }
    },
    computed:{
        // "Calculated" data, mostly
        filteredDatas() {
            return this.datas.filter(d => d.name.toLowerCase().includes(this.nameData.toLowerCase()))
        }
    },
    methods:{
        // Regular methods
        async getData(){
          const res = await fetch("https://api.imgflip.com/get_memes")
          const finalRes = await res.json()
          this.datas = finalRes.data.memes          
        }
    },
    mounted(){
        // Executed at start
        this.getData();
    }
  }
</script>

<template>
    <main id="app">
            <h1>TP1</h1>        
            <p>Recherche : <input v-model="nameData" type="text"/></p>    
            <table>
                <tr v-for="data in filteredDatas">
                    <td>{{ data.name }}</td>
                    <td><img :src="data.url" class="img"></td>
                </tr>
            </table>            
    </main>
</template>

<style scoped>
  *{
    margin: 0;
    padding: 0;
    font-family: monospace;
    color: white;
    background-color: black;
}

td{
    color: orange;
    border-top: solid 2px orange;
}

.img{
    width: 20vw;
}
</style>
