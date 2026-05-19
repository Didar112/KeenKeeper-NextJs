'use client'

import React from 'react';
import {
    PieChart,
    Pie,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';





import { useLogs } from '@/Context/LogContext';

const StatPage = () => {

    const { logs } = useLogs()

    const textCount = logs.filter(item => item.type === "Text").length

    const callCount = logs.filter(item => item.type === "Call").length

    const videoCount = logs.filter(item => item.type === "Video").length


    const data = [
        {
            name: 'Text',
            value: textCount,
            fill: '#7C3AED'
        },
        {
            name: 'Call',
            value: callCount,
            fill: '#244D3F'
        },
        {
            name: 'Video',
            value: videoCount,
            fill: '#6FCF97'
        },
    ]

    return (
        <div className='container mx-auto px-4 mb-15 md:px-6 mt-10 md:mt-20'>

            <h1 className='text-[#244D3F] text-3xl md:text-5xl font-bold mb-10'>
                Friendship Analytics
            </h1>

            <section className='mt-10 shadow rounded-2xl p-5 md:p-10'>

                <p className='font-medium text-lg md:text-xl text-[#244D3F] mb-10'>
                    By Interaction Type
                </p>

                <div className='w-full h-[350px] md:h-[450px]'>

                    <ResponsiveContainer width="100%" height="100%">

                        <PieChart>

                            <Pie
                                data={data}
                                cx="50%"
                                cy="45%"
                                innerRadius={70}
                                outerRadius={110}
                                paddingAngle={4}
                                cornerRadius={10}
                                dataKey="value"
                            />

                            <Tooltip />

                            <Legend
                                iconType='circle'
                                wrapperStyle={{
                                    paddingTop: '20px',
                                    fontSize: '14px'
                                }}
                            />

                        </PieChart>

                    </ResponsiveContainer>

                </div>

            </section>

        </div>
    );
};

export default StatPage;