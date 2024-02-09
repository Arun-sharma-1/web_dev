import React from 'react'
import Random from './components/Random'
import Tag from './components/Tag'
import './index.css'


function App() {
  return (
    <div className='background max-h-full overflow-x-hidden flex flex-col items-center text-center'>

      <h1 className='bg-white py-6 mt-4 px-5  rounded-md w-11/12 font-bold text-3xl leading-[1.25rem]'>RANDOM GIFS</h1>
      <div className='flex flex-col gap-y-10 w-full items-center mt-[30px] '>
        <Random />
        <Tag />
      </div>

    </div>
  )
}

export default App
