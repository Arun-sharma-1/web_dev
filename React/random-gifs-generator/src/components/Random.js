import React from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

function Random() {
    const {gif,loading,fetchData} = useGif();
    return (
        <div className='w-1/2 flex flex-col bg-green-500 h-[450px] rounded-lg  justify-center items-center gap-y-5 border border-black'>
            <h1 className='uppercase font-semibold m-2 '>Random Gif</h1>

            {
                loading ? (<Spinner />) : (<img src={gif} width={300} alt='abhi nhi aaya' className='img' />)
            }

            <button onClick={()=>fetchData()} className='bg-slate-600 w-10/12 text-white py-3 px-2 rounded-sm'>Generate</button>
        </div>
    )
}

export default Random
