import React from 'react';
import Image from 'next/image';

function Blog() {
  return (
    <div>
        <div>
            <h3 className='font-bold text-4xl pb-8 mt-20 text-center text-blue-950 font-sans'>Latest Blog</h3>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-12 lg:mx-80'>
            <div className='shadow-md blog_text hover:shadow-xl'>
                <Image src={"/blog1.jpeg"} alt='blog' width={300} height={200} className='rounded-md shadow-lg'/>
                <div className='mt-6 mb-6 p-2'>
                  <div className='flex items-center space-x-4 text-gray-600 text-sm'>
                    <span className='flex items-center space-x-1 mr-4 ml-2'>
                      <img src="/pen.png" alt="pen" width={15} height={15} />
                      <span className='flex flex-row'>SaberAli</span>
                    </span>
                    <span className='flex items-center space-x-1'> 
                      <img src="/calendar.png" alt="calender" width={15} height={15} />
                      <span>21 August,2020</span>
                    </span>
                  </div>
                  <h3 className='text-lg text-blue-950 font-medium mt-4 ml-2'>Top essential Trends in 2021</h3>
                  <p className='text-sm text-gray-500 mt-2 ml-2'>More off this hello samlande lied much over tightly circa horse taped mighty</p>
                  <button className='text-md text-blue-950 font-normal underline mt-5 ml-2'>Read More</button>
                </div>
            </div>

            <div className='shadow-md blog_text hover:shadow-xl'>
                <Image src={"/blog2.jpeg"} alt='blog' width={300} height={200} className='rounded-md shadow-lg'/>
                <div className='mt-6 mb-6 p-2'>
                  <div className='flex items-center space-x-4 text-gray-600 text-sm'>
                    <span className='flex items-center space-x-1 mr-4 ml-2'>
                      <img src="/pen.png" alt="pen" width={15} height={15} />
                      <span className='flex flex-row'>SaberAli</span>
                    </span>
                    <span className='flex items-center space-x-1 '> 
                      <img src="/calendar.png" alt="calender" width={15} height={15} />
                      <span>21 August,2020</span>
                    </span>
                  </div>
                  <h3 className='text-lg text-blue-950 font-medium mt-4 ml-2'>Top essential Trends in 2021</h3>
                  <p className='text-sm text-gray-500 mt-2 ml-2'>More off this hello samlande lied much over tightly circa horse taped mighty</p>
                  <button className='text-md text-blue-950 font-normal underline mt-5 ml-2'>Read More</button>
                </div>
            </div>

            <div className='shadow-md blog_text hover:shadow-xl'>
                <Image src={"/blog3.jpeg"} alt='blog' width={300} height={200} className='rounded-md shadow-lg'/>
                <div className='mt-6 mb-6 p-2'>
                  <div className='flex items-center space-x-4 text-gray-600 text-sm'>
                    <span className='flex items-center space-x-1 mr-4 ml-2'>
                      <img src="/pen.png" alt="pen" width={15} height={15} />
                      <span className='flex flex-row'>SaberAli</span>
                    </span>
                    <span className='flex items-center space-x-1'> 
                      <img src="/calendar.png" alt="calender" width={15} height={15} />
                      <span>21 August,2020</span>
                    </span>
                  </div>
                  <h3 className='text-lg text-blue-950 font-medium mt-4 ml-2'>Top essential Trends in 2021</h3>
                  <p className='text-sm text-gray-500 mt-2 ml-2'>More off this hello samlande lied much over tightly circa horse taped mighty</p>
                  <button className='text-md text-blue-950 font-normal underline mt-5 ml-2'>Read More</button>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Blog;