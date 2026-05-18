import React from 'react';
import PieChartWithPaddingAngle from './PieChart';

const StatPage = () => {
    return (
        <div className='container mx-auto'>
            <h1 className='text-[#244D3F] text-5xl font-bold'>Friendship Analysis</h1>


            <section className='mt-20 shadow rounded-2xl p-10'>
                <p className='font-medium text-xl'>By Interaction Type</p>


                <PieChartWithPaddingAngle></PieChartWithPaddingAngle>



            </section>
        </div>
    );
};

export default StatPage;