import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import {Route,Routes} from 'react-router-dom';
import Cart from './pages/Cart';


function App() {
  return (
    <div>
      <div className='bg-slate-900  h-full relative'>
        <Navbar />
      </div>

        <Routes>
          <Route path='/' element= {<Home/>} />
          <Route path='/cart' element= {<Cart/>} />
        </Routes>
    </div>
  );
}

export default App;
