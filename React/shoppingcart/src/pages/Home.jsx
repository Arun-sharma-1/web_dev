import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner';
import Product from '../components/Product';

function Home() {
  const API_URL = 'https://fakestoreapi.com/products';
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);



  async function fetchData() {
    setLoading(true)
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setPosts(data);
      // console.log(data);
    }
    catch (error) {
      console.log('error');
      setPosts([]);
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchData();
  }, [])
  return (
    <div className='mt-20 px-10 py-5 '>
      {
        loading ? <Spinner /> :
          posts.length > 0 ? (
            <div className='grid xm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto gap-x-5 gap-y-10 aspect-square'>
              {posts.map((post) => (
                <Product key={post['id']} post={post} />

              ))}
            </div>
          ) : (<div><p>No data found</p></div>)
      }
    </div>
  )
}

export default Home
