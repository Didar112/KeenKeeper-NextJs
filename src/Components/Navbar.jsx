import Image from 'next/image';
import React from 'react';
import logo from '../../public/kinkeeper_logo.png'
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineWatchLater } from "react-icons/md";
import { ImStatsDots } from "react-icons/im";



const Navbar = () => {
    return (
        
            <div className="navbar px-20 bg-white shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <Image 
        src={logo}
        alt='logo'
        width={141}
        height={31}
    >

    </Image>
  </div>
  
  <div className="navbar-end gap-2">
    <button className="btn btn-ghost"><IoHomeOutline />
        Home</button>
    <button className="btn btn-ghost"><MdOutlineWatchLater />
Timeline</button>
    <button className="btn btn-ghost"><ImStatsDots />
Stats</button>
  </div>
</div>

    );
};

export default Navbar;