import React from 'react';
import Image from 'next/image';

function Features() {
  return (
    <div className='flex justify-center mt-32 bg-purple-100 w-full h-[500px]'>
        <div className='relative'>
            <div className='absolute inset-0 flex items-center justify-center'>
               <div className='w-96 h-96 bg-pink-200 rounded-full mr-8'></div>
            </div>
            <Image src={"/sofa2.png"} alt='sofa' width={400} height={400} className='mt-9 relative z-10' />
        </div>
        <div className='ml-4'>
            <h3 className='text-blue-950 font-bold text-3xl mb-7 mt-28 text-left'>Unique Features Of Latest & <br /> Trending Products</h3>
            <ul className='list-disc text-xl text-gray-500'>
                <li className='marker:text-pink-500 marker:[font-size:24px]'>All frames constructed with hardwood solids and laminates</li>
                <li className='marker:text-blue-700 marker:[font-size:24px]'>Reinforced with double wood dowels, glue, screw-nails corner <br />blocks and machine nails</li>
                <li className='marker:text-green-400 marker:[font-size:24px]'>Arms, back and seats are structurally reinforced</li>
            </ul>
            <div className='flex items-center'>
            <button className='bg-pink-500 py-2 px-6 mt-8 text-white font-medium hover:shadow-xl transition duration-300'>Add To Cart</button>
               <span className='text-blue-950 font-medium ml-4 mt-7'>B&B Italian Sofa <br /> $32.00</span>
            </div>
        </div>
    </div>
  )
}

export default Features;