import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import { filterData, apiUrl } from './components/data';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [courses, setCourses] = useState('');
  const [category, setCategory] = useState(filterData[0].title)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl)
        const data = await res.json();
        setCourses(data.data)
        // console.log(data.data);
      }
      catch (error) {
        toast.error('Something went wrong')
        console.log('wrong');
      }
    }
    fetchData()

  }, [])
  return (
    <div className='flex min-h-screen flex-col bg-blue-200'>
      <Navbar />
      <Filter filterdata={filterData} category = {category} setCategory = {setCategory}/>
      <div className='w-11/12 max-w-[1200px] mx-auto flex flex-row flex-wrap justify-center items-center min-h-[50vh] '>
        <Cards courses={courses} category = {category} />
      </div>

    </div>
  );
}

export default App;
