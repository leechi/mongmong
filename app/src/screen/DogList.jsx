import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Carousel from "react-multi-carousel"
import dog from '../dog.json'
import "react-multi-carousel/lib/styles.css"

const CustomRightArrow = ({ onClick, ...rest }) => {
  return (
    <button onClick={onClick} className='arrow'>
      ＞
    </button>
  );
}
const CustomLeftArrow = ({ onClick, ...rest }) => {
  return (
    <button onClick={onClick} className='arrow'>
      ＜
    </button>
  );
}

const DogList = () => {
  
  console.log()
  const navigate = useNavigate()
  const user = JSON.parse(sessionStorage.getItem('user'))
  const handleLogout = () => {
    window.location.href = '/doglist'
    sessionStorage.removeItem('user')
  }
   const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
}
  return (
    <div>
      <nav className='nav'>
        <h1 onClick={()=>navigate('/doglist')}>몽몽</h1>
        <div>
          {user === null ? <button onClick={() => navigate('/login')}>로그인</button>
            : <div>
                <span onClick={() => navigate('/mypage')} className='user'>{user.id}님</span>
                <button onClick={handleLogout}>로그아웃</button>
              </div>}
          </div>
      </nav>      
      <header className='banner__box'>
        <Carousel
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          arrows={true}
          customRightArrow={<CustomRightArrow />}
          customLeftArrow={<CustomLeftArrow />}
          responsive={responsive}>
          <div className='banner' >
            <img className="banner__img" src="image/banner2.jpeg" alt="" />
            <p>당신은 <br /><strong>좋은가족</strong>이 될<br></br> 준비가 되었나요?</p>
            </div>
            <div className='banner' >
            <img className="banner__img" src="image/banner1.png" alt="" />  
          </div>
        </Carousel>;
      </header>
      <section className='dog-list'>
      {
        dog.dog.map((data, i) => (
          <div onClick={()=>navigate(`/doglist/detail/${dog.dog[i].id}`)}>
            <img src={`/image/dog${i+1}.jpeg`} className='dog-list__list'/>
            <span className='dog-list__name'>{dog.dog[i].name}</span>
          </div>
        ))
      }
      </section>
    </div>
  )
}

export default DogList