import React from 'react';
import img from '../../assets/main 2.jpg';
import { FiMoreHorizontal } from "react-icons/fi";

const FooterHead = () => {
  return (
    <>

      <div className='w-full md:h-[389px] h-[418px]'>
        <div className='border-t-4 mt-20 border-b-4 border-black '>
          <div className='text-black pl-72'>
            <FiMoreHorizontal size={60} />
          </div>
          <div className='flex flex-col justify-center items-center space-y-4'>
            <h1 className='font-karlaBold md:text-[48px] text-[30px]'>Testimonials</h1>
            <hr className='w-full max-w-[120px] h-[6px] bg-[#000000] border-0' />
            <p className='md:text-[24px] text-[19px] text-center font-jost leading-8 lg:pl-44 lg:pr-44'>
              “Whiteboard has transformed the way our team collaborates. The real-time updates and intuitive interface have made project management a breeze!”
            </p>
            <span className='md:text-[24px] text-[19px] text-center font-jost font-semibold'>- Mr. Rafikul, Founder</span>
          </div>
          <div className='text-black flex justify-end pr-72'>
            <FiMoreHorizontal size={60} />
          </div>
        </div>
      </div>


      <div className='relative w-full h-auto'>
        {/* Background Image */}
        <img
          src={img}
          alt='Background'
          className='w-full h-full object-cover opacity-0'
        />

        {/* Overlay with rounded top corners */}
        <div className='absolute inset-0 bg-[#0F0741] top-0 opacity-[100%] rounded-b-full px-4 sm:px-6 lg:px-8 flex justify-center items-center'>
          <h1 className='text-[#FFFFFF] lg:text-[50px] md:text-[30px] text-[20px] md:leading-[3rem] leading-[1.8rem;] font-karlaBold text-center'>
            Say ‘Goodbye’ to the blank<br />page for good
          </h1>
        </div>


      </div>
    </>
  );
}

export default FooterHead;
