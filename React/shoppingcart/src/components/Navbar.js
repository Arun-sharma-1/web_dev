import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const {cart} = useSelector((state)=>state)
  return (
    <nav className='flex flex-row justify-around items-center w-full h-20 mx-auto navbar '>
      <NavLink to="/"><img src="../../images/logo.png" width={150} /></NavLink>

      <div className='flex gap-4 text-white items-center font-medium'>
        <NavLink to="/"> <p>Home</p> </NavLink>
        <NavLink to='/cart' className='relative'>
        <FaShoppingCart  /> 
        <span className='absolute top-[-20px] font-medium right-[-10px] bg-green-500 rounded-full flex justify-center items-center p-2  w-[20px] h-[20px] text-white'>{cart.length}</span>
         </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
