import React from 'react';
import {formatPrice} from '../helpers'

const fish = (props) => {
    const fish = props.details;
    const isAvailable = fish.status === "available";
    return (

        <li className="menu-fish">
            <img src={fish.image} alt={fish.name}/>
            <h3 className="fish-name">{fish.name}
                <span className="price">{formatPrice(fish.price)}</span>
            </h3>
            <p>{fish.desc}</p>
            <button disabled={!isAvailable}
            onClick={() => props.addToOrder(props.index)}
            >{isAvailable?"Add to Cart":"Sold Out"}</button>


        </li>
    )
}

export default fish;
