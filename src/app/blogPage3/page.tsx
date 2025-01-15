import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { SiDiscord } from "react-icons/si";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineMessage } from "react-icons/ai";

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
  }
};
const blogData = [
  {
    img: "/blogA.jpeg",
    name: "Ipsum dolor",
    price: "$32.00",
    oldPrice: "$56.00",
    rating: 4,
  },
  {
    img: "/blogB.jpeg",
    name: "Ipsum dolor",
    price: "$32.00",
    oldPrice: "$56.00",
    rating: 4,
  },
  {
    img: "/blogC.jpeg",
    name: "Ipsum dolor",
    price: "$32.00",
    oldPrice: "$56.00",
    rating: 5,
  },
  {
    img: "/chair16.png",
    name: "Ipsum dolor",
    price: "$32.00",
    oldPrice: "$56.00",
    rating: 3,
  },
];

function BlogPage() {
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
            <p className="text-gray-500 mt-12 font-serif">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
              vitae maiores ratione cupiditate iusto reiciendis et vero, dolores
              velit, earum eos debitis, esse culpa. Laudantium veniam quia
              ducimus tempore sit A saepe accusamus consequuntur ab, commodi
              mollitia facere beatae vero sit amet consectetur adipisicing elit.
              dupiditate iusto reiciendis et vero, dolores velit, earum eos
              debitis, esse culpa. Laudantium veniam quia ducimus tempore sit.
            </p>
            <p className="bg-gray-50 text-gray-500 mt-12 font-serif border border-l-2 border-pink-500 border-r-gray-50 border-t-gray-50 border-b-gray-50 pl-2 pt-3 pb-3 pr-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
              nulla saepe explicabo eius unde cupiditate voluptate, nisi ut
              aperiam non, sit amet consectetur adipisicing elit. Deserunt nulla
              saepe explicabo eius unde cupiditate voluptate.
            </p>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 mt-12">
              <div className="flex flex-row gap-x-4 ml-16">
                <Image
                  src={"/sale1.jpeg"}
                  alt="post1"
                  width={400}
                  height={100}
                  className="w-[700px] h-[200px] object-cover"
                />
                <Image
                  src={"/sale2.jpeg"}
                  alt="post1"
                  width={400}
                  height={100}
                  className="w-[700px] h-[200px] object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-gray-500 mt-12 font-serif">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo culpa aperiam ipsa itaque aliquid. Reprehenderit totam
                vitae quae fuga debitis blanditiis reiciendis quam quod, velit
                obcaecati labore sunt earum magni.Deserunt nulla saepe explicabo
                eius unde cupiditate voluptate, nisi ut aperiam non, sit amet
                consectetur adipisicing elit aperiam ipsa itaque aliquid.
                Reprehenderit totam.
              </p>
            </div>

            <div className="grid sm:grid-cols-1 md:grid-cols lg:grid-cols-3 xl:grid-cols-4 mt-12 gap-x-2 ml-2 mr-2">
              {blogData.map((item, index) => (
                <div key={index} className="">
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={200}
                    height={200}
                    className="w-[180px] h-[210px] object-cover"
                  />
                  <h3 className="text-md text-blue-800 font-medium text-center">
                    {item.name}
                  </h3>
                  <div className="flex flex-row">
                    <p className="text-sm text-gray-600 font-normal mr-1">
                      {item.price}
                    </p>
                    <p className="text-sm text-pink-600 font-normal line-through mr-1">
                      {item.oldPrice}
                    </p>
                    <p className="w-20 h-20 mr-1 ml-1">
                      {generateRating(item.rating)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <p className="text-gray-500 mt-12 font-serif">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente perspiciatis maxime alias error deleniti ut, doloribus
                repudiandae quam at molestiae necessitatibus perferendis dicta
                ipsam saepe reprehenderit. Ad voluptates corporis vero
                nostrum,Sapiente perspiciatis maxime alias error deleniti ut,
                doloribus repudiandae quam at molestiae quisquam, facere quod
                facilis pariatur magnam maxime, sunt ipsam?
              </p>
              <p className="text-gray-500 mt-12 font-serif">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente perspiciatis maxime alias error deleniti ut, doloribus
                repudiandae quam at molestiae necessitatibus perferendis dicta
                ipsam saepe reprehenderit. Ad voluptates corporis vero nostrum,
                quisquam,Sapiente perspiciatis maxime alias error deleniti ut,
                doloribus repudiandae quam at molestiae facere quod facilis
                pariatur magnam maxime, sunt ipsam?
              </p>
            </div>

            <div className="flex flex-row justify-center items-center mt-16 gap-x-2">
              <FaFacebook className="w-5 h-5" />
              <AiFillTwitterCircle className="w-5 h-5" />
              <SiDiscord className="w-5 h-5" />
            </div>

            <div className="bg-gray-100 w-full h-12 mt-10 flex items-center justify-between px-8">
              <Link href={"/blogPage2"} className="flex items-center text-gray-700">
                <FaArrowLeft className="mr-2" /> Previous Post
              </Link>
              <Link href={"/blogPage1"} className="flex items-center text-gray-700">
                Next Post <FaArrowRight className="ml-2" />
              </Link>
            </div>

            <div className="grid sm:grid-cols-1 mt-16 w-[700px] h-[200px] gap-y-4">
              <div className="flex flex-row border shadow-xl border-t-gray-200 border-gray-50 border-opacity-25 p-3">
                <Image
                  src={"/comment1.jpeg"}
                  alt="comment"
                  width={80}
                  height={50}
                  className="w-[120px] h-[80px] object-cover"
                />
                <div className="flex flex-col ml-3">
                  <div className="flex flex-row mt-1">
                    <span className="text-blue-800 text-sm font-medium">
                      Ipsum dolor
                    </span>
                    <span className="text-gray-400 text-sm ml-5">
                      Jan 09 2020
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam omnis debitis voluptates porro velit cupiditate
                    architecto hic consequatur officia deserunt.
                  </p>
                </div>
              </div>
              <div className="flex flex-row border shadow-xl border-t-gray-200 border-gray-50 border-opacity-25 p-3">
                <Image
                  src={"/comment2.jpeg"}
                  alt="comment"
                  width={80}
                  height={50}
                  className="w-[120px] h-[80px] object-cover"
                />
                <div className="flex flex-col ml-3">
                  <div className="flex flex-row mt-1">
                    <span className="text-blue-800 text-sm font-medium">
                      Consectetur adi
                    </span>
                    <span className="text-gray-400 text-sm ml-5">
                      Jan 09 2020
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam omnis debitis voluptates porro velit cupiditate
                    architecto hic consequatur officia deserunt.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col mt-20">
              <div className="flex flex-row">
                <div className="flex flex-row border border-gray-400">
                  <VscAccount className="mt-3 mr-2 ml-3" />
                  <input
                    type="text"
                    placeholder="Your Name*"
                    className="px-14 py-2"
                  />
                </div>
                <div className="flex flex-row border border-gray-400 ml-10">
                  <HiOutlineMail className="mt-3 mr-2 ml-3" />
                  <input
                    type="text"
                    placeholder="Enter Your Email"
                    className="px-14 py-2"
                  />
                </div>
              </div>
              <div className="flex flex-col mt-6">
                <div className="flex flex-row border border-gray-400 mr-20 px-6 py-20 ">
                  <AiOutlineMessage className="mt-1 mr-2" />
                  <input type="text" placeholder="Write Your Message*" />
                </div>
              </div>
              <div className="flex flex-row mt-4">
                <input type="checkbox" />{" "}
                <p className="text-gray-500 ml-2">
                  Save my name, email, and website in this browser for the next
                  time.
                </p>
              </div>
              <button className="bg-pink-600 text-white px-12 py-2 font-medium mt-6 mr-40 ml-24 shadow-md hover:bg-pink-500 hover:shadow-xl">
                 <Link href={"/shopGrid"}>Continue Shopping</Link>
              </button>
            </div>
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

export default BlogPage;
