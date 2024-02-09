import React ,{useState} from 'react';
// import Card from './Card';
import ProductDate from './ProductDate';
import './ProductItem.css'
// var count = 0;
const ProductItem = (props)=>{
    
    const [title,setTitle] = useState(props.title)
    function clickHandler()
    {
        setTitle('popcorn')
        // setTitle(count++)
        console.log(title)

    }
    return(
        <div className='pro-item'>
            <ProductDate date = {props.date}/>
            <div>
                <h2>{title}</h2>
            </div>
            <button onClick={clickHandler}>Add to Cart</button>
        </div>
    );
}
export default ProductItem