import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FAQ from "../components/FAQ.jsx"
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards.tsx";
import {
  IconArrowWaveRightUp,
  IconBoxAlignTopLeft,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { TextParallaxContentExample } from '../components/Content.jsx';
import { Globe } from '../components/Globe.jsx';
import { TracingBeam } from '../components/ui/tracing-beam.tsx';
const Skeleton = ({image})=>{
    return(
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800">
                <img src={image} className='h-full w-full object-cover'  alt="" />
        </div>
    )
}
const Home = () => {
    const items = [
        
        {
          title: "AayaamCodex",
          description: "A platform for coders to sell thier code, softwares.",
          header: <Skeleton image="https://images.pexels.com/photos/89724/pexels-photo-89724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>,
          icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
          link: "/marketplace",
        },
        {
          title: " RK Tech Blockchain",
          description: "Blockchain and Web3 Developments",
          header: <Skeleton image="https://img.freepik.com/free-photo/global-business-internet-network-connection-iot-internet-things-business-intelligence-concept-busines-global-network-futuristic-technology-background-ai-generative_1258-176940.jpg?t=st=1716206134~exp=1716209734~hmac=c5920644d8e4203386a53c7b6926e5854f5e177a107713cbc45bbbd4909b6326&w=996"/>,
          icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
          link: "/rk-tech-blockchain",
        },
        {
          title: "ERP and CRM Software Solutions",
          description:" Softwares for corporate world",
          header: <Skeleton image="https://img.freepik.com/free-photo/representation-user-experience-interface-design_23-2150169860.jpg?t=st=1716206187~exp=1716209787~hmac=4cdf2540f46de71f94528dbdaec660b98119e2594a4b5e71b50a4b6231b1e935&w=996"/>,
          icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
          link: "/crm-erp",
        },
        {
          title: "Exchange and Trading Software Development",
          description: "Apis, sockets, live feed, trading softwares",
          header: <Skeleton image="https://img.freepik.com/free-photo/business-concept-with-graphic-holography_23-2149160929.jpg?t=st=1716206216~exp=1716209816~hmac=a55da80a697c2fa31b81c2342413a32d667a4a729d15841fa0afb27abd21ac9e&w=900"/>,
          icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
          link: "/softwares",
        },
        {
          title: "Who are we?",
          description: "Pioneering the future of blockchain & web3.",
          header: <Skeleton image="https://img.freepik.com/free-photo/business-concept-with-team-close-up_23-2149151159.jpg?t=st=1716206238~exp=1716209838~hmac=4c3275ae1e6d2a57e4ecacb1bc4b91a5a592244171472ac538fcdf353371836a&w=996"/>,
          icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
          link: "/about",
        },
      ];
      
  return (
    <TracingBeam>
    <div className='min-h-screen bg-black overflow-x-hidden'>
        <Navbar/>

        <section className="py-12 bg-black sm:pb-16 lg:pb-20 xl:pb-24">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="relative">
            <div className="lg:w-2/3">
                <p className="text-sm font-normal tracking-widest text-gray-300 uppercase">A conglomerate with multiple services spread across different sectors</p>
                <h1 className="mt-6 text-4xl font-normal text-white sm:mt-10 sm:text-5xl lg:text-6xl xl:text-8xl tracking-tighter">                   
                 <span className="text-transparent bg-clip-text text-transparent bg-gradient-to-b from-[#F5F5F5] to-[#CFCFCF] ">Blockchain, Web3, Marketplace
</span>
                </h1>
                <p className="max-w-4xl mt-4 text-xl font-normal text-gray-400 sm:mt-8">At RK Tech Private Limited, we are at the cutting edge of technological innovation, creating a web3 future that seamlessly integrates the best of monolithic and modular designs. Our expertise spans coding marketplace solutions, blockchain and web3 developments, ERP and CRM software, and exchange and trading software development, providing a unified environment across multiple chains that scales to the size of the internet.</p>
                <div className="relative inline-flex items-center justify-center mt-8 sm:mt-12 group">
                    <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-[#0F5E3B] to-[#1F8A5A] group-hover:shadow-lg group-hover:shadow-[#0F5E3B]/50"></div>
                    <a href="#services" title="" className="relative z-[10] inline-flex items-center justify-center px-8 py-3 text-base font-normal text-white bg-black border border-transparent rounded-full" role="button">Explore Our Services</a>
                </div>

                <div>
                    <div className="inline-flex items-center pt-6 mt-8 border-t border-gray-800 sm:pt-10 sm:mt-14">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 7H21M21 7V15M21 7L13 15L9 11L3 17" stroke="url(#a)" strokeLinecap="round" strokeLinejoin="round" />
                            <defs>
                                <linearGradient id="a" x1="3" y1="7" x2="22.2956" y2="12.0274" gradientUnits="userSpaceOnUse">
                                    <stop offset="0%" style={{ stopColor: '#0F5E3B' }} />
                                    <stop offset="100%" style={{ stopColor: '#1F8A5A' }} />
                                </linearGradient>
                            </defs>
                        </svg>
                        <span className="ml-2 text-base font-normal text-white">Diverse services catering to various sectors</span>
                    </div>
                </div>
            </div>

            <div className="mt-8 w-full md:absolute md:mt-0 md:top-32 lg:-top-20 md:-right-10">
                <Globe />
            </div>
        </div>
    </div>
</section>
    <div className='my-10'>
    <h1 className="relative z-10 text-lg md:text-5xl  bg-clip-text text-transparent bg-gradient-to-b from-[#F5F5F5] to-[#CFCFCF]  text-center my-5 font-sans font-bold">
      Services we provide
    </h1>
    <div id='services' className="mt-0 mb-10 rounded-md flex flex-col antialiased bg-black dbg-grid-white/[0.05] items-center justify-center relative  overflow-hidden">
      <InfiniteMovingCards
        items={items}
        direction="left"
        speed="fast"
      />
    </div>
    </div>

<TextParallaxContentExample/>

<FAQ/>



        <Footer/>
    </div>
    </TracingBeam>
  )
}

export default Home