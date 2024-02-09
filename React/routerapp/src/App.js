import React from 'react';
import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Skills from './components/Skills';
import About from './components/About';
function App() {
  return (
    <div className="App bg-red-50">
    <nav>
        <ul className='flex flex-row gap-5 justify-center'>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/skills">Skills</NavLink></li>

      </ul>
    </nav>

    <Routes>
      <Route path='/' element ={<Home/>}/>
      <Route path='/about' element ={<About/>}/>
      <Route path='/skills' element ={<Skills/>}/>
    </Routes>
    </div>
  );
}

export default App;
