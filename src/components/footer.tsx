import React from 'react';
import Link from 'next/link';
import { FaFacebook } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaGithub } from "react-icons/fa6";

function Footer() {
  return (
    <div className='bg-purple-100'>
      <div className='flex flex-row lg:mx-48 mt-28'>
        <div className='mt-14'>
          <Link href={"/#"}><h2 className='font-serif font-extrabold text-black mx-16 text-3xl mt-14 -ml-0'>Hekto</h2></Link>
          <div className='mt-8'>
            <input type="text" placeholder='Enter Email Address' className='px-8 py-2' />
            <button className='bg-pink-500 text-white text-md font-medium px-8 py-2'>Sign Up</button>
            <p className='mt-6 text-gray-500'>Contact info</p>
            <p className='text-gray-500'>17 Princess Road, London, Greater London NW1 8JR, UK</p>
          </div>
        </div> <br />

        <div className='flex flex-col mt-28 ml-20'> 
          <h3 className='text-black font-medium text-xl'>Categories</h3>
          <p className='text-gray-500 text-md mt-9'>Laptops & Computers</p>
          <p className='text-gray-500 text-md mt-2'>Cameras & Photography</p>
          <p className='text-gray-500 text-md mt-2'>Smart Phones & Tablets</p>
          <p className='text-gray-500 text-md mt-2'>Video Games & Consoles</p>
          <p className='text-gray-500 text-md mt-2'>Waterproof & Headphones</p>
        </div>

        <div className='flex flex-col mt-28 ml-16'>
          <h3 className='text-black font-medium text-xl'>Customer Care</h3>
          <p className='text-gray-500 text-md mt-9'>My Account</p>
          <p className='text-gray-500 text-md mt-2'>Discount</p>
          <p className='text-gray-500 text-md mt-2'>Returns</p>
          <p className='text-gray-500 text-md mt-2'>Orders History</p>
          <p className='text-gray-500 text-md mt-2'>Order Tracking</p>
        </div>

        <div className='flex flex-col mt-28 ml-20 mb-24'>
          <h3 className='text-black font-medium text-xl'>Pages</h3>
          <p className='text-gray-500 text-md mt-9'>Blog</p>
          <p className='text-gray-500 text-md mt-2'>Browse the Shop</p>
          <p className='text-gray-500 text-md mt-2'>Category</p>
          <p className='text-gray-500 text-md mt-2'>Pre-Built-Pages</p>
          <p className='text-gray-500 text-md mt-2'>Visual Composer Elements</p>
          <p className='text-gray-500 text-md mt-2'>WooCommerce Pages</p>
        </div>
      </div>

       <div className='flex flex-row bg-purple-200 h-12'>
          <p className='mt-4 ml-96 text-gray-500'> &#169;Webecy -All Rights Reserved</p>
          <span className='mt-4 ml-96'><FaFacebook /></span>
          <span className='mt-4 ml-3'><AiFillTwitterCircle /></span>
          <span className='mt-4 ml-3'><FaGithub /></span>
        </div>
    </div>
  )
}

export default Footer;