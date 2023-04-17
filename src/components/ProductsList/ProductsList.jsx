import React, { useEffect, useState } from 'react';
import './ProductsList.css';
import SingleProductCard from '../SingleProductCard/SingleProductCard';

const ProductsList = ({ products, fetchProduct, addToCart }) => {

    useEffect(() => {
        fetchProduct();
    }, []);
    return (
        <section className='productslist'>
            {products.map((product) => {
                return <SingleProductCard key={product._id} product={product} addToCart={addToCart} />;
            })}
        </section>
    );
};

export default ProductsList;
