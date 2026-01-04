import React from 'react'
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const tabs = ["Wifi", "Wifi + OTT + Additional Benefits"];

const Tabs = ({ selected, setSelected}) => {
  return (
    <div className="px-4 py-14 flex justify-center items-center flex-wrap gap-2">
      {tabs.map((tab) => (
        <Chip
          text={tab}
          selected={selected === tab}
          setSelected={setSelected}
          key={tab}
        />
      ))}
    </div>
  );
};

const Chip = ({
  text,
  selected,
  setSelected,
}) => {
  return (
    <button
      onClick={() => {setSelected(text);}}
      className={`${
        selected
          ? "text-white"
          : "text-slate-300 hover:text-slate-200 hover:bg-slate-700"
      } text-lg md:text-xl transition-colors px-2.5 py-0.5 rounded-md relative`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 rounded-md border-b-4 border-violet-700 border-t-0 border-r-0 border-l-0 border-indigo-600"        ></motion.span>
      )}
    </button>
  );
};

const Pricing = () => {
    const [wifiPlans, setWifiPlans] = useState([{
        price: "499",
        benefits: ["Speed: Up to 75 Mbps","Benefit: ₹200 discount on flight booking (Use Apay Service)","Validity: 30 days"]
    },
    {
        price: "599",
        benefits: ["Speed: Up to 100 Mbps","Benefit: ₹300 discount on bus booking and flight booking (Use Apay Service)        ","Validity: 30 days"]
    },
    {
        price: "699",
        benefits: ["Speed: Up to 150 Mbps","Benefit: ₹500 off on flight booking (Use Apay service)","Validity: Unlimited data for 30 days"]
    },
    {
        price: "999",
        benefits: ["Speed: Up to 300 Mbps","Benefit: ₹900 off on flight booking (Use Apay service)","Validity: Unlimited data for 1 day"]
    },

])
const [selected, setSelected] = useState(tabs[0]);

const [ottPlans, setOTTPlans] = useState([{
    price: "2999",
    benefits: ["Includes EROS NOW and ALT BALAJI","Speed: 100 Mbps","Validity: 90 days","Additional: Free installation and WiFi router usage"]
},
{
    price: "4999",
    benefits: ["Includes AMAZON PRIME and ZEE PREMIUM","Speed: 150 Mbps","Validity: 90 days","Additional: Free installation and WiFi router usage"]
},
{
    price: "8999",
    benefits: ["Includes ZEE PREMIUM and ALT BALAJI    ","Speed: 200 Mbps","Validity: 180 days","Additional: Free installation and WiFi router usage"]
},
{
    price: "18000",
    benefits: ["Includes AMAZON PRIME, ZEE5, and SONYLIV PREMIUM","Speed: 300 Mbps","Validity: 12 months","Additional: All channels (EROS NOW, ALT BALAJI, ULLU, GAANA), free TV installation"]
},

]);
const flipVariantsWifi = {
    hidden: {
      opacity: 0,
      rotateY: -90,
      transformOrigin: "center",
    },
    visible: {
      opacity: 1,
      rotateY: 0,
      transformOrigin: "center",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      rotateY: 90,
      transformOrigin: "center",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };
  
  
  const flipVariantsOTT = {
    hidden: {
      opacity: 0,
      rotateY: 90,
      transformOrigin: "center",
    },
    visible: {
      opacity: 1,
      rotateY: 0,
      transformOrigin: "center",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      rotateY: -90,
      transformOrigin: "center",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };
  
  return (
    <div className="p-4 min-h-screen bg-black">
<h1 className='mx-10 text-6xl text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600 font-bold uppercase text-center'>PLANS</h1>
<Tabs selected={selected} setSelected={setSelected} />
<AnimatePresence>
    {selected == "Wifi" ?
        wifiPlans.map((val,i)=>{
            return(
                <motion.div
                key={i}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={flipVariantsWifi}
                transition={{ duration: 0.5, type: "spring", stiffness: 150 }}
            >
                <div
        className="max-w-lg mx-auto rounded-lg overflow-hidden lg:max-w-none lg:flex my-10 shadow-purple border-4 border-violet-700">
        <div className=" px-6 py-8 lg:flex-shrink-1 lg:p-12">
            <h3
                className="text-2xl text-left leading-8 font-extrabold text-gray-100 sm:text-3xl sm:leading-9">
                Subscription
            </h3>
            <p className="mt-6 text-left font-ttnorms leading-8 text-gray-500 text-lg text-gray-400">The Team
                subscription grants your
                entire
                As a subscriber to our website, you'll have access to a wide range of exclusive benefits and perks.
            </p>
            <div className="mt-8">
                <div className="flex items-center">
                    <h4
                        className="flex-shrink-0 pr-4  text-sm leading-5 tracking-wider font-semibold uppercase text-purple-600 text-purple-400 bg-transparent">
                        What's included
                    </h4>
                    <div className="flex-1 border-t-2 border-gray-200 border-gray-700"></div>
                </div>
                <ul className="pl-0 mt-8 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5 space-y-5 lg:space-y-0">
                    {val.benefits.map((val2)=>{
                        return(
                            <li className="flex items-start lg:col-span-1">
                        <div className="flex-shrink-0"><svg className="h-5 w-5 text-purple-600"
                                fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd">
                                </path>
                            </svg>
                        </div>
                        <p className="ml-3 text-lg leading-5 text-gray-300 font-ttnorms text-left">
                            {val2}
                        </p>
                    </li>
                        )
                    })}
                </ul>
            </div>
        </div>
        <div
            className="py-8 px-6 text-center lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
            <p
                className="text-xl leading-6 font-medium text-gray-100 lg:max-w-xs lg:mx-auto mb-0 lg:mb-6">
                A single
                payment for your entire team
            </p>
            <div
                className="my-10 lg:my-6 flex items-baseline justify-center text-5xl leading-none font-extrabold text-gray-100">
                <span className="font-brown">₹{val.price}</span><span className="text-xl leading-7 font-medium text-gray-500 font-ttnorms">/month</span>
            </div>
            <div className="lg:mt-6">
                <div className="rounded-md shadow">
                    <a href="#"
                        className="flex items-center justify-center px-5 py-3 leading-6 font-medium rounded-md focus:outline-none focus:ring transition duration-200 ease-in-out shadow-purple border-2 border-violet-700  hover:bg-purple-700 hover:shadow-purple-hover hover:text-white text-lg relative z-20 bg-purple-700 text-white hover:bg-purple-500 hover:text-white">
                        Start your 7-day trial
                    </a>
                </div>
            </div>
        </div>
    </div>
    </motion.div>
            )
        })
    : 
    ottPlans.map((val,i)=>{
        return(
            <motion.div
            key={i + 100}
            initial="hidden"
                animate="visible"
                exit="exit"
                variants={flipVariantsOTT}
            transition={{ duration: 0.5, type: "spring", stiffness: 150 }}
        >
            <div
    className="max-w-lg mx-auto rounded-lg overflow-hidden lg:max-w-none lg:flex my-10 shadow-blue border-4 border-blue-700">
    <div className=" px-6 py-8 lg:flex-shrink-1 lg:p-12">
        <h3
            className="text-2xl text-left leading-8 font-extrabold text-gray-100 sm:text-3xl sm:leading-9">
            Subscription
        </h3>
        <p className="mt-6 text-left font-ttnorms leading-8 text-gray-500 text-lg text-gray-400">The Team
            subscription grants your
            entire
            As a subscriber to our website, you'll have access to a wide range of exclusive benefits and perks.
        </p>
        <div className="mt-8">
            <div className="flex items-center">
                <h4
                    className="flex-shrink-0 pr-4  text-sm leading-5 tracking-wider font-semibold uppercase text-blue-600 text-blue-400 bg-transparent">
                    What's included
                </h4>
                <div className="flex-1 border-t-2 border-gray-200 border-gray-700"></div>
            </div>
            <ul className="pl-0 mt-8 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5 space-y-5 lg:space-y-0">
                {val.benefits.map((val2)=>{
                    return(
                        <li className="flex items-start lg:col-span-1">
                    <div className="flex-shrink-0"><svg className="h-5 w-5 text-blue-600"
                            fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd">
                            </path>
                        </svg>
                    </div>
                    <p className="ml-3 text-lg leading-5 text-gray-300 font-ttnorms text-left">
                        {val2}
                    </p>
                </li>
                    )
                })}
            </ul>
        </div>
    </div>
    <div
        className="py-8 px-6 text-center lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
        <p
            className="text-xl leading-6 font-medium text-gray-100 lg:max-w-xs lg:mx-auto mb-0 lg:mb-6">
            A single
            payment for your entire team
        </p>
        <div
            className="my-10 lg:my-6 flex items-baseline justify-center text-5xl leading-none font-extrabold text-gray-100">
            <span className="font-brown">₹{val.price}</span><span className="text-xl leading-7 font-medium text-gray-500 font-ttnorms">/month</span>
        </div>
        <div className="lg:mt-6">
            <div className="rounded-md shadow">
                <a href="#"
                    className="flex items-center justify-center px-5 py-3 leading-6 font-medium rounded-md focus:outline-none focus:ring transition duration-200 ease-in-out shadow-blue border-2 border-blue-700  hover:bg-blue-700 hover:shadow-blue-hover hover:text-white text-lg relative z-20 bg-blue-700 text-white hover:bg-blue-500 hover:text-white">
                    Start your 7-day trial
                </a>
            </div>
        </div>
    </div>
</div>
</motion.div>
        )
    })}
    </AnimatePresence>
    
</div>
  )
}

export default Pricing