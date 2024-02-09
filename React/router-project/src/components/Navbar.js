import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Logo.svg'
import toast from 'react-hot-toast'

function Navbar(props) {
  const isLoggedIn = props.isLoggedIn
  const setIsLoggedIn = props.setIsLoggedIn
  return (
    <div className='flex justify-between max-w-[1100px] mx-auto p-3'>

      <Link to="/" >
        <img src={logo} width={160} height={32} loading='lazy' />
      </Link>

      <nav>
        <ul className='flex gap-3'>
          <li>
            <Link to="/" >Home</Link>
          </li>
          <li>
            <Link to="/" >About</Link>
          </li>
          <li>
            <Link to="/" >Contact</Link>
          </li>
        </ul>
      </nav>

      <div className='flex gap-3'>
        {!isLoggedIn && <Link to="/login"><button>Login</button></Link>}
        {!isLoggedIn && <Link to="/signup"><button>Sign Up</button></Link>}
        {isLoggedIn && <Link to="/"><button onClick={()=>{
          setIsLoggedIn(false)
          toast.success('log out')
        }}>Log Out</button></Link>}
        {isLoggedIn && <Link to="/dashboard"><button>Dashboard</button></Link>}
      </div>
    </div>
  )
}

export default Navbar
