import React from 'react'
import img1 from '../../assets/main .jpg'
import image3 from '../../assets/main .jpg'
import img2 from '../../assets/phone2.jpg'
import googlepayimage from '../../assets/googlepaycrop.png'
import appstoreimage from '../../assets/imagescrop.png'
import { LuUser2 } from "react-icons/lu";
import imgfram from '../../assets/Frame 39.png'
import imgearrow from '../../assets/aarrow.svg'
import direction from '../../assets/XMLID_40_1.svg'
import fram from '../../assets/Frame 8 (1).svg'


const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full sm:pt-10 pt-4'>
      <div className='w-80 lg:flex lg:justify-between  lg:text-left text-center '>
        <div className='lg:w-[48%] w-full'>
          <h1 className='home-heading md:mb-6'>Simplify your Workflow with Whiteboard</h1>
          <p className='home-content text-wrap md:p-0 p-1'>
            In today's fast-paced world, effective collaboration and organization are key to success. Welcome to Whiteboard, the premier online whiteboard application designed to streamline your workflow, enhance team collaboration, and boost productivity.
          </p>
          <div className='md:mt-16 flex justify-center items-center md:p-0 p-2  my-4 md:justify-normal gap-4'>
            <button className='get-app-btn'>Get The App</button>
            <button className='signup'>Register</button>
          </div>
          <div className='flex gap-4  mt-2 justify-center items-center md:justify-normal'>
            <img src={fram} className='sm:w-[404px] xs:w-[330px] h-[61px] rounded-[10px]' alt="Google Pay" />
          </div>
          <div className='flex mt-8'>
            <img src={imgearrow} alt='arrow'  width='12'/>
            <img src={imgearrow} alt='arrow'  width='12'/>
            <img src={imgearrow} alt='arrow'  width='12'/>
            <img src={imgearrow} alt='arrow'  width='12'/>
            <img src={imgearrow} alt='arrow'  width='12'/>
          </div>
        </div>
        <div className='lg:w-[48%] w-full flex res relative'>
          <img src={direction} alt='img' width="70" className=' absolute top-[-25px] left-0' />
        <button className='absolute md:top-[74px]  lg:right-[512px] right-10 bg-[#FFFFFF] z-50 rounded-full px-2 py-3 shadow-lg flex items-center space-x-2 border border-gray-300 hover:shadow-2xl transition-all duration-300 ease-in-out'>
              <span className='rounded-full text-white p-2 bg-[#0F0741]'>
                <LuUser2 size={24} />
              </span>
              <span className='text-[#0F0741] karla font-semibold'>
                Growing&nbsp;Users
              </span>
            </button>

        <img src={imgfram} alt='whiteboard fram' className='w-full'/>
        <button className='absolute right-[40px]  md:right-[30px] md:bottom-[30px] bottom-[40px]  bg-[#FFFFFF] z-50 rounded-full px-2 py-2 shadow-lg flex items-center space-x-2 border border-gray-300 hover:shadow-2xl transition-all duration-300 ease-in-out'>
              <span className='rounded-full text-white p-1 bg-[#0F0741]'>
                <LuUser2 size={24} />
              </span>
              <span className='text-[#0F0741] karla font-semibold'>
                Boost Productivity
              </span>
            </button>

        </div>
      </div>
    </div>
  );
};

export default Home;