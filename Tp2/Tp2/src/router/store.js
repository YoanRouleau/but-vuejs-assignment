import { reactive } from 'vue'
import jsonDama from '../assets/data.json'

export const data = reactive({
    memes: jsonDama.memes
})