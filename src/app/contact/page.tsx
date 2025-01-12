import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Contact() {
  return (
    <div>
        <div className='bg-purple-100 h-60'>
          <div>
             <h3 className='text-3xl text-blue-950 font-bold pt-16 ml-64'>Contact Us</h3>
           </div>
           <div className='mt-2 ml-64'>
              <Link href='/#' className='text-black text-md font-medium mr-2'>Home .</Link>
              <Link href='#' className='text-black text-md font-medium mr-2'>Pages . </Link>
              <Link href='/contact' className='text-pink-500 text-md font-medium'>Contact Us</Link>
           </div>
        </div>

        <div className='flex flex-row'>

          <div className='ml-60 mt-24 w-[500px]'>
            <h3 className='text-blue-950 text-3xl font-bold'>Information About us</h3>
            <p className='text-gray-500 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nam ipsa cupiditate at. Et aspernatur, fuga recusandae corporis repudiandae consectetur adipisicing elit. Assumenda nam ipsa cupiditate at. Et aspernatur, fuga recusandae corporis repudiandae facilis!</p>
            <div className='flex flex-row space-x-2 mt-6'>
              <span className='bg-blue-700 rounded-full w-5 h-5'></span>
              <span className='bg-pink-500 rounded-full w-5 h-5'></span>
              <span className='bg-blue-300 rounded-full w-5 h-5'></span>
            </div>
          </div>

          <div className='mt-24 ml-24 w-[500px]'>
              <h3 className='text-blue-950 text-3xl font-bold'>Contact Way</h3>
              <div className='text-gray-500'>
                <div className='flex flex-row mt-7'>
                  <div className='flex'>
                    <span className='bg-blue-600 rounded-full w-10 h-10'></span>
                    <div className='flex flex-col ml-3'>
                      <span>Tel: 877-67-88-99</span>
                      <span>E-Mail: shop@store.com</span>
                    </div>
                  </div>
                  <div className='flex ml-10'>
                    <span className='bg-pink-600 rounded-full w-10 h-10'></span>
                    <div className='flex flex-col ml-3'>
                      <span>Support Forum</span>
                      <span>For over 24hr</span>
                    </div>
                  </div>
                </div>

                <div className='flex flex-row mt-9'>  
                  <div className='flex'> 
                    <span className='bg-orange-400 rounded-full w-10 h-10'></span>
                    <div className='flex flex-col ml-3'>
                      <span>20 Margaret st, London</span>
                      <span>Great britain, 3NM98-LK</span>
                    </div>
                  </div>
                  <div className='flex ml-10'>
                    <span className='bg-green-400 rounded-full w-10 h-10'></span>
                    <div className='flex flex-col ml-3'>
                      <span>Free standard shipping</span>
                      <span>on all orders.</span>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
        
        <div className='flex flex-row'>
          <div className='ml-60 w-[500px]'>
            <h3 className='text-blue-950 text-3xl font-bold mt-32'>Get In Touch</h3>
            <p className='text-gray-500 mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, nihil sit, sit amet consectetur adipisicing elit Necessitatibus?</p>
            <div className='flex flex-row space-x-5 mt-9 '>
              <input type="text" placeholder="Your Name*" id="name" className='border border-gray-300 py-2 px-7'/>
              <input type="text" placeholder="Your E-mail*" id="email" className='border border-gray-300 py-2 px-7' />
            </div>
            <div className='flex flex-col space-y-7 mt-8 w-[500px]'>
              <input type="text" placeholder="Subject*" id="subject" className=' border border-gray-300 py-2 px-7'/>
              <input type="text" placeholder="Type Your Message*" id="message" className=' border border-gray-300 pt-2 pb-28 px-7' />
            </div>
            <button className='bg-pink-600 text-white py-2 px-7 mt-7 font-medium'>Send Mail</button>
          </div>

          <div>
            <Image src={"/contactus.png"} alt="contact" width={500} height={500} className='mt-32 ml-20' />
          </div>
        </div>

    </div>
  )
}

export default Contact;