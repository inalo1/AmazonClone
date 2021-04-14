/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import "./CheckoutProduct.css";
import { useStateValue } from './StateProvider';

function CheckoutProduct({id, image, title, price, rating}) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // removing items from basket
        dispatch ({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }
   
    return (
        <div className="checkoutProduct">
            <img className='checkoutProduct__image' src={image} />

            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className='checkoutProduct__price'>
                    <small>$</small>
                    <strong>{price}</strong>    
                </p>
                <div className='checkoutProduct__rating'>
                    {Array(rating).fill().map((_, i) => (
                        <StarIcon />
                    ))}
                </div>
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>

        </div>
    )
}

export default CheckoutProduct
