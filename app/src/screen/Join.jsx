import React, { useReducer, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../axios/axios'

const Join = () => {

  let idRef = useRef()
  let pwRef = useRef()
  let pw2Ref = useRef()
  let nameRef = useRef()
  let emailRef = useRef()
  const handleJoin = (e) => {
    e.preventDefault()
    if(pwRef.current.value === pw2Ref.current.value){
    axios.post('user/join', {
      id: idRef.current.value,
      pw: pwRef.current.value,
      name: nameRef.current.value,
      email : emailRef.current.value
    }).then(res => {
      
      console.log(res.data.msg)
      if (res.data.msg === '성공') {
        alert('성공!')
        window.location.href = '/login'
      } else {
        alert('실패!')
      }
    })
    }
  }
  const navigate = useNavigate()
  return (
    <div>
    <nav className='nav-primary'>
        <h1 onClick={()=>navigate('/doglist')}>몽몽</h1>
        
      </nav>
    <div className='join'>
      <button className='google__login'>
        <img style={{ width: '20px' }} src="image/google.png" alt="" />
        <span>구글로 로그인하기</span>
      </button>
      <form onSubmit={handleJoin}>
          <input type="text" ref={idRef} placeholder='아이디' />
          <input type="text" ref={nameRef} placeholder='이름'/>
        <input type="text" ref={emailRef} placeholder='이메일'/>
        <input type="text" ref={pwRef} placeholder='비밀번호'/>
        <input type="text" ref={pw2Ref} placeholder='비밀번호 확인'/>
        <button className='button350'>회원가입</button>
        <span>아이디가 있으시나요? <strong onClick={()=>{navigate('/login')}}>로그인</strong></span>
      </form>

      </div>
      </div>
  )
}

export default Join