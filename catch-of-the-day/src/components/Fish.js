import React from 'react';
import {formatPrice} from '../helpers'

const fish = (props) => {
    const fish = props.details;

    return (

        <li className="menu-fish">
            <img src={fish.image} alt={fish.name}/>
            <h3 className="fish-name">{fish.name}
                <span className="price">{formatPrice(fish.price)}</span>
            </h3>
            <p>{fish.desc}</p>
            <button>Add to Cart</button>


        </li>
    )
}

export default fish;
