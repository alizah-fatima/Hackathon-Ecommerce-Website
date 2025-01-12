import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Error404 = () => {
    return (
        <div>
            <div className='bg-purple-100 h-60'>
                <div>
                  <h3 className='text-3xl text-blue-950 font-bold pt-16 ml-64'>404 Not Found</h3>
                </div>
                <div className='mt-2 ml-64'>
                  <Link href='/#' className='text-black text-md font-medium mr-2'>Home .</Link>
                  <Link href='#' className='text-black text-md font-medium mr-2'>Pages . </Link>
                  <Link href='/error' className='text-pink-500 text-md font-medium'>404 Not Found</Link>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <Image src={"/error.png"} alt='error' width={800} height={800} className='mt-32'/>
                <button className='text-white bg-pink-600 text-md font-medium px-5 py-2 shadow-md hover:shadow-xl hover:bg-pink-500 transition-all duration-300'><Link href={"/#"}>Return To Home</Link></button>
                <Image src={"/list.png"} alt='list' width={900} height={900} className='mt-20'/> 
            </div>
        </div>
    )
}

export default Error404;