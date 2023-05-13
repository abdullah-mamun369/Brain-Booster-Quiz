import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryBox.css'

const CategoryBox = ({ Category }) => {

    const { id, name, logo, total } = Category;

    return (
        <div className='col-lg-3 col-md-6 col-sm-12'>
            <div className='border rounded shadow boost-box'>
                <img className='img-fluid' src={logo} alt="" />
                <div className='pt-3'>
                    <p>Category: {name}</p>
                    <p>Total Booster: {total}</p>
                </div>
                <Link to={`/Category/${id}`}><button className='btn btn-outline-success mx-3 fw-semibold px-5 mb-4'>Boost Now</button></Link>
            </div>
        </div>
    );
};

export default CategoryBox;