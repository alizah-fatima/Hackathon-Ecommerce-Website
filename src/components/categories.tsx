import React from 'react'
import Slider from 'react-slick';

const CategoriesData = [
    {
        img: "/chair1.png",
        title: "Mini LCW Chair",
        price:  "$56.00",
    },
    {
        img: "/chair3.png",
        title: "Mini LCW Chair",
        price:  "$56.00",
    },
    {
        img: "/chair6.png",
        title: "Mini LCW Chair",
        price:  "$56.00",
    },
    {
        img: "/chair16.png",
        title: "Mini LCW Chair",
        price:  "$56.00",
    },
    {
        img: "/chair15.png",
        title: "Mini LCW Chair",
        price:  "$56.00",
    },
    {
        img: "/chair3.png",
        title: "Mini LCW Chair",
        price:  "$56.00",
    },
    {
        img: "/chair4.png",
        title: "Mini LCW Chair",
        price:  "$56.00",
    },
    {
        img: "/chair16.png",
        title: "Mini LCW Chair",
        price:  "$56.00",
    },
];

const Categories = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        nextArrow: <div className='next-arrow'>➡</div>,
        prevArrow: <div className='prev-arrow'>⬅</div>,
    }

  return (
    <div className='bg-white'>
        <div className='container mx-auto max-w-4xl'>
            <h3 className='font-bold text-4xl pb-8 mt-28 text-center text-blue-950 font-sans'>Top Categories</h3>
            <div className='relative px-1 mx-auto'>
                <Slider {...settings}>
                    {CategoriesData.map((product, index) => (
                        <div key={index} className='px-1 mt-16'>
                            <div className='relative group'>
                                <img src={product.img} alt={product.title} className='bg-gray-50 rounded-full p-8 shadow-lg' />
                                <div className='absolute inset-0 rounded-full border-b-8 border-transparent group-hover:border-b-purple-500 transition-all duration-300'></div>
                                <div className='absolute opacity-0 bottom-4 group-hover:opacity-100 transition-all duration-300'>
                                    <button className='bg-green-500 text-white text-sm px-3 py-1 rounded-sm ml-14 shadow-medium'>
                                        View Shop
                                    </button>
                                </div>
                            </div>  
                            <div className='flex flex-col mt-2 mb-6 items-center justify-center'>  
                              <h3 className='text-lg text-blue-950 font-medium'>{product.title}</h3> 
                              <p className='text-md text-blue-950 font-normal'>{product.price}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default Categories;