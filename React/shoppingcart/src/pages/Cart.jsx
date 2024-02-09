import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

function Cart() {
  const  {cart}  = useSelector((state) => state);
  // console.log(cart);
  const [totalAmount , settotalAmount] = useState(0);


  useEffect(()=>{
    settotalAmount(cart.reduce((acc,curr)=>acc+curr.price,0))
  },[cart])
  return (
    <div className=''>
      {
        cart.length > 0 ?
          (

            <div className='max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center'>

               
              <div className='w-[100%] md:w-[60%] flex flex-col p-2'>
                  {
                    cart.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))
                  }
              </div>
               

              <div className='w-[100%] md:w-[40%] mt-5  flex flex-col'>
                <div className='flex flex-col p-5 gap-5 my-14  h-[100%] justify-between '>
                  <div className='flex flex-col gap-5 '>
                    
                      <div className='font-semibold text-xl text-green-800 '>Your cart </div>
                      <div className='font-semibold text-5xl text-green-700 '>Summary </div>
                
                      <p className="text-xl">
                        <span className="text-gray-700 font-semibold text-xl">Total Items : {cart.length}</span>
                    </p>
                    
                  </div>
                  <div className='flex flex-col'>
                      <p className="text-xl font-bold"><span className="text-gray-700 font-semibold">Total Amount:</span> ${totalAmount}</p>
                      <button className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl">CheckOut Now</button>
                  
                  </div>
                </div>
              </div>
 
              
            </div>
            
          ) :
          (<div className='h-[80vh]   flex flex-col justify-center items-center'>
            <h1>Add item to cart </h1>
            
            <Link to="/">
              <button className='rounded py-3 px-5 my-2 bg-green-400'>Shop Now</button>
            </Link>
          </div>)
      }

    </div>
  )
}

export default Cart
