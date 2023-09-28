import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Main = () => {
  const navigate = useNavigate()
  return (
    <main>
      <h1 className='main__title'>몽몽</h1>
      <section className='main__section1'>
        <img className='main__img1' src="/image/main.webp" alt="" />
        <div className='main__item1'>
          <div className='main__item1__text1'>
            <h1>귀여워..</h1>
            <p>강아지는 너무 사랑스러워요!<br></br>
              너무 귀엽지 않나요?<br></br>
              키우고 싶죠!?
            </p>
          </div>
          <div className='main__item1__text2'>
            <p>
              미디어에서 보여지는 귀여운 강아지들을 보며<br></br>
              <blockquote>"아 나도 강아지 키우고 싶다."</blockquote><br></br>
              라는 생각 해보신적 없으신가요?
            </p>
          </div>
        </div>
      </section>
      <section className='main__section2'>
        <div className='main__item2'>
          
          <div className='main__item2__text1'>
            <h1>그런데..</h1>
            <h1>이런말 아시나요?</h1>
            <blockquote>" 가슴으로 입양해서 통장으로 기르세요 "</blockquote>
            <p>월 평균 양육비 18만 2600원
              
            </p>
            <strong style={{color :'white'}}>(병원비 약 7만 원)</strong>
          </div>
          <div className='main__item2__text2'>
              <p>지난해(2022년) 유기동물 <em style={{ color: 'red'}}>11만 2천마리..</em></p>
            <p>키우기전에 조금만 더 <br></br>
              알아보는 시간을 가져봐요</p>
          
            <button onClick={ ()=>{navigate('/doglist')} } className='linkToDogList'>강아지 공부하기</button>  
          </div>
        
          
        </div>
        <img className='main__img2' src="/image/main2.jpeg" alt="" />
      </section>
    </main>
  )
}

export default Main