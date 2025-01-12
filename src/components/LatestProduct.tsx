import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const latestProductsData = [
        {
          img:'/chair16.png', 
          title:'Comfort Handy Craft', 
          price:'$42.00', 
          oldPrice:'$65.00'
        },
        {
          img:'/chair1.png', 
          title:'Comfort Handy Craft', 
          price:'$42.00', 
          oldPrice:'$65.00'
        },
        {
          img:'/chair15.png', 
          title:'Comfort Handy Craft', 
          price:'$42.00', 
          oldPrice:'$65.00'
        },
        {
          img:'/chair8.png', 
          title:'Comfort Handy Craft', 
          price:'$42.00', 
          oldPrice:'$65.00'
        },
        {
          img:'/chair4.png', 
          title:'Comfort Handy Craft', 
          price:'$42.00', 
          oldPrice:'$65.00'
        },
        {
          img:'/chair6.png', 
          title:'Comfort Handy Craft', 
          price:'$42.00', 
          oldPrice:'$65.00'
        },
    ];

const LatestProduct = () => {
  return (
    <div>
      <h2 className="font-bold text-4xl pb-8 mt-16 text-center text-blue-950 font-sans">Latest Products</h2>

      <nav className='container sm:flex justify-between items center'>
        <div className='flex w-fit gap-3 mx-auto font-medium py-4'>
          <Link className='navbar__link relative mx-4' href="#">New Arrival</Link>
          <Link className='navbar__link relative mx-4' href="#">Best Seller</Link>
          <Link className='navbar__link relative mx-4' href="#">Featured</Link>
          <Link className='navbar__link relative mx-4' href="#">Special Offer</Link> 
        </div>
      </nav>

      <div className='grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-3 mt-4 lg:px-96'>
          {latestProductsData.map((product, index) => (
            <div 
              key={index}
              className='group relative p-1 rounded-lg overflow-hidden'> 
                <img 
                   src={product.img} 
                   alt={product.title} 
                   width={100}
                   height={100}
                   className='bg-gray-100 w-56 ml-4 p-1 transition-all duration-300 group-hover:bg-white group-hover:shadow-none'
                />

                <div className='absolute bottom-20 opacity-0 group-hover:opacity-100 left-4 flex flex-col gap-1'>
                   <button className='bg-white rounded-full p-2 shadow-md hover:bg-[#94b9de] !transition-all !duration-300'>
                      <Image src={"/cart.png"} alt='cart' width={15} height={15} />
                   </button>
                   <button className='bg-white rounded-full p-2 shadow-md hover:bg-[#94b9de] !transition-all !duration-300'>
                      <Image src={"/wishlist.png"} alt='like' width={15} height={15} />
                   </button>
                </div>

                <div className='latest-product p-4 flex justify-between items-center'>
                  <h3 className='text-sm text-blue-900 font-semibold text-right pr-6 whitespace-nowrap'>{product.title}</h3>
                  <p className='text-sm text-blue-900'>{product.price}</p>
                  <p className='text-sm text-pink-600 line-through'>{product.oldPrice}</p>
                </div>

            </div>
            ))}
      </div>
    </div>
  );
}

export default LatestProduct;