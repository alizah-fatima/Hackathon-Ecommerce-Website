import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { SiDiscord } from "react-icons/si";

function Blog() {
  return (
    <div>
      <div className="bg-purple-100 h-60">
        <div>
          <h3 className="text-3xl text-blue-950 font-bold pt-16 ml-64">
            Blog Page
          </h3>
        </div>
        <div className="mt-2 ml-64">
          <Link href="/#" className="text-black text-md font-medium mr-2">
            Home .
          </Link>
          <Link href="/#" className="text-black text-md font-medium mr-2">
            Pages .
          </Link>
          <Link href="/blog" className="text-pink-500 text-md font-medium">
            Blog Page
          </Link>
        </div>
      </div>

      <div className="flex flex-row lg:mx-56 mt-20">
        <div className="flex flex-col">
          <div className="mt-16">
            <Image
              src={"/blogpage1.jpeg"}
              alt="blog1"
              width={700}
              height={300}
              className="h-[300px] w-[700px] object-cover"
            />
            <div className="flex flex-row mt-4 items-center space-x-4 text-gray-600 text-sm">
              <span className="flex items-center space-x-1">
                <Image src={"/pen.png"} alt="pen" width={15} height={15} />
                <span className="bg-pink-100 px-2 py-0">Surf Auxion</span>
              </span>
              <span className="flex items-center space-x-1">
                <Image
                  src={"/calendar.png"}
                  alt="calender"
                  width={15}
                  height={15}
                />
                <span className="bg-yellow-100 px-2 py-0">Aug 09 2020</span>
              </span>
            </div>
            <h3 className="text-2xl text-blue-950 font-semibold mt-3">
              <Link href={"/blogPage1"}>
                Ipsum dolor sit amet consectetur adipisicing elit.
              </Link>
            </h3>
            <p className="text-gray-500 mt-6 font-serif">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. A saepe
              accusamus consequuntur ab, commodi mollitia facere beatae vero.
              sit amet consectetur adipisicing elit. A saepe accusamus
              consequuntur ab.
            </p>
            <span className="flex flex-row items-center text-blue-950 font-medium text-md mt-3">
              <Link href={"/"} className="flex flex-row">
                Read More
                <span className="ml-2 mt-3 bg-pink-700 rounded-full w-1 h-1"></span>
              </Link>
            </span>
          </div>

          <div className="mt-16">
            <Image
              src={"/blogpage2.jpeg"}
              alt="blog1"
              width={700}
              height={300}
              className="h-[300px] w-[700px] object-cover"
            />
            <div className="flex flex-row mt-4 items-center space-x-4 text-gray-600 text-sm">
              <span className="flex items-center space-x-1">
                <Image src={"/pen.png"} alt="pen" width={15} height={15} />
                <span className="bg-pink-100 px-2 py-0">Surf Auxion</span>
              </span>
              <span className="flex items-center space-x-1">
                <Image
                  src={"/calendar.png"}
                  alt="calender"
                  width={15}
                  height={15}
                />
                <span className="bg-yellow-100 px-2 py-0">Aug 09 2020</span>
              </span>
            </div>
            <h3 className="text-2xl text-blue-950 font-semibold mt-3">
              <Link href={"/blogPage2"}>A saepe accusamus consequuntur ab.</Link>
            </h3>
            <p className="text-gray-500 mt-6 font-serif">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. A saepe
              accusamus consequuntur ab, commodi mollitia facere beatae vero.
              sit amet consectetur adipisicing elit. A saepe accusamus
              consequuntur ab.
            </p>
            <span className="flex flex-row items-center text-blue-950 font-medium text-md mt-3">
              <Link href={"/"} className="flex flex-row">
                Read More
                <span className="ml-2 mt-3 bg-pink-700 rounded-full w-1 h-1"></span>
              </Link>
            </span>
          </div>

          <div className="mt-16">
            <Image
              src={"/blogpage3.jpeg"}
              alt="blog1"
              width={700}
              height={300}
              className="h-[300px] w-[700px] object-cover"
            />
            <div className="flex flex-row mt-4 items-center space-x-4 text-gray-600 text-sm">
              <span className="flex items-center space-x-1">
                <Image src={"/pen.png"} alt="pen" width={15} height={15} />
                <span className="bg-pink-100 px-2 py-0">Surf Auxion</span>
              </span>
              <span className="flex items-center space-x-1">
                <Image
                  src={"/calendar.png"}
                  alt="calender"
                  width={15}
                  height={15}
                />
                <span className="bg-yellow-100 px-2 py-0">Aug 09 2020</span>
              </span>
            </div>
            <h3 className="text-2xl text-blue-950 font-semibold mt-3">
              <Link href={"/blogPage3"}>
                Commodi mollitia facere beatae vero.
              </Link>
            </h3>
            <p className="text-gray-500 mt-6 font-serif">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. A saepe
              accusamus consequuntur ab, commodi mollitia facere beatae vero.
              sit amet consectetur adipisicing elit. A saepe accusamus
              consequuntur ab.
            </p>
            <span className="flex flex-row items-center text-blue-950 font-medium text-md mt-3">
              <Link href={"/"} className="flex flex-row">
                Read More
                <span className="ml-2 mt-3 bg-pink-700 rounded-full w-1 h-1"></span>
              </Link>
            </span>
          </div>

          <div className="flex flex-row justify-center items-center mt-20 gap-x-2">
            <Link href={""}>
              <span className="border text-gray-500 border-gray-500 py-0 px-3 shadow-sm hover:bg-pink-600 hover:text-white hover:shadow-lg">
                1
              </span>
            </Link>
            <Link href={""}>
              <span className="border text-gray-500 border-gray-500 py-0 px-3 shadow-sm hover:bg-pink-600 hover:text-white hover:shadow-lg">
                2
              </span>
            </Link>
            <Link href={""}>
              <span className="border text-gray-500 border-gray-500 py-0 px-3 shadow-sm hover:bg-pink-600 hover:text-white hover:shadow-lg">
                3
              </span>
            </Link>
            <Link href={""}>
              <span className="border text-gray-500 border-gray-500 py-0 px-3 shadow-sm hover:bg-pink-600 hover:text-white hover:shadow-lg">
                4
              </span>
            </Link>
          </div>
        </div>

        <div className="flex flex-col ml-4 mr-8">
          <div>
            <h3 className="text-blue-950 text-xl font-serif font-semibold mt-16">
              Search
            </h3>
            <div className="flex flex-row border border-gray-300 shadow-sm hover:border-gray-600 hover:shadow-lg mt-3">
              <input
                type="text"
                placeholder="Search For Post"
                className="text-gray-300 border-none focus:outline-none py-1 ml-2 flex-1"
              />
              <Image
                src={"/search.png"}
                alt="search"
                width={10}
                height={5}
                className="opacity-40 ml-4 mr-8 py-2"
              />
            </div>
          </div>

          <div>
            <h3 className="text-blue-950 text-xl font-serif font-semibold mt-10">
              Categories
            </h3>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-x-2 mt-1">
              <Link
                href={""}
                className="text-blue-950 mt-2 hover:text-white hover:bg-pink-600 p-2"
              >
                Discount
              </Link>
              <Link
                href={""}
                className="text-blue-950 mt-2 hover:text-white hover:bg-pink-600 p-2"
              >
                Chairs
              </Link>
              <Link
                href={""}
                className="text-blue-950 mt-2 hover:text-white hover:bg-pink-600 p-2"
              >
                Woman
              </Link>
              <Link
                href={""}
                className="text-blue-950 mt-2 hover:text-white hover:bg-pink-600 p-2"
              >
                Man
              </Link>
              <Link
                href={""}
                className="text-blue-950 mt-2 hover:text-white hover:bg-pink-600 p-2"
              >
                Lifestyle
              </Link>
              <Link
                href={""}
                className="text-blue-950 mt-2 hover:text-white hover:bg-pink-600 p-2"
              >
                Decor
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-blue-950 text-xl font-serif font-semibold mt-10">
              Recent Post
            </h3>
            <div className="flex flex-row mt-3">
              <Image
                src={"/post1.jpeg"}
                alt="post1"
                width={50}
                height={20}
                className="w-[70px] h-[60px] mt-4 border border-opacity-0 rounded-sm object-cover"
              />
              <div className="flex flex-col mt-6">
                <Link href={""}>
                  <p className="text-blue-800 text-sm font-medium font-sans ml-2">
                    It is long established fact
                  </p>
                </Link>
                <p className="text-gray-500 text-sm font-sans ml-2">
                  Aug 09 2020
                </p>
              </div>
            </div>
            <div className="flex flex-row">
              <Image
                src={"/post2.jpeg"}
                alt="post1"
                width={50}
                height={20}
                className="w-[70px] h-[60px] mt-4 border border-opacity-0 rounded-sm object-cover"
              />
              <div className="flex flex-col mt-6">
                <Link href={""}>
                  <p className="text-blue-800 text-sm font-medium font-sans ml-2">
                    It is long established fact
                  </p>
                </Link>
                <p className="text-gray-500 text-sm font-sans ml-2">
                  Aug 09 2020
                </p>
              </div>
            </div>
            <div className="flex flex-row">
              <Image
                src={"/post3.jpeg"}
                alt="post1"
                width={50}
                height={20}
                className="w-[70px] h-[60px] mt-4 border border-opacity-0 rounded-sm object-cover"
              />
              <div className="flex flex-col mt-6">
                <Link href={""}>
                  <p className="text-blue-800 text-sm font-medium font-sans ml-2">
                    It is long established fact
                  </p>
                </Link>
                <p className="text-gray-500 text-sm font-sans ml-2">
                  Aug 09 2020
                </p>
              </div>
            </div>
            <div className="flex flex-row">
              <Image
                src={"/post4.jpeg"}
                alt="post1"
                width={50}
                height={20}
                className="w-[70px] h-[60px] mt-4 border border-opacity-0 rounded-sm object-cover"
              />
              <div className="flex flex-col mt-6">
                <Link href={""}>
                  <p className="text-blue-800 text-sm font-medium font-sans ml-2">
                    It is long established fact
                  </p>
                </Link>
                <p className="text-gray-500 text-sm font-sans ml-2">
                  Aug 09 2020
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-blue-950 text-xl font-serif font-semibold mt-10">
              Sale Product
            </h3>
            <div className="flex flex-row mt-6">
              <Image
                src={"/sale1.jpeg"}
                alt="sale1"
                width={50}
                height={20}
                className="w-[70px] h-[60px] mt-4 border border-opacity-0 rounded-sm object-cover"
              />
              <div className="flex flex-col mt-6">
                <Link href={""}>
                  <p className="text-blue-800 text-sm font-medium font-sans ml-2">
                    Ipsum dolor sit amet
                  </p>
                </Link>
                <p className="text-gray-500 text-sm font-sans ml-2">
                  Aug 09 2020
                </p>
              </div>
            </div>
            <div className="flex flex-row mt-2">
              <Image
                src={"/sale2.jpeg"}
                alt="sale1"
                width={50}
                height={20}
                className="w-[70px] h-[60px] mt-4 border border-opacity-0 rounded-sm object-cover"
              />
              <div className="flex flex-col mt-6">
                <Link href={""}>
                  <p className="text-blue-800 text-sm font-medium font-sans ml-2">
                    Ipsum dolor sit amet
                  </p>
                </Link>
                <p className="text-gray-500 text-sm font-sans ml-2">
                  Aug 09 2020
                </p>
              </div>
            </div>
            <div className="flex flex-row mt-2">
              <Image
                src={"/sale3.jpeg"}
                alt="sale1"
                width={50}
                height={20}
                className="w-[70px] h-[60px] mt-4 border border-opacity-0 rounded-sm object-cover"
              />
              <div className="flex flex-col mt-6">
                <Link href={""}>
                  <p className="text-blue-800 text-sm font-medium font-sans ml-2">
                    Ipsum dolor sit amet
                  </p>
                </Link>
                <p className="text-gray-500 text-sm font-sans ml-2">
                  Aug 09 2020
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-blue-950 text-xl font-serif font-semibold mt-10">
              Offer Product
            </h3>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 mt-6 gap-x-3 gap-y-2">
              <div className="flex flex-col mt-2">
                <Image
                  src={"/offer1.jpeg"}
                  alt="offer1"
                  width={70}
                  height={40}
                  className="object-cover w-[120px] h-[70px] border border-opacity-15 rounded-sm"
                />
                <p className="text-blue-800 font-medium text-sm text-center mt-1">
                  Ipsum dolor sit
                </p>
                <p className="text-gray-500 text-sm text-center">
                  $12.00-$15.00
                </p>
              </div>
              <div className="flex flex-col mt-2">
                <Image
                  src={"/offer2.jpeg"}
                  alt="offer1"
                  width={70}
                  height={40}
                  className="object-cover w-[120px] h-[70px] border border-opacity-15 rounded-sm"
                />
                <p className="text-blue-800 font-medium text-sm text-center mt-1">
                  Ipsum dolor sit
                </p>
                <p className="text-gray-500 text-sm text-center">
                  $12.00-$15.00
                </p>
              </div>
              <div className="flex flex-col mt-2">
                <Image
                  src={"/offer3.jpeg"}
                  alt="offer1"
                  width={70}
                  height={40}
                  className="object-cover w-[120px] h-[70px] border border-opacity-15 rounded-sm"
                />
                <p className="text-blue-800 font-medium text-sm text-center mt-1">
                  Ipsum dolor sit
                </p>
                <p className="text-gray-500 text-sm text-center">
                  $12.00-$15.00
                </p>
              </div>
              <div className="flex flex-col mt-2">
                <Image
                  src={"/offer4.jpeg"}
                  alt="offer1"
                  width={70}
                  height={40}
                  className="object-cover w-[120px] h-[70px] border border-opacity-15 rounded-sm"
                />
                <p className="text-blue-800 font-medium text-sm text-center mt-1">
                  Ipsum dolor sit
                </p>
                <p className="text-gray-500 text-sm text-center">
                  $12.00-$15.00
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-blue-950 text-xl font-serif font-semibold mt-10">
              Follow
            </h3>
            <div className="flex flex-row mt-6 gap-x-2">
              <FaFacebook className="w-5 h-5" />
              <AiFillTwitterCircle className="w-5 h-5" />
              <SiDiscord className="w-5 h-5" />
            </div>
          </div>

          <div>
            <h3 className="text-blue-950 text-xl font-serif font-semibold mt-10">
              Tags
            </h3>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-2 mt-4 underline">
              <Link href={""} className="text-blue-800 hover:text-pink-600">
                General
              </Link>
              <Link href={""} className="text-blue-800 hover:text-pink-600">
                Common
              </Link>
              <Link href={""} className="text-blue-800 hover:text-pink-600">
                Discount
              </Link>
              <Link href={""} className="text-blue-800 hover:text-pink-600">
                Latest
              </Link>
              <Link href={""} className="text-blue-800 hover:text-pink-600">
                Featured
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <Image
          src={"/list.png"}
          alt="list"
          width={900}
          height={900}
          className="mt-16"
        />
      </div>
    </div>
  );
}

export default Blog;
