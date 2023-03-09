const { createApp } = Vue

createApp({
    data() {
        return {
            models: [],
            types: [],
            engines: [],
            manufacturers: [],
            properties: [],
            manufacturerName: "",
            fetchStatus: false
        }
    },
    computed: {
        filteredManufacturers() {
            return this.manufacturers.filter(m => m.name.toLowerCase().includes(this.manufacturerName.toLowerCase()))
        }
    },
    methods: {
        typeModel(idType) {
            var result = this.types.find(t => t.id == idType)
            return result
        }
    },
    mounted() {
        this.fetchStatus = true
        fetch("data/aircraft-models.json")
            .then(res => res.json())
            .then(data => { this.models = data })
        fetch("data/aircraft-types.json")
            .then(res => res.json())
            .then(data => { this.types = data })
        fetch("data/engine-models.json")
            .then(res => res.json())
            .then(data => { this.engines = data })
        fetch("data/manufacturers.json")
            .then(res => res.json())
            .then(data => { this.manufacturers = data })
        fetch("data/properties.json")
            .then(res => res.json())
            .then(data => { this.properties = data })
        this.fetchStatus = false
    }
}).mount('#app')