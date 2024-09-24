import React from 'react';
import boximage from '../../assets/Vector.svg'
import boximage1 from '../../assets/Group (1).svg'
import boximage2 from '../../assets/Clip path group.svg'
import boximage3 from '../../assets/lock.svg'
import { FiMoreHorizontal } from "react-icons/fi";
import dfd from '../../assets/Polygon 181.svg'

const AboutUs = () => {
    return (
        <>
            <div className='lg:mt-10 md:mt-8 mt-0 flex flex-col justify-center items-center w-full'>
                <div className='lg:w-[90%]   lg:flex lg:justify-between flex-row '>
                    <div className='lg:w-[40%] space-y-2 md:space-y-20 lg:text-left text-center' >
                        <div>
                            <h1 className='text-3xl lg:text-5xl' style={{ fontFamily: 'karla bold' }}>
                                Why Choose <span className="text-4xl lg:text-6xl text-black font-bold" style={{ fontFamily: 'karla extrabold' }}>Whiteboard?</span>
                            </h1>
                            <hr className='w-32 border-black border-[3px] res md:mt-4 mt-2   rounded' />
                        </div>
                        <div className=' text-[18px] text-[#000] font-jost '>
                            <p>Whiteboard isn’t just another digital whiteboard tool—it’s a comprehensive solution designed to elevate the way you and your team collaborate, brainstorm, and execute ideas.</p>
                            <p className='mt-6'>Here’s why Whiteboard Genius is the best choice for your creative and collaborative needs:</p>
                        </div>
                        <div>
                            <span className='aboutus-btn rounded shadow-md py-3 px-6 inline-block'>
                                Learn more
                            </span>
                        </div>
                    </div>
                    <div className="lg:w-[50%] h-[480px] lg:flex lg:justify-between">
                        <div className="grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 md:p-0 p-2  gap-8 relative text-[#000]">

                            <div className="box-ab bg-[rgba(230,241,104,0.2)] xl:z-50 xl:absolute  xl:left-0 xl:top-0 p-4">
                                <div className="box-icon-ab-1">
                                    <img src={boximage} alt="Boost Productivity" className="box-icon-ab" />
                                </div>
                                <h3 className="box-title-ab xl:z-50 text-[#000]">Boost Productivity</h3>
                                <p className="box-text-ab xl:z-50 text-[#000]">
                                    Streamline Your Workflow And Enhance Team Productivity With Our Powerful Collaboration Features.
                                </p>
                            </div>

                            <div className="bg-[#D9E7FF] box-ab xl:absolute xl:left-[292px] xl:top-12">
                                <div className="box-icon-ab-1">
                                    <img src={boximage1} alt="Innovate Together" className="box-icon-ab" />
                                </div>
                                <h3 className="box-title-ab">Innovate Together</h3>
                                <p className="box-text-ab">
                                    Encourage Creative Thinking And Innovation By Providing A Space Where Every Idea Is Visible And Valued.
                                </p>
                            </div>


                            <div className="bg-[#DAF7E7] box-ab xl:absolute xl:bottom-16 xl:right-[-196px] ">
                                <div className="box-icon-ab-1">
                                    <img src={boximage2} alt="Task Management" className="box-icon-ab" />
                                </div>
                                <h3 className="box-title-ab">Task Management</h3>
                                <p className="box-text-ab">
                                    Easily Create, Assign, And Track Tasks. Organize Tasks Into Projects And Sub-Tasks, Ensuring Every Detail Is Accounted For.
                                </p>
                            </div>

                            <div className="bg-[rgba(255,231,218,0.5)] box-ab xl:absolute xl:bottom-[1rem] xl:right-[-30.6rem;] xl:z-50">
                                <div className="box-icon-ab-1">
                                    <img src={boximage3} alt="Secure & Reliable" className="w-8 h-8" />
                                </div>
                                <h3 className="box-title-ab xl:z-50">Secure & Reliable</h3>
                                <p className="box-text-ab xl:z-50">
                                    Your Data Is Safe With Us. We Use Top-Notch Security Measures To Protect Your Information.
                                </p>
                            </div>
                        </div>
                        <FiMoreHorizontal size={70} />
                        
                       
                        
                    </div>

                
                
                
                </div>
                <div className='flex self-end pr-4'>
                <img src={dfd} alt='d' width="12"/>
                <img src={dfd} alt='d' width="12"/>
                <img src={dfd} alt='d' width="12"/>
                <img src={dfd} alt='d' width="12"/>
                <img src={dfd} alt='d' width="12"/>
                </div>
            </div>
        </>
    );
};

export default AboutUs;
