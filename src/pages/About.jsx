import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import { motion } from 'framer-motion';
import { Testimonials } from '../components/Testimonials';
import FAQ from '../components/FAQ';

const FeaturesSection = () => {
    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 2 } }
    };

    return (
        <div className="bg-black">
            <section id="features" className="relative block px-6 py-10 md:py-20 md:px-10 border-t border-b border-neutral-900 bg-neutral-900/30">
                <div className="relative mx-auto max-w-5xl text-center">
                    <span className="text-gray-400 my-3 flex items-center justify-center font-medium uppercase tracking-wider">
                   What do RK Tech offer?
                    </span>
                    <h2 className="block w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
                   We are into multiverse of blockchain that offers endless and unique sevices :                    </h2>
                </div>
                <div className="relative mx-auto max-w-4xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2">
                    <motion.div className="rounded-md border border-neutral-800 cursor-pointer bg-neutral-900/50 p-8 text-center shadow" whileHover={{ scale: 1.1 }} variants={variants} initial="hidden" animate="visible">
                        <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border" style={{ backgroundImage: 'linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)', borderColor: 'rgb(93, 79, 240)' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-color-swatch" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M19 3h-4a2 2 0 0 0 -2 2v12a4 4 0 0 0 8 0v-12a2 2 0 0 0 -2 -2"></path>
                                <path d="M13 7.35l-2 -2a2 2 0 0 0 -2.828 0l-2.828 2.828a2 2 0 0 0 0 2.828l9 9"></path>
                                <path d="M7.3 13h-2.3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h12"></path>
                                <line x1="17" y1="17" x2="17" y2="17.01"></line>
                            </svg>
                        </div>
                        <h3 className="mt-6 text-gray-400">Mainly Focused on Blockchain</h3>
    <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">We develop unique and cutting-edge solutions tailored to meet the specific needs and challenges of the world.</p>
                    </motion.div>
                    <motion.div className="rounded-md border border-neutral-800 cursor-pointer bg-neutral-900/50 p-8 text-center shadow" whileHover={{ scale: 1.1 }} variants={variants} initial="hidden" animate="visible">
                        <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border" style={{ backgroundImage: 'linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)', borderColor: 'rgb(93, 79, 240)' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bolt" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <polyline points="13 3 13 10 19 10 11 21 11 14 5 14 13 3"></polyline>
                            </svg>
                        </div>
                        <h3 className="mt-6 text-gray-400">Expert Team</h3>
    <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">Our team comprises highly skilled professionals with extensive experience in coding, blockchain, ERP, CRM, and trading software development.</p>
                    </motion.div>
                    <motion.div className="rounded-md border border-neutral-800 cursor-pointer bg-neutral-900/50 p-8 text-center shadow" whileHover={{ scale: 1.1 }} variants={variants} initial="hidden" animate="visible">
                        <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border" style={{ backgroundImage: 'linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)', borderColor: 'rgb(93, 79, 240)' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-tools" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4"></path>
                                <line x1="14.5" y1="5.5" x2="18.5" y2="9.5"></line>
                                <polyline points="12 8 7 3 3 7 8 12"></polyline>
                                <line x1="7" y1="8" x2="5.5" y2="9.5"></line>
                                <polyline points="16 12 21 17 17 21 12 16"></polyline>
                                <line x1="16" y1="17" x2="14.5" y2="18.5"></line>
                            </svg>
                        </div>
                        <h3 className="mt-6 text-gray-400">Client-Centric Approach</h3>
    <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">We prioritize our clients' goals, offering personalized support and services to ensure their success.</p>
                    </motion.div>
                    <motion.div className="rounded-md border border-neutral-800 cursor-pointer bg-neutral-900/50 p-8 text-center shadow" whileHover={{ scale: 1.1 }} variants={variants} initial="hidden" animate="visible">
                        <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border" style={{ backgroundImage: 'linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)', borderColor: 'rgb(93, 79, 240)' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-tools" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4"></path>
                                <line x1="14.5" y1="5.5" x2="18.5" y2="9.5"></line>
                                <polyline points="12 8 7 3 3 7 8 12"></polyline>
                                <line x1="7" y1="8" x2="5.5" y2="9.5"></line>
                                <polyline points="16 12 21 17 17 21 12 16"></polyline>
                                <line x1="16" y1="17" x2="14.5" y2="18.5"></line>
                            </svg>
                        </div>
                        <h3 className="mt-6 text-gray-400">Future-Focused</h3>
    <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">We are dedicated to staying at the forefront of technological advancements, continuously exploring new trends and innovations.</p>
                    </motion.div>
                </div>
                <div className="absolute bottom-0 left-0 z-0 h-1/3 w-full border-b" style={{ backgroundImage: 'linear-gradient(to right top, rgba(79, 70, 229, 0.2) 0%, transparent 50%, transparent 100%)', borderColor: 'rgba(92, 79, 240, 0.2)' }}></div>
                <div className="absolute bottom-0 right-0 z-0 h-1/3 w-full" style={{ backgroundImage: 'linear-gradient(to left top, rgba(220, 38, 38, 0.2) 0%, transparent 50%, transparent 100%)', borderColor: 'rgba(92, 79, 240, 0.2)' }}></div>
            </section>
        </div>
    );
};



