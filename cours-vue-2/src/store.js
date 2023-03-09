import { reactive } from "vue";
import jsonData from '../../resources/full/data.json'

export const data = reactive({
    memes: jsonData.memes
})