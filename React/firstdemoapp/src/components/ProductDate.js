import React  from "react";
import './ProductDate.css'
const ProductDate = (props)=>{
    const month = props.date.toLocaleString("en-us", { month: "long" });
    const day = props.date.toLocaleString("en-us", { day: "2-digit" });
    const year = props.date.getFullYear();

    return(
        <div className="pro-date">
            <div>{month}</div>
            <div>{year}</div>
            <div>{day}</div>
        </div>
    );
}
export default ProductDate