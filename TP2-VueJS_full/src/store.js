import {reactive} from 'vue'
import jsondata from './assets/data.json'

export const data = reactive({
    memes: jsondata.memes
})