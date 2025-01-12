"use client"

import React from 'react';
import ProductCard from './ProductCard';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

const generateRating = (rating: number) => {
  switch (rating) {
    case 1:
      return (
        <div className="flex gap-1 text-[20px] text-yellow-500">
          <FaStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
        </div>
      );
    case 2:
      return (
        <div className="flex gap-1 text-[20px] text-yellow-500">
          <FaStar />
          <FaStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
        </div>
      );
    case 3:
      return (
        <div className="flex gap-1 text-[20px] text-yellow-500">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaRegStar />
          <FaRegStar />
        </div>
      );
    case 4:
      return (
        <div className="flex gap-1 text-[20px] text-yellow-500">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaRegStar />
        </div>
      );
    case 5:
      return (
        <div className="flex gap-1 text-[20px] text-yellow-500">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      );
    default:
      return (
        <div className="flex gap-1 text-[20px] text-yellow-500">
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
        </div>
      );
  }
};

const productsData = [
  {
    img: "/chair1.png",
    title: "Cantilever Chair",
    rating: 4,
    code: "Y523201",
    price: "$42.00",
  },
  {
    img: "/chair8.png",
    title: "Cantilever Chair",
    rating: 5,
    code: "Y523201",
    price: "$42.00",
  },
  {
    img: "/chair3.png",
    title: "Cantilever Chair",
    rating: 4,
    code: "Y523201",
    price: "$42.00",
  },
  {
    img: "/chair4.png",
    title: "Cantilever Chair",
    rating: 5,
    code: "Y523201",
    price: "$42.00",
  },
  {
    img: "/chair1.png",
    title: "Cantilever Chair",
    rating: 4,
    code: "Y523201",
    price: "$40.00",
  },
  {
    img: "/chair6.png",
    title: "Cantilever Chair",
    rating: 5,
    code: "Y523201",
    price: "$42.00",
  },
  {
    img: "/chair7.png",
    title: "Cantilever Chair",
    rating: 4,
    code: "Y523201",
    price: "$42.00",
  },
];

const Products = () => {

      const settings = {
          dots: true, 
          infinite: true,
          speed: 500,
          centerMode: false,
          slidesToShow: 4,
          slidesToScroll: 4,
          nextArrow: <div className='next-arrow'>➡</div>,
          prevArrow: <div className='prev-arrow'>⬅</div>,
      }

  return (
    <div className='bg-white py-8'>
      <div className='container mx-auto max-w-4xl bg-white'>
        <h2 className="font-bold text-4xl pb-8 mt-16 text-center text-blue-950 font-sans">Featured Products</h2>
        <div className="mx-auto mt-8 mb-5 px-1 relative">
        <Slider{...settings}>
          {productsData.map((item, index) => (
            <div className='px-1' key={index}>
              <ProductCard
                key={index}
                img={item.img}
                title={item.title}
                rating={generateRating(item.rating)}
                code={item.code}
                price={item.price}
              />
            </div>
          ))}
        </Slider>
        </div>
      </div>
    </div>
  );
};

export default Products;
