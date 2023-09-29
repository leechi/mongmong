import React from 'react'
import { useNavigate } from 'react-router-dom'

const DogList = () => {
  const navigate = useNavigate()
  const doglist = [1,2,3,4,5,6,7, 9,1,1,1,11,1,1,1]
  return (
    <div>
    <nav className='nav'>
        <h1 onClick={()=>navigate('/doglist')}>몽몽</h1>
        <div>
        <button>검색</button>
          <button onClick={()=>navigate('/login')}>로그인</button>
          </div>
      </nav>
      {/* api받아올거임 */}
      
      <header className='banner__box'>
          <div className="banner"></div>
      </header>
    <section className='dog-list'>
      
      {
        doglist.map((data, i) => (
          <div>
            <img src='/image/img2.jpeg' className='dog-list__list'/>
            <span className='dog-list__name'>골드리트리버</span>
          </div>
        ))
      }
      </section>
      </div>
  )
}

export default DogList