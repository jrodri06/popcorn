import axios from 'axios'

const api_key = 'bc66ddfc3498c83e45f70e89db21b4eb'
const baseURL = 'https://api.themoviedb.org/3/'

export default axios.create({
    baseURL,
    params: {
        api_key
    }
})