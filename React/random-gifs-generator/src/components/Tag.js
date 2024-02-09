import React, { useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


function Tag() {
    const [tag, setTag] = useState('')
    const { gif, loading, fetchData } = useGif(tag);
    // const [loading, setloading] = useState(false);

    // async function fetchData() {
    //     setloading(true)
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag={tag}`
    //     const { data } = await axios.get(url)
    //     const imgurl = data.data.images.downsized_medium.url
    //     setgif(imgurl);
    //     setloading(false)

    // }
    // useEffect(() => {
    //     fetchData();
    // }, [])
    function clickHandler() {
        fetchData(tag)
    }
    return (
        <div className='w-1/2 flex flex-col bg-green-500 h-[450px] rounded-lg  justify-center items-center gap-y-5 border border-black'>
            <h1 className='uppercase font-semibold m-2 '>Random {tag} Gif</h1>

            {
                loading ? (<Spinner />) : (<img src={gif} width={300}  alt='abhi nhi aaya' className='object-cover w-[300px] h-[250px]' />)
            }
            <input type='text' className='w-1/2 rounded p-2 border-none'
                onChange={(event) => {
                    setTag(event.target.value)  // this is async operation 
                }}
            />
            <button onClick={clickHandler} className='bg-slate-600 w-10/12 text-white py-3 px-2 rounded-sm'>Generate</button>
        </div>
    )
}

export default Tag
