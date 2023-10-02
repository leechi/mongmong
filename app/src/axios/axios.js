import axios from 'axios'

const instance = axios.create({
    baseURL : "http://localhost:3001",  // 공통된 주소
})



export default instance