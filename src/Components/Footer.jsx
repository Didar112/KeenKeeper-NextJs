import React from 'react';
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";



const Footer = () => {
    return (
        <div className='bg-[#244D3F]'>
            <div className='mx-auto container border text-white text-center border-white'>

            <h1 className='text-[80px] font-1000 mt-[40px]'><span className='text-[80px] font-bold'>Keen</span  >Keeper</h1>
            <p className='font-light mb-[15px] text-[16px] text-[]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
            <p className='font-normal mb-5'>Social Links</p>
            <div className='flex items-center gap-2 justify-center'>
                <span className=''><FaInstagramSquare /></span>
                <span><FaFacebook /></span>
                <span><FaSquareXTwitter /></span>
            </div>
            </div>
        </div>
    );
};

export default Footer;