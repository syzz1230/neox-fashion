import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DashBoardProduct from '../../components/DashBoardProduct/DashBoardProduct';
import './DashBoard.css';

const DashBoard = () => {
    const [products, setProducts] = useState([]);
    const [name, setName] = useState('');
    const [category, setCategory] = useState('upperwear');
    const [gender, setGender] = useState('male');
    const [description, setDescription] = useState('');
    const [cost, setCost] = useState('');
    const [images, setImages] = useState('');
    const [id, setId] = useState('');
    const [editMode, setEditMode] = useState(false);
    const [page, setPage] = useState(1);

    const fetchProduct = async (currPage = 1) => {
        const reqData = {
            method: 'get',
            url: `/product?page=${currPage}`,
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await axios(reqData);
        console.log(response.data.products.length);
        setProducts(response.data.products);
    };
    const addProduct = async () => {
        const productDetails = {
            name,
            category,
            gender,
            description,
            cost,
            images,
        };
        console.log(productDetails);
        const reqData = {
            method: 'post',
            url: `/product`,
            headers: {
                'Content-Type': 'application/json',
            },
            data: productDetails,
        };

        const response = await axios(reqData);
        fetchProduct(page);
        clearData();
    };
    const fillData = (productDetails) => {
        const { _id, name, category, gender, description, cost, images } = productDetails;
        setEditMode(true);
        setName(name);
        setCategory(category);
        setGender(gender);
        setDescription(description);
        setCost(cost);
        setImages(images);
        setId(_id);
    };
    const clearData = () => {
        setEditMode(false);
        setName('');
        setCategory('upperwear');
        setGender('male');
        setDescription('');
        setCost('');
        setImages('');
    };

    const editProduct = async () => {
        const changedProductData = { name, category, gender, description, cost, images };
        console.log(changedProductData);
        const reqData = {
            method: 'patch',
            url: `/product/${id}`,
            headers: {
                'Content-Type': 'application/json',
            },
            data: changedProductData,
        };
        const response = await axios(reqData);
        console.log(response.data);
        fetchProduct(page);
        clearData();
    };

    const deleteProduct = async (id) => {
        const reqData = {
            method: 'delete',
            url: `/product/${id}`,
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await axios(reqData);
        console.log(response.data);
        fetchProduct(page);
    };
    useEffect(() => {
        fetchProduct(page);
    }, []);

    return (
        <div className='container '>
            <div className='form-container'>
                <div className='dashboard'>Add / Edit Products</div>
                <div className='d-grid justify-space-between my-3'>
                    <label htmlFor='name'>Name</label>
                    <input
                        type='text'
                        id='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Name of Product'
                    />
                </div>
                <div className='d-grid justify-space-between my-3'>
                    <label htmlFor='category'>Category </label>

                    <select
                        name='category'
                        id='category'
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value='upperwear'>UpperWear</option>
                        <option value='bottomwear'>Bottomwear</option>
                        <option value='eyewear'>Eyewear</option>
                        <option value='headwear'>Headwear</option>
                        <option value='shoes'>Shoes</option>
                        <option value='others'>Others</option>
                    </select>
                </div>
                <div className='d-grid justify-space-between my-3'>
                    <label htmlFor='gender'>Gender </label>

                    <select name='gender' id='gender' value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option value='male'>Male</option>
                        <option value='female'>Female</option>
                        <option value='unisex'>Unisex</option>
                    </select>
                </div>

                <div className='d-grid justify-space-between my-3'>
                    <label htmlFor='cost'>Cost</label>

                    <input
                        type='text'
                        value={cost}
                        onChange={(e) => setCost(e.target.value)}
                        placeholder='Price of Product'
                    />
                </div>
                <div className='d-grid justify-space-between my-3'>
                    <label htmlFor='images'>Image</label>

                    <input
                        type='text'
                        value={images}
                        onChange={(e) => setImages(e.target.value)}
                        placeholder='ImageUrl'
                    />
                </div>
                <div className='d-grid justify-space-between my-3'>
                    <label htmlFor='description'>Description</label>

                    <textarea
                        rows='3'
                        type='text'
                        id='description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder='Description about product'
                    />
                </div>
                <div className='d-grid  add-product-div my-3'>
                    <div></div>
                    <button className='btn-2 primary' onClick={() => (editMode ? editProduct() : addProduct())}>
                        {editMode ? 'Edit Product' : 'Add Product'}
                    </button>
                </div>

                <div className='d-flex justify-space-between my-3'>
                    <div>
                        {page !== 1 && (
                            <button
                                className='btn-2 orange'
                                onClick={() => {
                                    setPage(page - 1);
                                    fetchProduct(page - 1);
                                }}
                            >
                                Prev
                            </button>
                        )}
                    </div>
                    {products.length > 9 && (
                        <button
                            className='btn-2 orange'
                            onClick={() => {
                                setPage(page + 1);
                                fetchProduct(page + 1);
                            }}
                        >
                            Next
                        </button>
                    )}
                </div>
                <hr />
            </div>
            <div className='product-list'>
                {products.map((product) => {
                    const { name, _id, cost, gender, category, description } = product;
                    return (
                        <DashBoardProduct
                            key={_id}
                            productDetails={product}
                            fillData={fillData}
                            deleteProduct={deleteProduct}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default DashBoard;
