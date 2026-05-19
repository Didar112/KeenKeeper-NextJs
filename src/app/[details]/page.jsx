'use client'

import React, { use } from 'react';
import data from '../../../public/data.json'
import Image from 'next/image';
import { RiNotificationSnoozeFill } from "react-icons/ri";
import { FaArchive } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { BsChatLeftText } from "react-icons/bs";
import { IoVideocamOutline } from "react-icons/io5";
import { useLogs } from '@/Context/LogContext';
import { notFound } from 'next/navigation';




const FriendDetails =  ({params}) => {
    const {details} = use(params) 
    const target = data.find(item => item.id===parseInt(details))


    const {logs, addLog} = useLogs()
    if(!target){
        notFound()
    }
    
    return (
       

        <div className='container mx-auto my-10 px-4 grid grid-cols-1 lg:grid-cols-3 gap-6'>

    <div className='lg:col-span-1 space-y-4'>

        <div className="card bg-white shadow-sm">
            <figure className="px-10 pt-10">
                <Image
                    src={target.picture}
                    alt={target.name}
                    className="size-[100px] rounded-full object-cover"
                    width={100}
                    height={100}
                />
            </figure>

            <div className="card-body items-center text-center">
                <h2 className="card-title font-semibold text-[20px]">
                    {target.name}
                </h2>

                <span
                    className={`badge border-none text-white ${
                        target.status === "overdue"
                            ? "bg-red-500"
                            : target.status === "almost due"
                            ? "bg-yellow-400"
                            : "bg-green-900"
                    }`}
                >
                    {target.status}
                </span>

                <div className="card-actions flex flex-wrap justify-center gap-2">
                    {target.tags?.map((item, index) => (
                        <div
                            key={index}
                            className="badge badge-soft text-[#244D3F] bg-[#CBFADB] badge-success border-none"
                        >
                            {item}
                        </div>
                    ))}
                </div>

                <p className='font-medium text-[16px] italic text-[#64748B]'>
                    {target.bio}
                </p>

                <p className='font-normal text-[14px] text-[#64748B]'>
                    Preferred: {target.email}
                </p>
            </div>
        </div>

        
        <button className='btn shadow bg-white border-none text-black w-full'>
            <RiNotificationSnoozeFill />
            Snooze for 2 weeks
        </button>

        <button className='btn shadow bg-white border-none text-black w-full'>
            <FaArchive />
            Archive
        </button>

        <button className='btn shadow bg-white border-none text-red-500 w-full'>
            <MdDeleteForever />
            Delete
        </button>
    </div>

   
    <div className='lg:col-span-2 space-y-6'>


        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5'>

            <div className="p-8 shadow rounded bg-white text-center">
                <h1 className="font-semibold text-[32px]">
                    {target.days_since_contact}
                </h1>

                <p className="font-normal text-[18px] text-[#64748B]">
                    Days Since Contact
                </p>
            </div>

            <div className="p-8 shadow rounded bg-white text-center">
                <h1 className="font-semibold text-[32px]">
                    {target.goal}
                </h1>

                <p className="font-normal text-[18px] text-[#64748B]">
                    Goal (Days)
                </p>
            </div>

            <div className="p-8 shadow rounded bg-white text-center">
                <h1 className="font-semibold text-[32px]">
                    {target.next_due_date}
                </h1>

                <p className="font-normal text-[18px] text-[#64748B]">
                    Next Due
                </p>
            </div>
        </div>

        
        <div className="p-8 shadow rounded bg-white">

            <div className='flex items-center justify-between gap-4'>
                <h2 className='font-medium text-[20px]'>
                    Relationship Goal
                </h2>

                <button className='btn btn-primary'>
                    Edit
                </button>
            </div>

            <p className='mt-3 text-[#64748B]'>
                Connect every{" "}
                <span className='font-bold text-[18px] text-black'>
                    30 days
                </span>
            </p>
        </div>

     
        <div className='rounded shadow p-5 bg-white'>

            <h1 className='font-medium text-xl text-[#244D3F] mb-4'>
                Quick Check-in
            </h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 text-center'>


                    <button onClick={()=>addLog("Call", target.name)}>
                  
                <div  className="p-8 shadow rounded flex cursor-pointer  flex-col items-center bg-[#f1f3f6]">
                    <h1 className="font-semibold text-[32px]">
                       <FiPhoneCall />
                    </h1>

                    <p className="font-normal text-[18px] text-[#64748B]">
                        Call
                    </p>
                </div>
                </button>



                <button onClick={()=>addLog("Text", target.name)}>
                <div className="p-8 bg-[#f1f3f6] flex cursor-pointer flex-col items-center shadow rounded">
                    <h1 className="font-semibold text-[32px]">
                        <BsChatLeftText />
                    </h1>

                    <p className="font-normal text-[18px] text-[#64748B]">
                        Text
                    </p>
                </div>
                </button>

                <button onClick={()=>addLog("Video", target.name)}>
                <div className="p-8 bg-[#f1f3f6] flex cursor-pointer  flex-col items-center shadow rounded">
                    <h1 className="font-semibold text-[32px]">
                        <IoVideocamOutline />
                    </h1>

                    <p className="font-normal text-[18px] text-[#64748B]">
                        Video
                    </p>
                </div>
                </button>
            </div>
        </div>
    </div>
</div>
    );
};

export default FriendDetails;