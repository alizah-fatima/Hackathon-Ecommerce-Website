import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

function Header() {
  return (
    <header className='bg-gray-100 p-4 text-black hidden sm:block'>
        <nav className='container sm:flex justify-between items center '>
          <h1 className='font-serif font-extrabold text-black mx-16 ml-28 mt-2 text-4xl'><Link href={"/demo"}>Hekto</Link></h1>
          <div className='flex w-fit gap-3 mx-auto font-medium py-4'>
             <Link className='navbar__link relative mx-4' href="/#">Home</Link>
             <Link className='navbar__link relative mx-4' href="/shopGrid">Shop</Link>
             <Link className='navbar__link relative mx-4' href="/blog">Blog</Link>
             <Link className='navbar__link relative mx-4' href="/about">About</Link>
             <Link className='navbar__link relative mx-4' href="/faq">FAQs</Link>
             <Link className='navbar__link relative mx-4' href="/contact">Contact</Link>  
          </div>
          <div className='flex justify-center ml-10 mr-6 mt-2 sm-w-[200px] md:w-[20%] relative'>
            <input type="text" placeholder='Search...' className='px-6 h-9 border border-gray-400 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-300' />
            <button className='px-4 bg-pink-600 text-white rounded-r-md h-9 hover:bg-pink-500'><Image src='/search.png' alt='search' width={15} height={15} /></button>
          </div>
        </nav>
    </header>
  ); 
};

export default Header;