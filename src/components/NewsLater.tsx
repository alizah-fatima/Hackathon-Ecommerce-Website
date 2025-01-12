import React from 'react';
import Image from 'next/image';

function NewsLater() {
  return (
    <div>
        <div className='relative mt-32'>
            <Image src={"/newslater.jpeg"} alt="bg" width={3000} height={100} style={{objectFit:'cover', height: '500px', width: '100%'}}  />
            <div className='absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center text-center items-center'>
              <h3 className='text-4xl text-blue-950 font-bold mt-9'>Get Latest Update By Subscribe <br /> Our Newslater</h3>
              <button className='bg-pink-600 text-white text-md font-medium mt-12 px-10 py-3 shadow-lg hover:shadow-2xl'>Shop Now</button>
            </div>
        </div>
        <div className='flex items-center justify-center mt-20'>
            <Image src={"/list.png"} alt='list' width={900} height={200} />
        </div>
    </div>
  )
}

export default NewsLater;