import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import {remove} from '../redux/Slices/CartSlice'
import toast from 'react-hot-toast';

function CartItem({item}) {
  const dispatch = useDispatch();
  function removeFromCart()
  {
        dispatch(remove(item.id))
        toast.error('item removed from cart')
  }
  return (
    <div className='flex items-center p-2 md:p-5 justify-between   mt-2 mb-2 md:mx-5 border-b-2 border-slate-400'>
      <div className='flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center'>
        <div className='w-[30%]'>
          <img src ={item.image} className='w-full h-full object-cover' />
        </div>
        <div>
          <h1 className='font-bold text-[20px]'>{item.title}</h1>
          <h1>{item.description.substr(0,80)}...</h1>
          <div className='flex justify-between items-center'>
              <p>{item.price}</p>
              <MdDelete className='cursor-pointer' onClick={removeFromCart} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
