import React, { useState } from 'react';
import './DashBoardProduct.css';

const DashBoardProduct = ({ productDetails, fillData, deleteProduct }) => {
    const { name, _id, cost, gender, category, description, images } = productDetails;
    return (
        <div className='eachProduct '>
            <div>
                <img src={images} alt='' width='150px' />
            </div>
            <div>
                <div>
                    <b>Name :</b>
                    {name}
                </div>
                <div>
                    <b>Rs :</b> {cost} | &nbsp; <b>Gender :</b> {gender} | &nbsp; <b>Category :</b> {category}
                </div>
                <div>
                    <b>Desc :</b> {description}
                </div>
            </div>
            <div>
                <div>
                    <div>
                        <button className='btn primary' onClick={() => fillData(productDetails)}>
                            Edit
                        </button>
                    </div>
                    <div>
                        <button className='btn danger' onClick={() => deleteProduct(_id)}>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashBoardProduct;
