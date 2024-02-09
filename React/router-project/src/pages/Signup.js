import React from 'react'
import signUpImg from '../assets/signup.png'
import Templete from '../components/Templete'

function Signup({ setIsLoggedIn }) {
  return (
    <div>
      <Templete
        title="Join the millions learning to code with studynotion for free"
        desc1='Build skills for today,tomorrow,and beyond'
        desc2='Education to future-proof your career'
        image={signUpImg}
        setIsLoggedIn={setIsLoggedIn}
        formtype='signup'
      />
    </div>
  )
}

export default Signup
