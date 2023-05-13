import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

const Statistic = () => {

    const chartInfo = useLoaderData();
    const updatedChart = chartInfo.data;

    return (
        <div className='row pt-5 text-center'>
            <div className=''>
                <h2 className='fw-bold py-4 text-success'>Booster Questuion VS Booster</h2>
            </div>
            <div className='container me-3'>
                <LineChart className='m-auto' width={500} height={300} data={updatedChart}>
                    <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip></Tooltip>
                </LineChart>
            </div>
        </div>
    );
};

export default Statistic;