import React from 'react';
import Image from 'next/image';

const TrendingProductsData = [
  {
    img:"/chair1.png", 
    title:"Cantilever Chair", 
    price:"$26.00", 
    oldPrice:"$42.00",
  },
  {
    img:"/chair15.png", 
    title:"Cantilever Chair", 
    price:"$26.00", 
    oldPrice:"$42.00",
  },
  {
    img:"/chair4.png", 
    title:"Cantilever Chair", 
    price:"$26.00", 
    oldPrice:"$42.00",
  },
  {    
    img:"/chair6.png", 
    title:"Cantilever Chair", 
    price:"$26.00", 
    oldPrice:"$42.00",
  },
];

const TrendingProducts = () => {
  return (
    <div>
      <div>
        <h3 className='font-bold text-4xl pb-8 mt-24 text-center text-blue-950 font-sans'>Trending Products</h3>
      </div>

      <div className='grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-2 mt-8 lg:px-80'>
        {TrendingProductsData.map((product, index) => (
          <div key={index} className=''>
            <div className='justify-center bg-white shadow-xl hover:shadow-2xl transition duration-300 p-2 mt-4'>
              <img src={product.img} alt={product.title} width={200} height={200} className='bg-gray-100'/>
              <h3 className='text-blue-950 text-lg font-medium mt-4 text-center'>{product.title}</h3>
              <div className='flex gap-4 mt-1 mb-4 justify-center items-center'>
                <p className='text-blue-950 font-medium'>{product.price}</p>
                <p className='text-gray-400 line-through'>{product.oldPrice}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='flex justify-center mt-20'>
        <div className='bg-pink-100 mr-6 h-60 w-80 flex items-start shadow-md'>
            <div>
              <h3 className='text-blue-950 font-medium text-xl mt-6 ml-6 whitespace-nowrap'>23% off in all products</h3>
              <button className='text-pink-500 underline mt-2 font-medium ml-6'>Shop Now</button>
            </div>
            <div className='mt-20'>
              <Image src={"/clock.png"} alt='clock' width={400} height={200} className='object-cover'/>
            </div>
        </div>
        <div className='bg-blue-100 h-60 w-80 shadow-md'> 
          <div>
            <h3 className='text-blue-950 font-medium text-xl mt-6 ml-6'>23% off in all products</h3>
            <button className='text-pink-500 underline mt-2 font-medium ml-6'>View Collection</button>
          </div>
          <Image src={"/drawer.png"} alt='drawer' width={600} height={500} className='-mt-32' />
        </div>

        <div className='flex flex-col gap-2 ml-4'>
          <div className='flex'>
            <Image src={"/chairA.png"} alt='chair' width={70} height={70} className='bg-gray-100 shadow-sm' />
            <div className='mt-2 ml-2'>
              <h3 className='text-blue-950 font-medium text-lg'>Executive Seat Chair</h3> 
              <p className='text-blue-950 font-normal text-sm line-through'>$32.00</p>
            </div>
          </div>
          <div className='flex'>
            <Image src={"/chairB.png"} alt='chair' width={70} height={70} className='bg-gray-100 shadow-sm'/>
            <div className='mt-2 ml-2'>
              <h3 className='text-blue-950 font-medium text-lg'>Executive Seat Chair</h3> 
              <p className='text-blue-950 font-normal text-sm line-through'>$32.00</p>
            </div>
          </div>
          <div className='flex'>
            <Image src={"/chairC.png"} alt='chair' width={70} height={70} className='bg-gray-100 shadow-sm' />
            <div className='mt-2 ml-2'>
              <h3 className='text-blue-950 font-medium text-lg'>Executive Seat Chair</h3>
              <p className='text-blue-950 font-normal text-sm line-through'>$32.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrendingProducts;