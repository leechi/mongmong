import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import dog from '../dog.json'
import axios from 'axios'

const Detail = () => {
    const navigate = useNavigate()
    const [dogfe, setDog] = useState([])
    let {id} = useParams()
    let dogs = dog.dog.find((x) => {
        return x.id == id
     })
  
    let dogname = dog.dog[id-1].name
    const user = JSON.parse(sessionStorage.getItem('user'))
    const handleLogout = () => {
      window.location.href = '/doglist'
      sessionStorage.removeItem('user')
   }
    let [box, setBox] = useState('유기견')
    
  useEffect(() => {
    axios.get('https://openapi.gg.go.kr/AbdmAnimalProtect?KEY=b1f8aba4221c492293873742583b5130&Type=json&pSize=1000')
    .then(res => {
      const data = res.data.AbdmAnimalProtect[1].row;
      const dogsApiResult = data.filter(dogs => dogs.SPECIES_NM.includes(dogname))
      setDog(dogsApiResult)
      })
    }, [])
  return (
      <div className='detail'>
          <nav className='nav'>
            <h1 onClick={()=>navigate('/doglist')}>몽몽</h1>
            <div>
              {user === null ? <button onClick={() => navigate('/login')}>로그인</button> : <div> <span onClick={()=>navigate('/mypage')} className='user'>{ user.id }님</span><button onClick={handleLogout}>로그아웃</button> </div>}
            </div>
          </nav>
          <header>
            <h1 className='bark'>to much bark</h1>
            <img className='detail__img' src={dogs.imagePath} alt="" />
            <div>
              <p className='speech-bubble'>{dogs.desc}</p>
              <p></p>
            </div>
          </header>      
          <footer>
            <ul className='detail__tab-btn'>
              <li className={box === '유기견' ? 'onBtn' : null} onClick={()=>setBox('유기견')}><img src='/image/dog.png'/>유기견</li>
              <li className={box === '영상' ? 'onBtn' : null} onClick={()=>setBox('영상')}><img src='/image/video.png'/>견종백과</li>
            </ul>
            <div className='footer'>
             {box === '유기견' ?
              dogfe.map((data, i) => 
               (
                <div className='abandoned'>
                  <img className='abandoned__img' src={data.IMAGE_COURS} alt="" />
                  <table >
                    <thead>
                      <th>나이</th>
                      <th>품종</th>
                      <th>성별</th>
                      <th>중성화</th>
                      <th>보호소</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{data.AGE_INFO}</td>
                        <td>{data.SPECIES_NM}</td>
                        <td>{data.NEUT_YN}</td>
                        <td>{data.SEX_NM}</td>
                        <td>{data.SHTER_NM}</td>
                      </tr>
                    </tbody>
                  </table>
              </div>
                 )
              )         
             : null}
              { box === '영상' ? <div><iframe width="1200" height="600" src={dogs.videoUrl} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div> : null}
              </div>
          </footer>
    </div>
  )
}

export default Detail