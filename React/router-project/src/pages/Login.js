import React from 'react'
import Templete from '../components/Templete'
import loginImg from '../assets/login.png'

function Login({ setIsLoggedIn }) {
  return (
    <div>
      <Templete
        title="Welcome back"
        desc1='Build skills for today,tomorrow,and beyond'
        desc2='Education to future-proof your career'
        image={loginImg}
        setIsLoggedIn={setIsLoggedIn}
        formtype='login'
      />
    </div>
  )
}

export default Login
