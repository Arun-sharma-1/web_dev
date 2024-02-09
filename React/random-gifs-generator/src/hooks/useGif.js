import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

function useGif(tag) {
    const [gif, setgif] = useState('');
    const [loading, setloading] = useState(false);

    const randomMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const tagMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag={tag}`;

    async function fetchData(tag) {
        setloading(true)
        const { data } = await axios.get(tag ? tagMemeUrl : randomMemeUrl)
        const imgurl = data.data.images.downsized_medium.url
        setgif(imgurl);
        setloading(false)

    }
    useEffect(() => {
        fetchData();
    }, [])

    return {gif,loading,fetchData}
}

export default useGif
