import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function DiscountItem() {
  return (
    <div>
        <div>
            <h3 className='font-bold text-4xl pb-8 mt-24 text-center text-blue-950 font-sans'>Discount Item</h3>
        </div>
        <div className='flex w-fit gap-3 -mt-2 mx-auto font-medium py-4'>
             <Link className='navbar__link relative mx-4' href="#">Wood Chair</Link>
             <Link className='navbar__link relative mx-4' href="#">Plastic Chair</Link>
             <Link className='navbar__link relative mx-4' href="#">Sofa Collection</Link> 
        </div>
        
        <div className='flex lg:mx-80 ml-20 w-[900px] items-center'>
          <div className='flex-1'>
            <h3 className='font-bold text-3xl pb-8 text-left text-blue-950 font-sans'>20% Discount Of All Products</h3>
            <p className='text-pink-400 font-medium text-xl -mt-3'>Eams Sofa Compact</p>
            <p className='text-gray-400 font-normal mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Excepturi dolor met veniam error alias. Modi, esse! Porro!</p>
            
            <ul className='flex text-gray-400 font-normal mt-3'>
              <li>
                <span> &#10003; </span>
                Material expose like metals
              </li>
              <li className='ml-3'>
                <span> &#10003; </span>
                Clear lines and geometric figures
              </li>
            </ul>
            <ul className='flex text-gray-400 font-normal mt-2'>
              <li>
                <span> &#10003; </span>
                Simple neutral colors
              </li>
              <li className='ml-12'>
                <span> &#10003; </span>
                Material expos like metals
              </li>
            </ul>
            
            <button className='text-white bg-pink-500 text-md font-medium py-4 px-12 mt-5'>
              Shop Now
            </button>
          </div>

          <div className='relative flex-shrink-0'>
            <div className='absolute inset-0 flex items-center justify-center'>
                <div className='w-80 h-80 bg-pink-100 rounded-full'></div>
            </div>
            <Image src={"/chair14.png"} alt='chair' width={450} height={550} className='relative z-50' />
          </div>
        </div>
    </div>
  );
}

export default DiscountItem;
