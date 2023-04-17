import React, { useState } from 'react';
import Navbar from '../../components/ui/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import Filter from '../../components/Filter/Filter';
import ProductsList from '../../components/ProductsList/ProductsList';
import axios from 'axios';

const Home = ({ addToCart, cartSize }) => {
    const [products, setProducts] = useState([]);
    const [showBanner, setShowBanner] = useState(true);
    const fetchProduct = async (queryObject = '') => {
        if (queryObject) {
            setShowBanner(false);
        }
        if (!queryObject) {
            setShowBanner(true);
        }
        const reqData = {
            method: 'get',
            url: `/product?${queryObject}`,
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await axios(reqData);
        setProducts(response.data.products);
    };
    return (
        <div>
            <Navbar cartSize={cartSize} />
            <Filter products={products} fetchProduct={fetchProduct} />
            {showBanner && <Banner />}
            <ProductsList products={products} fetchProduct={fetchProduct} addToCart={addToCart} />
        </div>
    );
};

export default Home;
