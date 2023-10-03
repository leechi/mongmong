import axios from 'axios'

const dogapi = axios.create({
    baseURL: "https://openapi.gg.go.kr/AbdmAnimalProtect?KEY=b1f8aba4221c492293873742583b5130&Tpye=json",  // 공통된 주소
    headers: {
        accept: 'application/json',
  }
})



export default dogapi