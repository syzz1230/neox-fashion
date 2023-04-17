import React from 'react';
import { Link } from 'react-router-dom';
import './SingleProductCard.css';

const SingleProductCard = ({ product, addToCart }) => {
    const { name, category, gender, images, cost, description, _id } = product;
    const productId = _id;
    return (
        <div className='product d-flex product-style'>
            
            <Link to={`/${productId}`} className='d-flex product no-style'>
                <img src={images} alt='' width='100px' height='150px' />

                <div className='f-bold f-capital'>{name}</div>
                <div className='f-bold'>₹ {cost}.00</div>
                
            </Link>
            
            <div>
                <button className='btn-2 primary'>Buy Now</button>
                <button className='btn-2 orange' onClick={() => addToCart(product)}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default SingleProductCard;
