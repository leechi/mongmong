import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault()
  }
  const navigate = useNavigate()
  return (
    <div>
    <nav className='nav-primary'>
        <h1 onClick={()=>navigate('/doglist')}>몽몽</h1>
        <div>
        <button>검색</button>
          <button onClick={()=>navigate('/login')}>로그인</button>
          </div>
      </nav>
    <div className='login'>
      <button className='google__login'>
        <img style={{ width: '20px' }} src="image/google.png" alt="" />
        <span>구글로 로그인하기</span>
      </button>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder='이름'/>
        <input type="text" placeholder='비밀번호'/>
        <button className='button350'>로그인</button>
        <span>아이디가 없으시나요? <strong onClick={()=>{navigate('/join')}}>회원가입</strong></span>
      </form>

      </div>
      </div>
  )
}

export default Login