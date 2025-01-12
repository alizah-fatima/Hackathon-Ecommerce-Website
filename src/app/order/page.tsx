import React from "react";
import Link from "next/link";
import Image from "next/image";

function Order() {
  return (
    <div>

      <div className="bg-purple-100 h-60">
        <div>
          <h3 className="text-3xl text-blue-950 font-bold pt-16 ml-64">
            Order Completed
          </h3>
        </div>
        <div className="mt-2 ml-64">
          <Link href="/#" className="text-black text-md font-medium mr-2">
            Home .
          </Link>
          <Link href="#" className="text-black text-md font-medium mr-2">
            Pages .
          </Link>
          <Link href="/order" className="text-pink-500 text-md font-medium">
            Order Completed
          </Link>
        </div>
      </div>

      <div className="flex flex-col relative justify-center items-center h-[60%] w-[50%] lg:mx-[400px] mt-40 border border-gray-100 shadow-sm">
        <div className="flex items-center relative">
            <div className="absolute bg-gray-100 rounded-full w-16 h-16 -z-10 shadow-md"></div>
            <Image src={"/check.png"} alt="tick" width={50} height={50} className="relative z-0 ml-2" />
        </div>
        <h3 className="text-blue-950 text-3xl mt-10 font-bold">Your Order Is Completed!</h3>
        <p className="text-gray-500 text-md font-sans mt-6 text-center">Thank you for your Order! Your order is being processed and will be completed within 3-6 hours. You will receive an email confirmation when your order is completed.</p>
        <button className="text-white bg-pink-600 px-10 py-3 mt-6 mb-10 text-md font-medium shadow-md hover:bg-pink-500 hover:shadow-xl">Continue Shopping</button>
        <div className="absolute -top-5 -left-8">
           <Image src={"/time.png"} alt="time" width={60} height={60} />
        </div>
        <div className="absolute -bottom-8 -right-2"> 
           <Image src={"/order.png"} alt="order" width={50} height={50} />
        </div>
      </div>

      <div className="flex justify-center items-center">
        <Image src={"/list.png"} alt='list' width={900} height={900} className='mt-24 mb-10'/> 
      </div>

    </div>
  );
}

export default Order;
