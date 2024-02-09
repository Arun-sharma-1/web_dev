import React from 'react';
// import Card from '../components/Card'
import ProductItem from './ProductItem'
import '../components/Products.css'
const Products = (props) => {

    return (
        <div className='pro-container'>
            <ProductItem
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].date}
            />
            <ProductItem
                title={props.items[1].title}
                amount={props.items[1].amount}
                date={props.items[1].date}
            />
            <ProductItem
                title={props.items[2].title}
                amount={props.items[2].amount}
                date={props.items[2].date}
            />
        </div>
    )
}
export default Products