'use client';

import Image from 'next/image';
import React from 'react';
import logo from '../../public/kinkeeper_logo.png';

import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineWatchLater } from "react-icons/md";
import { ImStatsDots } from "react-icons/im";
import { HiOutlineMenu } from "react-icons/hi";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {

  const pathname = usePathname();

  return (

    <div className="navbar px-4 md:px-10 lg:px-20 bg-white shadow-sm">


      <div className="navbar-start">


        <div className="dropdown  lg:hidden">

          <div tabIndex={0} role="button" className="btn btn-ghost">
            <HiOutlineMenu size={22} />
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm bg-white dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >

            <li>
              <Link href="/">
                <button
                  className={`btn btn-ghost justify-start ${pathname === '/'
                    ? 'bg-[#244D3F] text-white'
                    : ''
                    }`}
                >
                  <IoHomeOutline />
                  Home
                </button>
              </Link>
            </li>

            <li>
              <Link href="/Timeline">
                <button
                  className={`btn btn-ghost justify-start ${pathname === '/Timeline'
                    ? 'bg-[#244D3F] text-white'
                    : ''
                    }`}
                >
                  <MdOutlineWatchLater />
                  Timeline
                </button>
              </Link>
            </li>

            <li>
              <Link href="/Stat">
                <button
                  className={`btn btn-ghost justify-start ${pathname === '/Stat'
                    ? 'bg-[#244D3F] text-white'
                    : ''
                    }`}
                >
                  <ImStatsDots />
                  Stats
                </button>
              </Link>
            </li>

          </ul>
        </div>


        <Image
          src={logo}
          alt='logo'
          width={141}
          height={31}
        />

      </div>



      <div className="navbar-end gap-2 hidden lg:flex">

        <Link href="/">
          <button
            className={`btn btn-ghost ${pathname === '/'
              ? 'bg-[#244D3F] text-white hover:bg-[#244D3F]'
              : ''
              }`}
          >
            <IoHomeOutline />
            Home
          </button>
        </Link>

        <Link href='/Timeline'>
          <button
            className={`btn btn-ghost ${pathname === '/Timeline'
              ? 'bg-[#244D3F] text-white hover:bg-[#244D3F]'
              : ''
              }`}
          >
            <MdOutlineWatchLater />
            Timeline
          </button>
        </Link>

        <Link href='/Stat'>
          <button
            className={`btn btn-ghost ${pathname === '/Stat'
              ? 'bg-[#244D3F] text-white hover:bg-[#244D3F]'
              : ''
              }`}
          >
            <ImStatsDots />
            Stats
          </button>
        </Link>

      </div>

    </div>

  );
};

export default Navbar;