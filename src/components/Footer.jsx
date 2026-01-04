import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { NavLink, useNavigate } from 'react-router-dom';
import { Spotlight } from "../components/ui/spotlight.tsx";
// ScrollToTop.js
import { animateScroll } from 'react-scroll';
import logo from "/logo.png"

export const scrollToTop = () => {
  animateScroll.scrollToTop({
    duration: 1000,
    smooth: 'easeInOutSine',
  });
};


 function Footer() {
  return (
    <div className=" w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-20 left-10 md:left-20 md:top-0"
        fill="#FFFFCC"
      />
      <SpotlightPreview/>
    </div>
  );
}

function SpotlightPreview() {
  const navigate = useNavigate();
  return (

    <footer className="bg-black w-full"> {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-10 ">
        <a className="mb-12 flex justify-between items-center max-w-full">
          <img src={logo} onClick={()=>{navigate("/")}} alt="logo" className="inline-block cursor-pointer max-h-12" />
        </a>
        <div className="grid grid-cols-[auto_1fr] justify-between gap-10 sm:grid-cols-3 lg:grid-cols-[0.45fr_auto_auto_auto]">
          <div className="flex max-w-[400px] flex-col gap-8 max-[991px]:[grid-area:span_1/span_3/span_1/span_3] max-[479px]:[grid-area:span_1/span_2/span_1/span_2]">
            <p className="text-[#636262] flex items-center">Follow us 
            <FaLinkedin className='mx-1 transition hover:-translate-y-1 hover:text-blue-500 cursor-pointer' size={20} /> 
            <FaInstagram className='mx-1 transition hover:-translate-y-1 hover:text-blue-500 cursor-pointer' size={20} />
            <FaTwitter className='mx-1 transition hover:-translate-y-1 hover:text-blue-500 cursor-pointer' size={20} />
            <FaFacebook className='mx-1 transition hover:-translate-y-1 hover:text-blue-500 cursor-pointer' size={20} /></p>
            <div className="mx-0 mb-4 w-full">
              <form name="email-form" method="get" className="relative flex max-w-full items-center justify-center">
                <input type="email" className="m-0 block h-full max-h-8 w-full rounded-lg border border-solid border-black bg-[#101010] px-3 py-6 align-middle text-sm text-[#333333] focus:border-[#3898ec] focus:outline-0" maxLength="256" name="email-4" placeholder="Enter your email" required="" />
                <div className="absolute bottom-[0%] left-[auto] right-[5%] top-[25%] text-blue-500">
                  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.9752 3.02708C20.7866 2.83863 20.5512 2.70382 20.2932 2.63651C20.0353 2.5692 19.764 2.57182 19.5074 2.64411L2.0391 7.57102C1.74519 7.65391 1.48358 7.82454 1.28924 8.0601C1.0949 8.29565 0.977084 8.58491 0.951545 8.88922C0.926006 9.19353 0.993958 9.49838 1.14632 9.76303C1.29868 10.0277 1.52819 10.2395 1.80418 10.3702L9.11045 13.8311L14.1057 8.83591C14.2463 8.69525 14.4371 8.61623 14.636 8.61623C14.835 8.61623 15.0257 8.69525 15.1664 8.83591C15.3071 8.97657 15.3861 9.16735 15.3861 9.36628C15.3861 9.5652 15.3071 9.75598 15.1664 9.89664L10.1712 14.8919L13.6321 22.1981C13.7519 22.4552 13.9429 22.6726 14.1823 22.8246C14.4218 22.9767 14.6997 23.057 14.9834 23.0562C15.0263 23.0562 15.0696 23.0544 15.1131 23.0508C15.418 23.0269 15.708 22.9097 15.9439 22.7151C16.1798 22.5205 16.35 22.258 16.4313 21.9632L21.3582 4.49494C21.4304 4.2383 21.433 3.96707 21.3657 3.7091C21.2984 3.45112 21.1636 3.21572 20.9752 3.02708Z" fill="currentColor"></path>
                  </svg>
                </div>
                <input type="submit" value="Subscribe" className="absolute bottom-[0%] left-[auto] right-[0%] top-[0%] m-0 inline-block cursor-pointer rounded-[60px] border border-solid border-blue-500 bg-blue-500 px-6 py-4 text-center font-bold text-black no-underline opacity-0 transition hover:border-black hover:bg-white" />
              </form>
            </div>
            <div>
              <p className="font-bold uppercase text-blue-500">email us</p>
              <p className="text-[#636262]">support@rktech.com  </p>
            </div>
          </div>
          <div className="flex uppercase flex-col footer-links items-start font-semibold">
            <p className="mb-4 text-xl text-white">About Us</p>
            <NavLink to="/about" onClick={()=>{scrollToTop()}} className="py-1 cursor-pointer text-sm font-bold text-[#636262] transition hover:text-white">About us</NavLink>
            <NavLink onClick={()=>{scrollToTop()}} to="/contact" className="py-1 cursor-pointer text-sm font-bold text-[#636262] transition hover:text-white">Contact us</NavLink>

          </div>
          <div className="flex uppercase flex-col footer-links items-start font-semibold">
            <p className="mb-4 text-xl text-white">Company</p>
            <NavLink onClick={()=>{scrollToTop()}} to="/rk-tech-blockchain" className="py-1 cursor-pointer text-sm font-bold text-[#636262] transition hover:text-white">RK Tech</NavLink>
            <NavLink onClick={()=>{scrollToTop()}} to="/crm-erp" className="py-1 cursor-pointer text-sm font-bold text-[#636262] transition hover:text-white">CRM_ERP</NavLink>
            <NavLink onClick={()=>{scrollToTop()}} to="/marketplace" className="py-1 cursor-pointer text-sm font-bold text-[#636262] transition hover:text-white">Marketplace</NavLink>
            <NavLink onClick={()=>{scrollToTop()}} to="/softwares" className="py-1 cursor-pointer text-sm font-bold text-[#636262] transition hover:text-white">Softwares</NavLink>
            <NavLink onClick={()=>{scrollToTop()}} to="/codexAayaam-education" className="py-1 cursor-pointer text-sm font-bold text-[#636262] transition hover:text-white">Education</NavLink>

          </div>
          <div className="flex flex-col items-start font-semibold">
            <p className="mb-4 text-xl text-white">Contact</p>
            <p className="py-1 cursor-pointer text-sm font-bold text-[#636262] transition hover:text-white">503-B Priviera Nehrunagar, <br/>Circle Nr. Bank of Baroda, IIM ,<br/> Ahmedabad City , Ahmedabad - 380015, Gujrat <br /> 560040</p>
            <p className="py-1 cursor-pointer text-sm font-bold text-[#636262] transition hover:text-white">+91-8580816863</p>

            
          </div>
        </div>
        <div className="my-5 w-full border border-solid border-[#101010]"></div>
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="flex-none">
            <p className="text-[#636262]">© RK Tech Pvt. Ltd. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
