import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import dog from '../dog.json'
const Detail = () => {
     const navigate = useNavigate()
  const user = JSON.parse(sessionStorage.getItem('user'))
  const handleLogout = () => {
    window.location.href = '/doglist'
    sessionStorage.removeItem('user')
  }
    
    let [box, setBox] = useState('특징')
    

  return (
      <div className='detail'>
                <nav className='nav'>
                <h1 onClick={()=>navigate('/doglist')}>몽몽</h1>
                <div>
                
                
               {user === null ? <button onClick={() => navigate('/login')}>로그인</button> : <div><button onClick={handleLogout}>로그아웃</button> <span className='user'>{ user.id }님</span> </div>}
                </div>
            </nav>
          <header className='detail'>
              <img className='detail__img' src={dog.dog[1].imagePath} alt="" />
              <h3 className='detail__name'>{dog.dog[1].name }</h3>
          </header>      
          <footer>
              <ul className='detail__tab-btn'>
                  <li className={box === '특징' ? 'onBtn' : null} onClick={() => setBox('특징')}><img src='/image/feature.png'></img>특징</li>
                  <li className={box === '유기견' ? 'onBtn' : null} onClick={()=>setBox('유기견')}><img src='/image/dog.png'/>유기견</li>
                  <li className={box === '영상' ? 'onBtn' : null} onClick={()=>setBox('영상')}><img src='/image/video.png'/>견종백과</li>
              </ul>
              <div className='detail__tab-desc'>
                  {box === '특징' ? <div>{ dog.dog[1].description }</div> : null}
                  {box === '유기견' ? <div>유기견박스</div> : null}
                  { box === '영상' ? <div><iframe width="1191" height="670" src={dog.dog[1].videoUrl} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div> : null}

              </div>
          </footer>
    </div>
  )
}

export default Detail