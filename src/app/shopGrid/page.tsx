"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IoGrid } from "react-icons/io5";
import { ImList } from "react-icons/im";

const ShopData = [
  {
    img: "/shop1.png",
    name: "amet coctetur",
    price: "$26.00",
    oldPrice: "$42.00",
  },
  {
    img: "/shop2.png",
    price: "$26.00",
    name: "Vtatis magni",
    oldPrice: "$42.00",
  },
  {
    img: "/shop3.png",
    price: "$26.00",
    name: "adiping elit",
    oldPrice: "$42.00",
  },
  {
    img: "/shop4.png",
    price: "$26.00",
    name: "rerum archio",
    oldPrice: "$42.00",
  },
  {
    img: "/shop11.png",
    price: "$26.00",
    name: "ipsa quasae",
    oldPrice: "$42.00",
  },
  {
    img: "/shop6.png",
    price: "$26.00",
    name: "iste ea qui",
    oldPrice: "$42.00",
  },
  {
    img: "/shop10.png",
    price: "$26.00",
    name: "ipsum dolor",
    oldPrice: "$42.00",
  },
  {
    img: "/shop8.png",
    price: "$26.00",
    name: " maxime hic",
    oldPrice: "$42.00",
  },
  {
    img: "/shop2.png",
    name: "autem espum",
    price: "$26.00",
    oldPrice: "$42.00",
  },
  {
    img: "/shop10.png",
    price: "$26.00",
    name: "tempo aliqam",
    oldPrice: "$42.00",
  },
  {
    img: "/shop11.png",
    price: "$26.00",
    name: "atque totam",
    oldPrice: "$42.00",
  },
  {
    img: "/shop3.png",
    price: "$26.00",
    name: "reicie est",
    oldPrice: "$42.00",
  },
];

function handleViewChange(event: React.ChangeEvent<HTMLSelectElement>) {
  const selectedValue = event.target.value;

  if (selectedValue === 'grid') {
    window.location.href = '/shopGrid'; 
  } else if (selectedValue === 'list') {
    window.location.href = '/shopList'; 
  }
}

function Shop() {
  return (
    <div>
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
          <Link href="/shopGrid" className="text-pink-500 text-md font-medium">
            Shop Grid Demo
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

      <div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pl-60 p-36 gap-y-10 mt-2">
          {ShopData.map((item, index) => (
            <div key={index} className="relative group">
              <Image
                src={item.img}
                alt={item.name}
                width={250}
                height={200}
                className="bg-slate-100 p-9 group-hover:bg-green-50"
              />
              <p className="text-blue-800 text-lg font-medium text-center -ml-7">
                {item.name}
              </p>
              <div className="flex flex-row">
                <p className="text-blue-800 text-md font-normal ml-20">
                  {item.price}
                </p>
                <p className="text-pink-600 text-md font-normal ml-2 line-through">
                  {item.oldPrice}
                </p>
              </div>
              <div className="absolute top-2 left-2 flex gap-2 opacity-0 group-hover:opacity-100">
                <button className="bg-white text-blue-900 rounded-full p-2 shadow-md hover:bg-blue-400 hover:text-white transition-all duration-300">
                  <Image src={"/cart.png"} alt="cart" width={15} height={15} />
                </button>
                <button className="bg-white text-blue-900 rounded-full p-2 shadow-md hover:bg-blue-400 hover:text-white transition-all duration-300">
                  <Image
                    src={"/wishlist.png"}
                    alt="like"
                    width={15}
                    height={15}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <Image
          src={"/list.png"}
          alt="list"
          width={900}
          height={900}
          className="mt-1"
        />
      </div>
    </div>
  );
}

export default Shop;
