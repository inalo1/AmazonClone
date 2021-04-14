import React from 'react'
import './Product.css'
import StarIcon from '@material-ui/icons/Star';

function Product({id, title, image, price, rating}) {
    return (
        <div className='product'>
            <div className='product__info'>
                <p>{title}</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <p className='product__rating'>
                    {Array(rating).fill().map((_, i) => (
                        <StarIcon />
                    ))}
                </p>
            </div>
            <img src={image} alt="" />
            <button>Add to Basket</button>
        </div>
    )
}

export default Product
