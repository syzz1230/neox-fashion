import React, { useEffect, useState } from 'react';
import Navbar from '../../components/ui/Navbar/Navbar';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Product.css';

const Product = ({ cartSize, addToCart }) => {
    let count = 1;
    const { productId } = useParams();
    const [product, setProduct] = useState('');

    const fetchProduct = async () => {
        const reqData = {
            method: 'get',
            url: `/product/${productId}`,
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await axios(reqData);
        setProduct(response.data.product);
    };

    useEffect(() => {
        return () => {
            fetchProduct();
        };
    }, []);

    return (
        <section className='Product'>
            <Navbar cartSize={cartSize} />
            {product && (
                <div className='product-details mt-5'>
                    <div className='img-details'>
                        <img src={product.images} alt='' width='50%' className='product-img' />
                        <div className='deatil-container'>
                            <div className='my-2'>
                                <b>{product.name}</b>
                            </div>
                            <div className='f-capital my-2'>
                                {product.category} for {product.gender}
                            </div>
                            <div className='my-2'>
                                <b>₹ {product.cost}.00 </b>
                            </div>
                            <div>Free Delivery</div>

                            <div className='btn-div my-2'>
                                <button className='btn-2 primary'>Buy Now</button>
                                <button onClick={() => addToCart(product)} className='btn-2 orange'>
                                    Add To cart
                                </button>
                            </div>
                            <div className='my-2'>
                                <div>
                                    <b>Description</b>
                                </div>
                                <span>{product.description}</span>
                            </div>
                        </div>
                    </div>

                    <div className='review-enter my-5'>
                        <div className='my-3'>Write a Review</div>
                        <textarea rows='3' placeholder='Write a review here....'></textarea>
                        <button className='btn-2 primary'>Submit Review</button>
                    </div>
                    <div className='review-enter my-5'>
                        <div className='my-3'>
                            <b>Reviews</b>
                        </div>
                        {product.review.map((item) => {
                            return (
                                <p>
                                    {count++}. {item}
                                </p>
                            );
                        })}
                    </div>
                </div>
            )}
        </section>
    );
};

export default Product;
