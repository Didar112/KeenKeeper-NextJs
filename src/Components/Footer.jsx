import React from 'react';
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";




const Footer = () => {
    return (
        <div className='bg-[#244D3F]'>
            <div className='mx-auto container mb-5 text-white text-center '>

            <h1 className='text-[80px] font-1000 mt-[40px]'><span className='text-[80px] font-bold'>Keen</span  >Keeper</h1>
            <p className='font-light mb-[15px] text-[16px] text-[]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
            <p className='font-normal mb-5'>Social Links</p>
            <div className='flex items-center gap-2 justify-center'>
               <div className='rounded-full p-3 bg-white'><FaFacebook className='text-black' /></div>
               <div className='rounded-full  p-3 bg-white'><FaInstagramSquare className='text-black' /></div>
               <div className='rounded-full  p-3 bg-white'><RiTwitterXLine className='text-black' />
</div>

        
            </div>
            <div className="divider"></div>


        <div
        className='flex justify-between'
        >
            <p className='font-normal text-[16px]'><small>© 2026 KeenKeeper. All rights reserved.</small></p>
            <div className='flex'>
                  <p className='ml-10'>Privacy Policy</p>
                  <p className='ml-10'>Terms of Service</p>
                  <p className='ml-10'>Cookies</p>
            </div>
        </div>


            </div>
        </div>
    );
};

export default Footer;