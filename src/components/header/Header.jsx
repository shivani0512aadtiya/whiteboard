import React from 'react'
import logo from '../../assets/logo-black.png'
const Header = () => {
  return (
    <>
     <>
      <div className="header">
        <div className="w-80 m-auto">
          <div className="flex navLink justify-between items-center">
            <div className="lg:flex-grow text-center">
              <img src={logo} alt="Logo" className="md:w-[180px] w-[178px] flex justify-between md:justify-center md:items-center mx-auto" />
            </div>
            <div className="ml-auto">
              <div className="navLink lg:text-[#FFFFFF] text-[#000]">Login</div>
            </div>
          </div>
        </div>
      </div>
    </>
    </>
  )
}

export default Header