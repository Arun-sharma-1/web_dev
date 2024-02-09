import React from 'react';
import './App.css';
import Products from './components/Products';
import ProductForm from './components/ProductForm';
const App = ()=>{
  const products =[
    {
      id:'p1',
      title:'Nirma',
      amount:100,
      date : new Date(2021,8,10)
    },
    {
      id: 'p2',
      title: '555',
      amount: 150,
      date: new Date(2022, 1, 10)
    },
    {
      id: 'p3',
      title: 'Surf Excel',
      amount: 200,
      date: new Date(2001, 12, 12)
    }
    
  ]
  //here i need data from the childs -> use props
  function MainDataHandler(obj)
  {
    console.log(obj);
  }
  return (
    <div>
      <ProductForm mainHandler = {MainDataHandler} />
      <Products items ={products} />
    </div>
  );
}
export default App
