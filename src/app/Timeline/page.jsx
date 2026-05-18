'use client'
import { useLogs } from '@/Context/LogContext';
import Image from 'next/image';
import React from 'react';
import call from '../../../assets/call.png'
import video from '../../../assets/video.png'
import text from '../../../assets/text.png'

const TimelinePage = () => {

    const iconmap = {
        Call: call,
        Video : video,
        Text: text,
    }

    const { logs, addLog } = useLogs()

    return (
        <div className='container mx-auto'>
            <h1 className='font-bold text-[48px] text-[#244D3F]'>Timeline</h1>
            <div className="dropdown dropdown-bottom">
                <div tabIndex={0} role="button" className="text-black  bg-white btn w-[300px] m-1 flex border-none justify-between">

                    <p>Filter Timeline</p>
                    <p>↓</p>
                </div>
                <ul tabIndex="-1" className="dropdown-content bg-white menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a>By Text</a></li>
                    <li><a>By Call</a></li>
                    <li><a>By Video</a></li>
                </ul>
            </div>


            <section>

                {
                    logs.map((item, index)=>
                    <div key={index} className='flex gap-5 shadow rounded-2xl p-5 mb-4'>

                       <Image
                src={iconmap[item.type]}
                alt={item.type}
                width={50}
                height={20}
            />

                        <div className='flex flex-col'>

                            <p><span className='font-bold text-[20px] text-[#244D3F]'>{item.type}</span> with {item.person}</p>
                            
                            <p>{item.date}</p>
                        </div>
                                       
                    </div>
                    )
                }

            </section>
        </div>
    );
};

export default TimelinePage;