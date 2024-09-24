import React, { useEffect, useState } from 'react'
import { FiMoreHorizontal } from "react-icons/fi";
import logo from '../../assets/WhiteboardlogoWhite.png'
import fram from '../../assets/Frame 8 (1).svg'
import { MdOutlineMail } from "react-icons/md";
import img from '../../assets/main 2.jpg'; // Import your image
import { FcGoogle } from "react-icons/fc";
import FooterHead from './FooterHead';
import facebook from '../../assets/facebook 1.png'
import instagram from '../../assets/INSTAGRAM 1.png'
import linkedin from '../../assets/linkedin 1.png'
import 'swiper/swiper-bundle.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';


const Footer = () => {

    const [swiperRef, setSwiperRef] = useState(null);

    useEffect(() => {
        if (swiperRef) {
            const interval = setInterval(() => {
                swiperRef.slideNext(); // Automatically move to the next slide every 2 seconds
            }, 5000);

            return () => clearInterval(interval); // Cleanup interval on component unmount
        }
    }, [swiperRef]);
    return (<>


        <div className="md:mt-8 mt-96  w-[100%]">
            <div className=' relative'>
                <div className='w-full lg:h-[455px] h-[650px]'>

                    <div className='border-t-4 mt-20 border-b-4 border-black '>
                        <div className='text-black pl-72'>
                            <FiMoreHorizontal size={60} />
                        </div>
                        <div className='flex flex-col justify-center items-center space-y-2'>
                            <h1 className='font-karlaBold md:text-[48px] text-[30px]'>Testimonials</h1>
                            <hr className='w-full max-w-[120px] h-[6px] bg-[#000000] border-0' />
                            <Swiper
                                modules={[Navigation, Pagination]} // Ensure the correct modules are passed
                                spaceBetween={50}
                                slidesPerView={1}
                                navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
                                pagination={{ clickable: true }}
                                onSwiper={setSwiperRef}
                                loop={true}
                                speed={1000}
                                className="w-full lg:h-48 h-[400px]"
                            >
                                <SwiperSlide>
                                    <div className="bg-white border  shadow-lg rounded-lg p-6 md:mx-10 mx-4 ">
                                        <p className='md:text-[24px] text-[19px] text-center font-jost leading-8'>
                                            “Whiteboard has transformed the way our team collaborates. The real-time updates and intuitive interface have made project management a breeze!”
                                            <br />
                                            <span className='md:text-[24px] text-[19px] text-center font-jost font-semibold block mt-4'>- Mr. Rafikul, Founder</span>
                                        </p>
                                    </div>


                                </SwiperSlide>
                                <SwiperSlide>
                                <div className="bg-white border shadow-lg md:mx-10 mx-4 rounded-lg p-6 ">
                                    <p className='md:text-[24px] text-[19px] text-center font-jost leading-8 '>
                                        “The whiteboard has been an invaluable tool for our team at Warnhack. It's the perfect space for brainstorming, planning, and collaborating on projects. The smooth writing surface and easy erasability have significantly improved our productivity and efficiency.”

                                        <br />  <span className='md:text-[24px] text-[19px] text-center font-jost font-semibold'>Naman Dixit, Warnhack
                                        </span>
                                    </p>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className="bg-white border shadow-lg md:mx-10 mx-4 rounded-lg p-6 ">
                                    <p className='md:text-[24px] text-[19px] text-center font-jost leading-8 '>
                                        “ I've always been a fan of traditional whiteboards, but our new one is on a whole new level. The quality is exceptional, and it's made a huge difference in our team meetings. It's easy to see and write on, and it's always a pleasure to work with.”
                                        <br />  <span className='md:text-[24px] text-[19px] text-center font-jost font-semibold'>Barinder Singh, Canvasnest
                                        </span>
                                    </p>
                                 </div>
                                </SwiperSlide>
                                {/* Navigation buttons */}
                                <div className="swiper-button-next" />
                                <div className="swiper-button-prev" />


                            </Swiper>
                        </div>
                        <div className='text-black flex justify-end pr-72'>
                            <FiMoreHorizontal size={60} />
                        </div>
                    </div>

                </div>

                <div className='relative w-full lg:min-h-screen md:h-[81vh] sm:h-[57vh] h-[33vh]'>
                    {/* Background Image */}
                    <img
                        src={img}
                        alt='Background'
                        className='w-full h-full absolute md:bottom-[-444px] bottom-[-140px] opacity-15 object-cover'
                    />

                    {/* Overlay with rounded top corners */}
                    <div className='absolute inset-0 bg-[#0F0741] top-[-9px] opacity-[100%] rounded-b-full px-4 sm:px-6 lg:px-8 flex justify-center items-center'>
                        <h1 className='text-[#FFFFFF] lg:text-[50px] md:text-[30px] text-[20px] md:leading-[3rem] leading-[1.8rem;] font-karlaBold text-center'>
                            Say ‘Goodbye’ to the blank<br />page for good
                        </h1>
                    </div>


                </div>
            </div>
            <div className='relative w-full lg:min-h-screen md:h-[81vh] sm:h-[57vh] h-[33vh]'>
                {/* Overlay with rounded top corners */}
                <div className='absolute inset-0 bg-[#0F0741] top-[-9px] opacity-[100%] flex flex-col items-center justify-center rounded-t-full px-4 sm:px-6 lg:px-8'>
                    <div className='text-[#FFFFFF] pt-10 sm:pt-10 md:pt-12 lg:pt-16'>
                        <p className='font-semibold text-center text-[14px] sm:text-[18px] md:text-[20px] lg:text-[24px]'>
                            Get your free account today
                        </p>
                        <div className='flex flex-col sm:flex-row md:gap-4 md:pt-4 pt-1 items-center'>
                            <button className='flex bg-[#FFFFFF] font-medium text-[#160647] rounded-3xl p-2 px-4 text-[12px] sm:text-[14px] md:text-[16px] items-center'>
                                <span className='mr-2'><FcGoogle size={20} /></span> Signup with Google
                            </button>
                            <span className='text-[#7A8994] '>or</span>
                            <button className='flex text-[#160647] font-medium bg-[#FFFFFF] rounded-3xl p-2 px-4 text-[12px] sm:text-[14px] md:text-[16px]  items-center'>
                                Signup with Email
                            </button>
                        </div>
                        <p className='font-normal text-center pt-4 text-[12px] sm:text-[14px] md:text-[16px] text-[#7A8994]'>
                            No Credit Card Required
                        </p>
                    </div>
                </div>
            </div>


            <div className="bg-[#0F0741] flex flex-col justify-center items-center h-[60%] text-[#fff] ">
                <div className="w-[90%]">
                    <div className="flex justify-end">
                        <FiMoreHorizontal size={60} />
                    </div>
                    <div className="flex flex-col md:flex-row justify-between lg:px-24 px-4">
                        <div className="sm:space-y-56 space-y-8">
                            <div>
                                <img src={logo} alt="logo" className="md:w-64 w-[12rem]" />
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <img src={fram} width='300' alt="Google Pay" />
                                </div>
                                <div className="flex justify-center md:justify-start text-white">
                                    <FiMoreHorizontal size={60} />
                                </div>
                            </div>
                        </div>
                        <div className="text-[#FFFFFF] space-y-4 mt-8 md:mt-0">
                            <span className="font-karla font-semibold text-[25px]">Contact Us</span>
                            <p className="font-karla font-normal text-[16px] leading-6">
                                Have questions or want to learn more<br /> about Whiteboard? Reach out to us at
                            </p>
                            <div className=' flex gap-2'>
                                <img src={facebook} alt='facebook' className='w-8' />
                                <img src={instagram} alt='instagram' className='w-8' />

                                <img src={linkedin} alt='linkedin' className='rounded-[50%] w-8' />

                            </div>
                            {/* <div className="w-44 h-12 bg-[#FFFFFF] rounded-xl text-center pt-2">
                                <button className="text-xl text-[#0F0741] font-jura font-bold">Get The App</button>
                            </div> */}
                            <p className='text-[16px]'>We’d love to hear from you!</p>
                            <div className="flex md:flex-row md:space-y-0 w-[300px] space-x-0 md:space-x-4 bg-[#000000] p-1">
                                <div className="flex md:flex-row p-1 gap-2">
                                    <div className='mt-[2px]'>
                                        <MdOutlineMail size={20} className="" />
                                    </div>
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="bg-transparent text-[#0d0739]"
                                    />
                                </div>
                                <button className="bg-white text-[#0d0739] px-2 text-sm font-semibold rounded">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[10%] text-[#000] py-6">
                <div className="text-[14px] leading-3 text-center text-[#6C6C6C] font-karlaBold">
                    © 2022 Whiteboard, Powered by officielcrm.
                </div>
                <div className="text-[#0A05F3] text-center font-karlaBold text-[16px]">
                    <span>Whiteboard</span>
                </div>
            </div>
        </div>

    </>

    )
}

export default Footer




{/* Background image */ }
