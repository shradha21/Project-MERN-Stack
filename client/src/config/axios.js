import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'http://localhost:3070/api'
})

export default axios