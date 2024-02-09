import './ProductForm.css'
import React, { useState } from 'react';
function ProductForm(props) {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('')
    function titleChangeHandler(event) {
        setTitle(event.target.value)
        // console.log(event.target.value)
    }
    function dateChangeHandler(event) {
        setDate(event.target.value)
        // console.log(event.target.value)
    }
    function submitHandler(event) {
        event.preventDefault()
        let obj = {
            title: title,
            date: date
        }
        props.mainHandler(obj);
    }
    return (
        <form className='product-form' onSubmit={submitHandler} >
            <div className='product-title'>
                <label>Title</label>
                <input type='text' onChange={titleChangeHandler} ></input>
            </div>
            <div className='product-date'>
                <label>Date</label>
                <input type='date' onChange={dateChangeHandler}></input>
            </div>
            <button>Submit</button>
        </form>
    );
}
export default ProductForm;