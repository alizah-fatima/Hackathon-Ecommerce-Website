"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

function Line() {


  return (
    <header className='bg-purple-400'>
        <nav className='container py-1 flex justify-between items-center'>

          <div className='flex gap-2 ml-20'>
             <div className='header_top__icon_wrapper'>
              <Link href={"https://www.facebook.com/profile.php?id=61569073806029"}><FaFacebookF /></Link>
             </div>
             <div className='header_top__icon_wrapper'>
               <Link href={"https://www.linkedin.com/in/alizah-fatima008/"}><FaLinkedin /></Link>
             </div>
             <div className='header_top__icon_wrapper'>
              <IoIosMail />
             </div>
          </div>

          <div className='flex items-center gap-4'>
            <div className='flex items-center gap-2'>
              <select name="currency" id="currency" className='text-black text-[12px] w-[60px] bg-purple-400'>
                <option value="USD$"> USD $ </option>
                <option value="EUR€"> EUR € </option>
              </select>
              <select name="language" id="language" className='text-black text-[12px] w-[60px] bg-purple-400'>
                <option value="English">English</option>
                <option value="French">French</option>
              </select>
            </div>

            <ul className='flex justify-center items-center space-x-5 px-4 py-2 mr-8'>
              <li className='flex items-center space-x-1'>
                <Link href='/login'><span>Login</span></Link>
                <MdAccountCircle className='w-4 h-4' />
              </li>
              <li className='flex items-center space-x-1'>
                <Link href={"/"}><FaRegHeart className='w-4 h-4' /></Link>
              </li>
              <li className='flex items-center space-x-1'>
                <Link href={"/cart"}><MdOutlineShoppingCart className='w-5 h-5'/></Link>
              </li>
            </ul>
          </div>
        </nav>
    </header>
  );
};

export default Line; 
