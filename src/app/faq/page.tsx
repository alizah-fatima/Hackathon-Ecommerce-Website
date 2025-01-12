import React from "react";
import Link from "next/link";

function FAQ() {
  return (
    <div>
      <div className="bg-purple-100 h-60">
        <div>
          <h3 className="text-3xl text-blue-950 font-bold pt-16 ml-64">FAQ</h3>
        </div>
        <div className="mt-2 ml-64">
          <Link href="/#" className="text-black text-md font-medium mr-2">
            Home .
          </Link>
          <Link href="#" className="text-black text-md font-medium mr-2">
            Pages .{" "}
          </Link>
          <Link href="/faq" className="text-pink-500 text-md font-medium">
            FAQ
          </Link>
        </div>
      </div>

      <div className="flex flex-row mt-16 lg:mx-64">
        <div className="w-[600px] h-[600px] mr-6">
          <h3 className="text-blue-950 text-3xl font-bold text-left mt-20">
            General Information
          </h3>
          <div className="flex flex-col mt-12">
            <h4 className="text-blue-950 text-xl font-semibold text-left">
              Ipsum dolor sit amet consectetur adipisicing?
            </h4>
            <p className="text-gray-500 text-md font-serif text-left mt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              omnis consectetur officiis sunt necessitatibus laudantium.
            </p>
          </div>
          <div className="flex flex-col mt-8">
            <h4 className="text-blue-950 text-xl font-semibold text-left">
              Nesciunt deleniti reiciendis ea quia quas
            </h4>
            <p className="text-gray-500 text-md font-serif text-left mt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              omnis consectetur officiis sunt necessitatibus laudantium.
            </p>
          </div>
          <div className="flex flex-col mt-8">
            <h4 className="text-blue-950 text-xl font-semibold text-left">
              Doloremque ut et possimus reprehenderit odio velit
            </h4>
            <p className="text-gray-500 text-md font-serif text-left mt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              omnis consectetur officiis sunt necessitatibus laudantium.
            </p>
          </div>
          <div className="flex flex-col mt-8">
            <h4 className="text-blue-950 text-xl font-semibold text-left">
              Possimus reprehenderit deleniti sit amet reiciendis
            </h4>
            <p className="text-gray-500 text-md font-serif text-left mt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              omnis consectetur officiis sunt necessitatibus laudantium.
            </p>
          </div>
        </div>

        <div className="bg-gray-100 mt-16 ml-3 w-[600px] shadow-sm">
          <h3 className="text-blue-950 text-xl font-serif font-bold text-left mt-14 pl-10">Ask a Question</h3>
          <div className="flex flex-col gap-6 mt-16 ml-8 mr-8">
            <input type="text" placeholder="Your Name*" id="name" className="py-2 pl-2 border border-gray-300 hover:border-gray-500"/>
            <input type="text" placeholder="Subject*" id="subject" className="py-2 pl-2 border border-gray-300 hover:border-gray-500" />
            <input type="text" placeholder="Type Your Message*" id="message" className="pb-24 pl-2 h-36 border border-gray-300 hover:border-gray-500"/>
            <button className="bg-pink-600 text-white shadow-md ml-16 mr-16 px-4 mb-20 py-2 mt-8 hover:bg-pink-500 hover:shadow-2xl">Send Mail</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
