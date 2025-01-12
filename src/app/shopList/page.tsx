"use client"

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IoGrid } from "react-icons/io5";
import { ImList } from "react-icons/im";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function handleViewChange(event: React.ChangeEvent<HTMLSelectElement>) {
  const selectedValue = event.target.value;

  if (selectedValue === "grid") {
    window.location.href = "/shopGrid";
  } else if (selectedValue === "list") {
    window.location.href = "/shopList";
  }
};

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

const shopListData = [
    {
        img: "/grid1.jpeg",
        name: "amet consectetur",
        price: "$26.00",
        oldPrice: "$52.00", 
        rating: 4,
        para: "Lorem ipsum dolor sit  adipisicing elit. Saepe aspernatur iste sit temporibus sequi. Totam consequuntur, facilis quas, iure delectus suscipit.",
    },
    {
        img: "/grid2.jpeg",
        name: "amet consectetur",
        price: "$26.00",
        oldPrice: "$52.00", 
        rating: 5,
        para: "Lorem ipsum dolor sit  adipisicing elit. Saepe aspernatur iste sit temporibus sequi. Totam consequuntur, facilis quas, iure delectus suscipit.",
    },
    {
        img: "/grid3.jpeg",
        name: "amet consectetur",
        price: "$26.00",
        oldPrice: "$52.00", 
        rating: 4,
        para: "Lorem ipsum dolor sit  adipisicing elit. Saepe aspernatur iste sit temporibus sequi. Totam consequuntur, facilis quas, iure delectus suscipit.",
    },
    {
        img: "/grid4.jpeg",
        name: "amet consectetur",
        price: "$26.00",
        oldPrice: "$52.00", 
        rating: 5,
        para: "Lorem ipsum dolor sit  adipisicing elit. Saepe aspernatur iste sit temporibus sequi. Totam consequuntur, facilis quas, iure delectus suscipit.",
    },
    {
        img: "/grid1.jpeg",
        name: "amet consectetur",
        price: "$26.00",
        oldPrice: "$52.00", 
        rating: 3,
        para: "Lorem ipsum dolor sit  adipisicing elit. Saepe aspernatur iste sit temporibus sequi. Totam consequuntur, facilis quas, iure delectus suscipit.",
    },
    {
        img: "/grid6.jpeg",
        name: "amet consectetur",
        price: "$26.00",
        oldPrice: "$52.00", 
        rating: 4,
        para: "Lorem ipsum dolor sit  adipisicing elit. Saepe aspernatur iste sit temporibus sequi. Totam consequuntur, facilis quas, iure delectus suscipit.",
    },
    {
        img: "/grid2.jpeg",
        name: "amet consectetur",
        price: "$26.00",
        oldPrice: "$52.00", 
        rating: 5,
        para: "Lorem ipsum dolor sit  adipisicing elit. Saepe aspernatur iste sit temporibus sequi. Totam consequuntur, facilis quas, iure delectus suscipit.",
    },
]

function ShopList() {
  return (
    <main>
      <div className="bg-purple-100 h-60">
        <div>
          <h3 className="text-3xl text-blue-950 font-bold pt-16 ml-64">
            Shop Grid Demo
          </h3>
        </div>
        <div className="mt-2 ml-64">
          <Link href="/#" className="text-black text-md font-medium mr-2">
            Home .
          </Link>
          <Link href="/#" className="text-black text-md font-medium mr-2">
            Pages .
          </Link>
          <Link href="/shopList" className="text-pink-500 text-md font-medium">
            Shop List Demo
          </Link>
        </div>
      </div>

      <div className="flex flex-row lg:mx-72 pl-10 mt-14">
        <div>
          <h4 className="text-blue-950 text-xl font-semibold">
            Ecommerce Accessories & Fashion Items
          </h4>
        </div>
        <div className="ml-32">
          Sort By:
          <select
            name="Sort By:"
            id="types"
            className="border px-2 py-0 ml-2 hover:shadow-sm hover:border-gray-300"
          >
            <option value="Best Match">Best Match</option>
            <option value="Discount Items">Discount Items</option>
            <option value="Top Categories">Top Categories</option>
          </select>
        </div>
        <div className="flex flex-row ml-10 gap-x-2">
          View: <IoGrid className="w-3 mt-1" />
          <ImList className="w-3 mt-1" />
          <select
            name="View"
            id="view"
            className="border px-2 py-0 ml-2 hover:shadow-sm hover:border-gray-300"
            onChange={handleViewChange}
          >
            <option value="grid">Grid</option>
            <option value="list">List</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col mt-12 pl-64 pr-64">
        {shopListData.map((item, index) => (
            <div key={index}>
                <div className="flex flex-row mt-14">
                    <Image src={item.img} alt={item.name} width={100} height={100} className="w-[380px] h-[200px] object-cover"/>
                    <div className="flex flex-col ml-7 mt-5">
                        <p className="text-blue-900 text-lg font-semibold ">{item.name}</p>
                        <div className="flex flex-row">
                            <p className="text-blue-800 font-medium text-md">{item.price}</p>
                            <p className="text-pink-600 font-medium text-md ml-3 line-through">{item.oldPrice}</p>
                            <p className="ml-3 w-20 mt-0">{generateRating(item.rating)}</p>
                        </div>
                        <p className="text-gray-500">{item.para}</p>
                        <div>
                          <button><MdOutlineShoppingCart /></button>
                          <button className="ml-2"><FaRegHeart /></button>
                        </div>
                    </div>
                </div>
            
            </div>
        ))}
      </div>

    </main>
  );
}

export default ShopList;
