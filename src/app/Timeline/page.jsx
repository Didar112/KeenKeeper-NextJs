'use client'
import { useLogs } from '@/Context/LogContext';
import Image from 'next/image';
import React, { useState } from 'react';
import call from '../../../assets/call.png'
import video from '../../../assets/video.png'
import text from '../../../assets/text.png'

const TimelinePage = () => {

    const [filter, setFilter] = useState("All")

    const iconmap = {
        Call: call,
        Video: video,
        Text: text,
    }

    const { logs } = useLogs()

    const filteredLogs =
        filter === "All"
            ? logs
            : logs.filter(item => item.type === filter)

    return (
        <div className='container mx-auto px-4 md:px-6 mt-10 md:mt-20 mb-10 md:mb-20'>

            <h1 className='font-bold text-3xl md:text-5xl mb-6 md:mb-10 text-[#244D3F]'>
                Timeline
            </h1>

            <div className="dropdown dropdown-bottom mb-10">

                <div
                    tabIndex={0}
                    role="button"
                    className="text-black bg-white btn w-full w-[300px] flex border-none justify-between"
                >
                    <p>Filter Timeline</p>
                    <p>↓</p>
                </div>

                <ul
                    tabIndex={-1}
                    className="dropdown-content bg-white menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                >
                    <li onClick={() => setFilter("All")}>
                        <a>All Entries</a>
                    </li>

                    <li onClick={() => setFilter("Text")}>
                        <a>By Text</a>
                    </li>

                    <li onClick={() => setFilter("Call")}>
                        <a>By Call</a>
                    </li>

                    <li onClick={() => setFilter("Video")}>
                        <a>By Video</a>
                    </li>
                </ul>
            </div>

            <section>

                {
                    filteredLogs.map((item, index) =>

                        <div
                            key={index}
                            className='flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow rounded-2xl p-4 md:p-5 mb-4'
                        >

                            <Image
                                src={iconmap[item.type]}
                                alt={item.type}
                                width={50}
                                height={20}
                            />

                            <div className='flex flex-col'>

                                <p className='text-sm sm:text-base md:text-lg'>
                                    <span className='font-bold text-lg md:text-[20px] text-[#244D3F]'>
                                        {item.type}
                                    </span>{" "}
                                    with {item.person}
                                </p>

                                <p className='text-sm text-gray-500 break-words'>
                                    {item.date}
                                </p>

                            </div>

                        </div>
                    )
                }

            </section>

        </div>
    );
};

export default TimelinePage;