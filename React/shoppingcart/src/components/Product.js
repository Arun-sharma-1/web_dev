import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove ,add } from '../redux/Slices/CartSlice';
import toast from 'react-hot-toast';


function Product({post}) {
  const {cart} = useSelector((state) => state);
  const dispatch = useDispatch();
  function removeFromCart(){
    dispatch(remove(post.id));
    toast.error('item removed from cart')
  }
  function addToCart(){
    dispatch(add(post));
    toast.success('item added to cart')
  }
  const des = post.description.length > 50 ? `${post.description.substr(0,50)}..` : post.description;
  return (
    <div className='flex flex-col items-center gap-y-3 outline rounded-xl p-5 shadow-md hover:scale-110 ml-5 mt-10 transition duration-300 ease-in '>
      <div>
        <p className='text-gray-700 font-semibold text-lg truncate w-40 mt-1'>{post.title}</p>
      </div>
      <div>
        <p className='text-gray-400 font-normal text-[14px] text-left'>
        {des}
        </p>
      </div>
      <div className='h-[180px] w-[150px] mt-3'>
        <img  src = {post.image} className='w-full h-full aspect-square'/>
      </div>
      <div className='flex justify-between items-center gap-5 mt-3'>
        <p className='text-green-500 font-bold'>${post.price}</p> 
        {
          cart.some((p)=>p.id === post.id) ? <button onClick={removeFromCart}>Remove Item</button> :(<button onClick={addToCart}>Add to Cart</button>)
        }
      </div>
    </div>
  )
}

export default Product
