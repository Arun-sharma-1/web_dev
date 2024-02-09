import React, { useState } from "react";
import './Card.css'

function Card({ id, name, info, image, price, removeTour }) {
    const [readmore, setreadmore] = useState(false)
    const description = readmore ? info : `${info.substring(0, 200)}...`
    function readmoreHandler() {
        setreadmore(!readmore);
    }
    return (
        <div className="card">
            <img src={image} className="image" alt="imagehere"></img>
            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">₹ {price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>
                <div className="description">
                    {description}
                    <span onClick={readmoreHandler} className="read-more">{readmore ? 'show less' : 'show more'}</span>
                </div>
            </div>
            <div className="btn-container"><button className="btn-red" onClick={() => removeTour(id)}>Not interested</button></div>
        </div>
    )
}
export default Card;