const About = () => {
  return (
    <div className='bg-black'>
        <Navbar/>
        <Hero title="About Us" words="
RK Tech envisions a future where technology transcends boundaries, providing a seamless and unified experience for users and developers alike. We are dedicated to building scalable solutions that harness the power of blockchain and web3, facilitating a connected and efficient digital ecosystem."/>
<FeaturesSection/>

<div className=" px-4 py-10 min-h-screen">
  <div className="max-w-7xl mx-auto h-max px-6 md:px-12 xl:px-6">
    <div className="md:w-2/3 lg:w-1/2">

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-100">
        <path fillRule="evenodd"
          d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
          clipRule="evenodd"></path>
      </svg>
      <h2 className="mt-8 text-2xl font-bold text-white md:text-4xl">4 Pillars of Our Franchise</h2>
    </div>
    <div
      className="mt-6 grid divide-x divide-y  divide-gray-700 overflow-hidden rounded-3xl border text-gray-600 border-gray-700 sm:grid-cols-2 lg:grid-cols-4  lg:divide-y-0 xl:grid-cols-4">
      <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600 cursor-pointer">
        <div className="relative space-y-8 py-12 p-8">
          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round"
            strokeLinejoin="round" color="white" style={{color:"white"}} height="50" width="50"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z">
            </path>
            <path d="M10 10l2 -2v8"></path>
          </svg>
          <div className="space-y-2">
            <h5 className="text-xl font-semibold text-white transition group-hover:text-blue-400">E-Commerce</h5>
            <p className="text-gray-300">Your franchise will include an e-commerce platform that allows customers to shop for a wide range of products conveniently. You will benefit from a vast inventory, a user-friendly website, and secure payment processing.</p>
          </div>
        </div>
      </div>
      <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600 cursor-pointer">
        <div className="relative space-y-8 py-12 p-8">
          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round"
            strokeLinejoin="round" color="white" style={{color:"white"}} height="50" width="50"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z">
            </path>
            <path d="M10 8h3a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h3"></path>
          </svg>
          <div className="space-y-2">
            <h5 className="text-xl font-semibold text-white transition group-hover:text-blue-400">Grocery Delivery</h5>
            <p className="text-gray-300">As part of your franchise, you will offer a grocery delivery service, catering to the increasing demand for hassle-free shopping experiences. Partnering with local grocery stores ensures a steady flow of customers.</p>
          </div>
        </div>
      </div>
      <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600 cursor-pointer">
        <div className="relative space-y-8 py-12 p-8">
          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round"
            strokeLinejoin="round" color="white" style={{color:"white"}} height="50" width="50"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z">
            </path>
            <path
              d="M10 9a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1">
            </path>
          </svg>
          <div className="space-y-2">
            <h5 className="text-xl font-semibold text-white transition group-hover:text-blue-400">Utility Services</h5>
            <p className="text-gray-300">We provide essential utility services, such as electricity, gas, and water, through established partnerships with utility companies. Offering these services adds a consistent revenue stream to your franchise.</p>
          </div>
        </div>
      </div>
      <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600 cursor-pointer">
        <div className="relative space-y-8 py-12 p-8">
          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round"
            strokeLinejoin="round" color="white" style={{color:"white"}} height="50" width="50"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z">
            </path>
            <path d="M10 8v3a1 1 0 0 0 1 1h3"></path>
            <path d="M14 8v8"></path>
          </svg>
          <div className="space-y-2">
            <h5 className="text-xl font-semibold text-white transition group-hover:text-blue-400">ISP Services
            </h5>
            <p className="text-gray-300">In today’s digital age, reliable internet connectivity is crucial. Our franchise includes the provision of high-speed internet services meeting the connectivity needs of both residential and business customers.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<Testimonials/>
<FAQ/>
<Footer/>
</div>
  )
}

export default About