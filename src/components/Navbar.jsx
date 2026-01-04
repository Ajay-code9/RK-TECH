import React, { useState } from 'react';
import { FaApple } from "react-icons/fa";
import { AiFillAndroid } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { NavLink, useNavigate } from 'react-router-dom';
import logo from "/logo.png"

function Navbar({isScrolled}) {
    const [toggle, setToggle] = useState(false);
    const navigate = useNavigate();
    const navBgColor = isScrolled ? "bg-black" : "bg-transparent";
    const handleToggle = () => {
        if(toggle){
            setToggle(false)
        }
        else{
            setToggle(true)
        }
    }
  return (
    <nav className={`flex m-0 w-full justify-between px-10 py-5 text-white items-center`}>
      <img src={logo} className='w-12 sm:w-16 cursor-pointer' alt="" onClick={()=>{navigate("/")}}/>
      <div className='w-1/2 navbar-links sm:block hidden z-40'>
        <ul className='flex justify-evenly items-center'>
          <NavLink className="transition hover:-translate-y-1 hover:duration-300" to="/marketplace">Coding Marketplace</NavLink>
          <NavLink className="transition hover:-translate-y-1 hover:duration-300" to="/rk-tech-blockchain">RK Tech Blockchain</NavLink>
          <NavLink className="transition hover:-translate-y-1 hover:duration-300" to="/crm-erp">CRM & ERP</NavLink>
          <NavLink className="transition hover:-translate-y-1 hover:duration-300" to="/softwares">Softwares</NavLink>
          <NavLink className="transition hover:-translate-y-1 hover:duration-300" to="/codexAayaam-education">Education</NavLink>
        </ul>
      </div>
      <FaBars size={24} onClick={handleToggle} className='sm:hidden z-40'/>
      <div className={`fixed inset-0  glass bg-black/80 sm:hidden z-40 transition-transform duration-700 ${toggle ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex items-center justify-between p-4">
                    <span className="text-white text-lg w-64"><img src={logo} alt="" /></span>

                    <button onClick={handleToggle} className="text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="flex items-center flex-col">
        <div className="flex items-center border m-4 p-2 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 pt-0.5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="white">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input className="ml-2 outline-none bg-transparent text-white" type="text" name="search" id="search" placeholder="Search..." />
        </div>
        <ul className='flex flex-wrap navbar-links justify-evenly items-center my-3'>
          <NavLink className="transition hover:-translate-y-1 hover:duration-300 mx-5 my-2" to="/marketplace">Coding Marketplace</NavLink>
          <NavLink className="transition hover:-translate-y-1 hover:duration-300 mx-5 my-2" to="/rk-tech-blockchain">RK Tech Blockchain</NavLink>
          <NavLink className="transition hover:-translate-y-1 hover:duration-300 mx-5 my-2" to="/crm-erp">CRM & ERP</NavLink>
          <NavLink className="transition hover:-translate-y-1 hover:duration-300 mx-5 my-2" to="/softwares">Softwares</NavLink>
          <NavLink className="transition hover:-translate-y-1 hover:duration-300 mx-5 my-2" to="/codexAayaam-education">Education</NavLink>
        </ul>
        <ul className="flex items-center w-full justify-center space-x-3">
          <a href='#services' className="font-semibold border p-2 rounded-lg cursor-pointer">Explore</a>
          <li>
           <FaApple className='cursor-pointer' size={24}/>
          </li>
          <li>
            <AiFillAndroid onClick={()=>{window.open("#","_blank")}} className='cursor-pointer' size={24}/>
          </li>

        </ul>
      </div>
            </div> 
      <div className="items-center hidden sm:flex z-40">
        <div className="flex items-center border mx-4 p-2 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 pt-0.5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="white">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input className="ml-2 outline-none bg-transparent" type="text" name="search" id="search" placeholder="Search..." />
        </div>
        <ul className="flex items-center space-x-3">
          <a href='#services' className="font-semibold border p-2 rounded-lg cursor-pointer">Explore</a>
          <li>
           <FaApple className='cursor-pointer' size={24}/>
          </li>
          <li>
            <AiFillAndroid onClick={()=>{window.open("#","_blank")}} className='cursor-pointer'  size={24}/>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;


