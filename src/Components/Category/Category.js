import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryBox from '../CategoryBox/CategoryBox';
import banner from '../images/banner.jpg'

const Category = () => {
    const Catagory = useLoaderData();
    const boosters = Catagory.data;

    return (
        <div className='container text-center mb-5'>
            <section>
                <img className='img-fluid border' src={banner} alt="" />
            </section>

            <section>
                <div className='pt-5'>
                    <h2 className='fs-2 fw-bold text-success pb-2'>Select the Booster</h2>
                    <p className='pb-3'>Boost the section of your web-development in your Thalamus part of the Brain. <br />Keep practicing, Best of luck!!</p>
                </div>

                <div className='row row-cols-lg-4 row-cols-md-2 row-cols-sm-1 g4'>
                    {
                        boosters.map(booster =>
                            <CategoryBox key={booster.id} Category={booster}></CategoryBox>
                        )
                    }
                </div>
            </section>

        </div>
    );
};

export default Category;