import React from "react";
import Link from "next/link";
import Image from "next/image";
// import Client from "./client";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function About() {
  return (
    <div>
      <div className="bg-purple-100 h-60">
        <div>
          <h3 className="text-3xl text-blue-950 font-bold pt-16 ml-64">
            About Us
          </h3>
        </div>
        <div className="mt-2 ml-64">
          <Link href="/#" className="text-black text-md font-medium mr-2">
            Home .
          </Link>
          <Link href="#" className="text-black text-md font-medium mr-2">
            Pages .{" "}
          </Link>
          <Link href="/about" className="text-pink-500 text-md font-medium">
            About Us
          </Link>
        </div>
      </div>

      <div className="mt-32 flex flex-row justify-center items-center">
        <div className="relative ">
          <div className="absolute bg-blue-800 w-[420px] h-[320px] top-0 left-0 rounded-md"></div>
          <Image
            src={"/aboutus.jpeg"}
            alt="about"
            width={300}
            height={300}
            className="relative z-10 rounded-sm"
            style={{ objectFit: "cover", height: "300px", width: "400px" }}
          />
        </div>
        <div className="ml-14 w-[400px]">
          <h3 className="text-3xl text-blue-950 font-bold mt-4">
            Know About Our Ecomerce <br />
            Business, History
          </h3>
          <p className="text-gray-500 mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quia
            nisi placeat quo voluptatum doloremque nam rep adipisicing elit.
            Veniam quia nisi placeat quo voluptatum doloremque nam repudiandae?
          </p>
          <button className="bg-pink-600 text-white font-normal mt-8 py-2 px-5">
            <Link href={"/contact"}>Contact Us</Link>
          </button>
        </div>
      </div>

      <div className="mt-24">
        <div>
          <h2 className="font-bold text-4xl pb-8 mt-12 text-center text-blue-950 font-sans">
            Our Features
          </h2>
        </div>
        <div className="flex items-center justify-center mt-6 gap-7 h-auto px-4 lg:px-80">
          <div className="bg-white text-black rounded-md p-6 shadow-lg text-center hover:shadow-2xl transition-shadow duration-300 group">
            <div className="flex justify-center items-center mb-4">
              <Image src="/delivery.png" alt="support" width={50} height={50} />
            </div>
            <h3 className="font-bold text-blue-900">Free Delivery</h3>
            <p className="text-gray-500 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto, possimus!
            </p>
            <div className="border-b-4 border-transparent group-hover:border-yellow-400 transition-all duration-300 mt-4"></div>
          </div>

          <div className="bg-white text-black rounded-md p-6 shadow-lg text-center hover:shadow-2xl transition-shadow duration-300 group">
            <div className="flex justify-center items-center mb-4">
              <Image src="/coin.png" alt="delivery" width={50} height={50} />
            </div>
            <h3 className="font-bold text-blue-900">100% Cash Back</h3>
            <p className="text-gray-500 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto, possimus!
            </p>
            <div className="border-b-4 border-transparent group-hover:border-yellow-400 transition-all duration-300 mt-4"></div>
          </div>
          
          <div className="bg-white text-black rounded-md p-6 shadow-lg text-center hover:shadow-2xl transition-shadow duration-300 group">
            <div className="flex justify-center items-center mb-4">
              <Image src="/badge.png" alt="payment" width={50} height={50} />
            </div>
            <h3 className="font-bold text-blue-900">Quality Product</h3>
            <p className="text-gray-500 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto, possimus!
            </p>
            <div className="border-b-4 border-transparent group-hover:border-yellow-400 transition-all duration-300 mt-4"></div>
          </div>
          
          <div className="bg-white text-black rounded-md p-6 shadow-lg text-center hover:shadow-2xl transition-shadow duration-300 group">
            <div className="flex justify-center items-center mb-4">
              <Image src="/support.png" alt="shipping" width={50} height={50} />
            </div>
            <h3 className="font-bold text-blue-900">24/7 Support</h3>
            <p className="text-gray-500 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto, possimus!
            </p>
            <div className="border-b-4 border-transparent group-hover:border-yellow-400 transition-all duration-300 mt-4"></div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default About;
