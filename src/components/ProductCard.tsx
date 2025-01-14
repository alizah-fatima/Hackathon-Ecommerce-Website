"use client"

import React from 'react'
import Image from 'next/image'

interface propsType {
    img: string,
    title: string,
    rating: React.ReactNode,
    code: string,
    price: string,
}

const ProductCard: React.FC<propsType> = ({
    img, 
    title, 
    rating, 
    code, 
    price,
}) => {

  return (
    <div className='product-card border border-gray-200 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 relative w-full flex flex-col justify-between'>
      <div className='relative'>
        <Image 
          className='w-full h-48 object-cover mb-4 rounded bg-gray-100' 
          src={img} 
          alt={title} 
          width={300} 
          height={300} 
        />
        <div className='absolute top-2 left-2 flex gap-2'>
          <button className='bg-white text-blue-900 rounded-full p-2 shadow-md hover:bg-blue-400 hover:text-white transition-all duration-300'>
            <Image src={"/cart.png"} alt='cart' width={15} height={15} />
          </button>
          <button className='bg-white text-blue-900 rounded-full p-2 shadow-md hover:bg-blue-400 hover:text-white transition-all duration-300'>
            <Image src={"/wishlist.png"} alt='like' width={15} height={15} />
          </button>
        </div>
      </div>
        <div className='product-info bg-white p-4 flex flex-col items-center justify-center hover:bg-blue-300 transition-colors duration-300'>
            <h3 className='text-lg text-pink-600 font-semibold mb-2'>{title}</h3>
            <span className='text-yellow-500 text-sm -mt-2 w-20'>{rating}</span>
            <p className='text-blue-900 text-sm'>Code:{code}</p>
            <p className='text-md font-normal text-blue-900'>{price}</p>
        </div>
    </div>
  )
}

export default ProductCard;

