import React from 'react'
import Image from 'next/image'

function Offer() {
  return (
    <div>
        <div>
            <h2 className="font-bold text-4xl pb-8 mt-16 text-center text-blue-950 font-sans">What Shopex Offer!</h2>
        </div>
        <div className='flex items-center justify-center gap-6 mb-6 mt-8 h-64 px-4 lg:px-80'>
            <div className='bg-white text-black rounded-md p-6 shadow-lg text-center hover:shadow-2xl transition-shadow duration-300'>
                <div className='flex justify-center items-center mb-4'>  
                   <Image src='/delivery.png' alt='support' width={50} height={50}/>
                </div>   
                <h3 className='font-bold text-blue-900'>24/7 Support</h3>
                <p className='text-gray-500 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, possimus!</p>
            </div>
            <div className='bg-white text-black rounded-md p-6 shadow-lg text-center hover:shadow-2xl transition-shadow duration-300'>
                <div className="flex justify-center items-center mb-4">
                  <Image src="/coin.png" alt="delivery" width={50} height={50} />
                </div>
                <h3 className='font-bold text-blue-900'>24/7 Support</h3>
                <p className='text-gray-500 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, possimus!</p>
            </div>
            <div className='bg-white text-black rounded-md p-6 shadow-lg text-center hover:shadow-2xl transition-shadow duration-300'>
                <div className='flex justify-center items-center mb-4'>
                   <Image src='/badge.png' alt='payment' width={50} height={50}/>
                </div>
                <h3 className='font-bold text-blue-900'>24/7 Support</h3>
                <p className='text-gray-500 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, possimus!</p>
            </div>
            <div className='bg-white text-black rounded-md p-6 shadow-lg text-center hover:shadow-2xl transition-shadow duration-300'>
                <div className='flex justify-center items-center mb-4'>
                   <Image src='/support.png' alt='shipping' width={50} height={50}/>
                </div>
                <h3 className='font-bold text-blue-900'>24/7 Support</h3>
                <p className='text-gray-500 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, possimus!</p>
            </div>
        </div>
    </div>
  )
}

export default Offer;