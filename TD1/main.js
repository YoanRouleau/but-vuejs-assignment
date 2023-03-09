const {createApp} = Vue

createApp({
	data(){
		//properties
		return{
			search: "",
			chut: []
		}
	},
	computed: {
		filteredNames(){
			return this.chut.filter(b => b.data.Name.toUpperCase().includes(this.search.toUpperCase()) || b.data.BirthDate.includes(this.search) || b.data.KnownFor.toUpperCase().includes(this.search.toUpperCase()))
		}

	},
	methods: {

	},
	mounted(){
		fetch("data.json")
	        .then(res => res.json())
	        .then(data => {
	          this.chut = data
	        })

	}
}).mount("#app")