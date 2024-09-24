import React from 'react';
import imgwhiteboard from '../../assets/main 2.jpg';
import { FiMoreHorizontal } from "react-icons/fi";
import collab from '../../assets/collab 1.svg'
import easyto from '../../assets/easy.svg'
import pentool from '../../assets/pentool.svg'
import custom from '../../assets/custom whiteboard 1.svg'
import mobile from '../../assets/mobile access 1.svg'

const Features = () => {
    return (
        <div className='w-full h-auto flex flex-col text-[#FFFFFF]'>
            {/* Top section */}
            <div className='w-full h-auto p-8 bg-[#0F0741] '>
                <div className='flex justify-end'>
                    <FiMoreHorizontal size={50} className=''/>
                  
                </div>
              
               

          
                <h1 className='text-center feature-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>Key <br />
                    <span className='font-bold'>Features</span>
                    {/* <hr className='w-32  border-[3px]' /> */}
                </h1>
                
                {/* <span className=''>
                    <img src={aaad} alt='aad' width="12"/>
               <img src={aaad} alt='aad' width="12"/>
               <img src={aaad} alt='aad' width="12"/>
               <img src={aaad} alt='aad' width="12"/>
               <img src={aaad} alt='aad' width="12"/>
               <img src={aaad} alt='aad' width="12"/>
                    </span> */}
                
                <div className="flex flex-wrap justify-center mt-16 gap-8  text-[#000]">
                    <div className="bg-[#ffff] pt-6 h-80 w-[90%] sm:w-[300px] rounded-3xl shadow-lg">
                        <div className="flex flex-col space-y-4 p-[20px] items-center justify-center">
                            <div className="bg-[#B3DEA4] w-12 h-12 rounded-full flex items-center justify-center">
                                <img src={collab} alt="Boost Productivity" className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg md:text-xl  font-bold text-center karal">
                                REAL-TIME COLLABORATION
                            </h3>
                            <p className="text-[#000] text-center font-jost leading-[18px]">
                                Work together seamlessly with team members from anywhere in the world. See changes in real-time and keep everyone on the same page.
                            </p>
                           
                        </div>
                    </div>

                    <div className="bg-[#ffff] pt-6 md:mt-[-30px] h-80 w-[90%] sm:w-[300px] rounded-3xl shadow-lg">
                        <div className="flex flex-col space-y-4 p-[20px] items-center justify-center">
                            <div className="bg-[#E6F168] w-12 h-12 rounded-full flex items-center justify-center">
                                <img src={easyto} alt="Innovate Together" className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg md:text-xl font-bold text-center karal">
                            Intuitive Interface
                            </h3>
                            <p className="text-[#000] text-center font-jost leading-[18px]">
                            Our user-friendly design ensures you spend more time creating and less time learning.                            </p>
                           
                        </div>
                    </div>

                    <div className="bg-[#ffff] pt-6 h-80 w-[90%] sm:w-[300px] rounded-3xl shadow-lg">
                        <div className="flex flex-col space-y-4 p-[20px] items-center justify-center">
                            <div className="bg-[#C3C2FF] w-12 h-12 rounded-full flex items-center justify-center">
                                <img src={pentool} alt="Task Management" className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg md:text-xl font-bold text-center karal">
                            Templates & tools                            </h3>
                            <p className="text-[#000] text-center font-jost leading-[18px]">
                                Easily create, assign, and track taUse our library of templates and drawing tools to get started quickly and efficiently.sks. Organize tasks into projects and sub-tasks, ensuring every detail is accounted for.
                            </p>
                          
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Bottom section with image and overlay */}
            <div className='relative w-full h-96 mb-[-50px]'>
                {/* Background image */}
                <img
                    src={imgwhiteboard}
                    alt='Background'
                    className='w-full h-full object-cover'
                />
                {/* Blue overlay */}
                <div className='absolute inset-0 bg-[#0F0741] opacity-[90%] flex justify-center '>
                    <div className="flex flex-wrap justify-center gap-8 text-[#000] px-8 lg:px-44">
                        <div className="bg-[#ffff] pt-6 h-80 w-[90%] sm:w-[300px] rounded-3xl shadow-lg">
                            <div className="flex flex-col space-y-4 p-[20px] items-center justify-center">
                                <div className="bg-[#DEA4B280] w-12 h-12 rounded-full flex items-center justify-center">
                                    <img src={custom} alt="Secure & Reliable" className="w-8 h-8" />
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-center  karal">
                                Customizable Whiteboards                                </h3>
                                <p className="text-[#000] text-center font-jost leading-[18px]">
                                Personalize your whiteboards with various colors, shapes, and connectors to visualize ideas clearly.                                 </p>
                                
                            </div>
                        </div>

                        <div className="bg-[#ffff] pt-6 h-80 w-[90%] sm:w-[300px] rounded-3xl shadow-lg">
                            <div className="flex flex-col space-y-4 p-[20px] items-center justify-center">
                                <div className="bg-[#A4DEDB] w-12 h-12 rounded-full flex items-center justify-center">
                                    <img src={mobile} alt="Boost Productivity" className="w-8 h-8" />
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-center karal">
                                Mobile Access
                                </h3>
                                <p className="text-[#000] text-center font-jost leading-[18px]">
                                Stay connected and productive on the go with our fully responsive mobile app. Access your whiteboards, tasks, and projects anytime, anywhere.                         </p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;
