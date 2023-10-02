import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import dog from '../dog.json'

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
};

  
  const doglist = [1,2,3,4,5]
  return (
    <div>
    <nav className='nav'>
        <h1 onClick={()=>navigate('/doglist')}>몽몽</h1>
        <div>
          
          
          {user === null ? <button onClick={() => navigate('/login')}>로그인</button> : <div> <span onClick={()=>navigate('/mypage')} className='user'>{ user.id }님</span><button onClick={handleLogout}>로그아웃</button> </div>}
          
          
          </div>
      </nav>
      {/* api받아올거임 */}
      
      <header className='banner__box'>
        
        <Carousel
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          
          responsive={responsive}>
          
          <div className="banner"> </div>
          <div className="banner" style={ {backgroundColor:"tomato"}}> </div>
          <div className="banner" style={{backgroundColor:"yellow"}}> </div>
          
   
          </Carousel>;
          
      </header>
    <section className='dog-list'>
      
      {
        dog.dog.map((data, i) => (
          <div onClick={()=>navigate(`/doglist/detail/${i+1}`)}>
            <img src={`/image/dog${i+1}.jpeg`} className='dog-list__list'/>
            <span className='dog-list__name'>{dog.dog[i].name }</span>
          </div>
        ))
      }
      </section>
      </div>
  )
}

export default DogList