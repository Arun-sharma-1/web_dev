import React from 'react';
import './App.css';
import Testimonial from './components/Testimonial';
import reviews from './data';

function App() {
  return (
    <div className='flex flex-col w-[100vw] h-[100vh]  items-center text-center bg-lime-50 mb-20'>
      <div className='md:mb-0 mb-16 flex flex-col justify-center items-center'>
        <h1 className='text-[25px] font-bold'>Our Testimonial</h1>
        <div className='bg-violet-700 w-[50%] h-[2px] mb-2 '></div>
      </div>
      <Testimonial review = {reviews}/>
    </div>
  );
}

export default App;
