import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

function Hero() {
  return (
    <section className='relative bg-purple-100 h-[500px] flex items-center justify-center text-left'>
        <div className='px-4'>
            <Image src='/lamp.png' alt='lamp' height={400} width={200} className='absolute top-0 left-28 w-[280px]' />
            <div className="max-w-[600px] text-left ml-[-200px] mt-[-50px]">
                <p className='text-xl font-medium text-pink-800'>Best Furniture for your Castle...</p>
                <h1 className='text-5xl font-bold text-black'><span>New Furniture Collection</span> <br /><span>Trends in 2024</span></h1>
                <p className='text-xl font-medium mb-3 text-black'>Discover the best products at amazing prices.</p>
                <Link href={"/shopGrid"}><button className='bg-pink-800 text-white px-6 py-3 font-light hover:bg-pink-600 transition duration-300'>Shop Now</button></Link>
            </div>
            <div className='relative'>
                <div className='absolute bottom-2 top-0 right-[-26%] bg-[#00BCD4] text-white rounded-full w-[80px] h-[80px] flex flex-col items-center justify-center z-10'>
                    <span className='text-2xl font-bold leading-none'>50%</span>
                    <span className='text-base'>off</span>
                </div>
            </div>
            <Image src='/sofa.png' alt='chair' height={300} width={400} className='absolute bottom-12 right-[12%] '/>
        </div>
    </section>
  );
};

export default Hero;