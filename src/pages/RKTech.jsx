import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Stats from '../components/Stats'
import { Testimonials } from '../components/Testimonials'
import FAQ from '../components/FAQ'
import Hero from '../components/Hero'
import Pricing from '../components/Pricing'
import { TracingBeam } from '../components/ui/tracing-beam.tsx'

const GigaFiber = () => {
    
  return (
    <TracingBeam>
    <div className='bg-black'>
      <Navbar/>
      <Hero title="RK Tech Blockchain Technology" words="We are pioneering advancements in blockchain and web3 technologies, developing secure, transparent, and decentralized applications that drive the future of the internet. Our expertise in blockchain allows us to create innovative solutions that enhance trust, security, and efficiency across various industries."/>
      <div className="relative overflow-hidden bg-black pt-16 pb-32 space-y-24">
    {/* <div className="relative overflow-hidden">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">

                <div>
                    <div>
                        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                className="h-8 w-8 text-white">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z">
                                </path>
                            </svg>
                        </span>
                    </div>

                    <div className="mt-6">
                        <h2 className="text-3xl font-bold tracking-tight text-white">
                        Broadband Services:
                        </h2>
                        <p className="mt-4 text-lg text-gray-300">
                        GigaFiber Play is committed to providing high-speed internet connectivity to enhance the digital experiences of its customers. Whether for residential or commercial use, GigaFiber Play's broadband services offer lightning-fast speeds and reliable connections, enabling users to seamlessly browse the web, stream content, and engage in online activities without interruptions.
                        </p>
                        <div className="mt-6">
                            <a className="inline-flex rounded-lg bg-[#0F5E3B] px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-[#0F5E3B] hover:bg-[#1F8A5A] hover:ring-[#1F8A5A]"
                                href="/login">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0 mx-5 sm:mx-0">
                    <img loading="lazy" width="647" height="486"
                        className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-10 lg:h-full lg:w-auto lg:max-w-2xl"
                        style={{color:"transparent"}}
                        src="https://images.unsplash.com/photo-1569144157591-c60f3f82f137"/>
            </div>
        </div>
    </div>



    <div className="relative">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
                <div>
                    <div>
                        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                className="h-8 w-8 text-white">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z">
                                </path>
                            </svg>
                        </span>
                    </div>
                    <div className="mt-6">
                        <h2 className="text-3xl font-bold tracking-tight text-white">
                        OTT Streaming Options:
                        </h2>
                        <p className="mt-4 text-lg text-gray-300">
                        Over-the-Top (OTT) streaming services have revolutionized the way people consume entertainment content. GigaFiber Play offers a diverse range of OTT streaming options, including popular platforms such as Netflix, Amazon Prime Video, and Disney+, among others. By partnering with leading content providers, GigaFiber Play ensures that its customers have access to a vast library of movies, TV shows, and original programming, all accessible at their fingertips.
                        </p>
                        <div className="mt-6">
                            <a className="inline-flex rounded-lg bg-[#0F5E3B] px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-[#0F5E3B] hover:bg-[#1F8A5A] hover:ring-[#1F8A5A]"
                                href="/login">
                              Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0 mx-5 sm:mx-0">
                    <img alt="Inbox user interface" loading="lazy" width="647" height="486"
                        className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-10 lg:h-full lg:w-auto lg:max-w-2xl"
                        style={{color:"transparent"}}
                         src="https://images.unsplash.com/photo-1599134842279-fe807d23316e"/>
            </div>
        </div>
    </div>



    <div className="relative">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
                <div>
                    <div>
                        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                className="h-8 w-8 text-white">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z">
                                </path>
                            </svg>
                        </span>
                    </div>
                    <div className="mt-6">
                        <h2 className="text-3xl font-bold tracking-tight text-white">
                            Natural Language Generation (NLG):
                        </h2>
                        <p className="mt-4 text-lg text-gray-300">
                        In an era dominated by digital media consumption, GigaFiber Play is at the forefront of delivering unparalleled entertainment experiences to its customers. With high-speed broadband services and a wide selection of OTT streaming options, GigaFiber Play caters to the evolving preferences of modern consumers, enabling them to enjoy seamless connectivity and access to premium content anytime, anywhere.
                        </p>
                        <div className="mt-6">
                            <a className="inline-flex rounded-lg bg-[#0F5E3B] px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-[#0F5E3B] hover:bg-[#1F8A5A] hover:ring-[#1F8A5A]"
                                href="/login">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0 mx-5 sm:mx-0">
                    <img loading="lazy" width="646" height="485"
                        className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-10 lg:h-full lg:w-auto lg:max-w-2xl"
                        style={{color:"transparent"}}
                        src="https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e"/>
            </div>
        </div>
    </div> */}
</div>

{/* key points */}
{/* <div className=" bg-black">
  <h1 className='mx-10 text-6xl text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600 font-bold uppercase text-center'>Key Points</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-black p-10">
        <div className="block rounded-xl border border-gray-800 p-4">
            <span className="inline-block rounded-lg p-3">
               <div className="inline-flex align-middle justify-center items-center select-none text-white">
                   <svg viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" height="32" width="32">
                     <path d="M8.50141 14.75C8.3114 14.75 8.12141 14.68 7.97141 14.53L5.97141 12.53C5.68141 12.24 5.68141 11.7599 5.97141 11.4699L7.97141 9.46994C8.26141 9.17994 8.7414 9.17994 9.0314 9.46994C9.3214 9.75994 9.3214 10.24 9.0314 10.53L7.5614 12L9.0314 13.4699C9.3214 13.7599 9.3214 14.24 9.0314 14.53C8.8814 14.68 8.69141 14.75 8.50141 14.75Z" fill="currentColor"></path>
                     <path d="M16.5014 14.75C16.3114 14.75 16.1214 14.68 15.9714 14.53C15.6814 14.24 15.6814 13.7599 15.9714 13.4699L17.4414 12L15.9714 10.53C15.6814 10.24 15.6814 9.75994 15.9714 9.46994C16.2614 9.17994 16.7414 9.17994 17.0314 9.46994L19.0314 11.4699C19.3214 11.7599 19.3214 12.24 19.0314 12.53L17.0314 14.53C16.8814 14.68 16.6914 14.75 16.5014 14.75Z" fill="currentColor"></path>
                     <path d="M12.5 22.75C6.57 22.75 1.75 17.93 1.75 12C1.75 6.07 6.57 1.25 12.5 1.25C18.43 1.25 23.25 6.07 23.25 12C23.25 17.93 18.43 22.75 12.5 22.75ZM12.5 2.75C7.4 2.75 3.25 6.9 3.25 12C3.25 17.1 7.4 21.25 12.5 21.25C17.6 21.25 21.75 17.1 21.75 12C21.75 6.9 17.6 2.75 12.5 2.75Z" fill="currentColor"></path>
                     <path d="M11.5021 15.0801C11.4021 15.0801 11.3021 15.0601 11.2121 15.0201C10.8321 14.8601 10.6521 14.4201 10.8221 14.0301L12.8221 9.36004C12.9821 8.98004 13.4221 8.80002 13.8021 8.97002C14.1821 9.13002 14.3621 9.57008 14.1921 9.96008L12.1921 14.6301C12.0721 14.9101 11.7921 15.0801 11.5021 15.0801Z" fill="currentColor"></path>
                   </svg>
               </div>
            </span>

            <h2 className="mt-2 font-semibold text-base sm:text-lg text-white">
            High-Speed Broadband
            </h2>
            <p className="sm:mt-1 block text-sm sm:text-base text-gray-300"> Reliable connectivity for residential and commercial needs, ensuring seamless online activities.
            </p>
        </div>

        <div className="block rounded-xl border border-gray-800 p-4">
            <span className="inline-block rounded-lg p-3">
                <div className="inline-flex align-middle justify-center items-center select-none text-white">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" height="32" width="32">
                      <path d="M7.55556 4.22222C7.55556 2.99492 8.55048 2 9.77778 2C11.0051 2 12 2.99492 12 4.22222V5.44444C12 5.99673 12.4477 6.44444 13 6.44444H16.5556C17.1078 6.44444 17.5556 6.89216 17.5556 7.44444V11C17.5556 11.5523 18.0033 12 18.5556 12H19.7778C21.0051 12 22 12.9949 22 14.2222C22 15.4496 21.0051 16.4444 19.7778 16.4444H18.5556C18.0033 16.4444 17.5556 16.8922 17.5556 17.4444V21C17.5556 21.5523 17.1078 22 16.5556 22H13C12.4477 22 12 21.5523 12 21V19.7778C12 18.5504 11.0051 17.5556 9.77778 17.5556C8.55048 17.5556 7.55556 18.5504 7.55556 19.7778V21C7.55556 21.5523 7.10784 22 6.55556 22H3C2.44772 22 2 21.5523 2 21V17.4444C2 16.8922 2.44772 16.4444 3 16.4444H4.22222C5.44952 16.4444 6.44444 15.4496 6.44444 14.2222C6.44444 12.9949 5.44952 12 4.22222 12H3C2.44772 12 2 11.5523 2 11V7.44444C2 6.89216 2.44772 6.44444 3 6.44444H6.55556C7.10784 6.44444 7.55556 5.99673 7.55556 5.44444V4.22222Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="square"></path>
                   </svg>
                </div>
            </span>
            <h2 className="mt-2 font-semibold text-base sm:text-lg text-white">
            OTT Streaming Partnerships
            </h2>
            <p className="sm:mt-1 block text-sm sm:text-base text-gray-300"> Access to leading platforms like Netflix, Amazon Prime Video, and Disney+, offering a vast library of entertainment options.
Enhanced Digital Experiences: Elevating digital lifestyles with uninterrupted streaming and browsing capabilities.

            </p>
        </div>

        <div className="block rounded-xl border border-gray-800 p-4">
            <span className="inline-block rounded-lg p-3">
                <div className="inline-flex align-middle justify-center items-center select-none text-white">
                    <svg viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" height="32" width="32">
                      <path d="M12.6586 11.62C12.6286 11.62 12.6086 11.62 12.5786 11.62C12.5286 11.61 12.4586 11.61 12.3986 11.62C9.49859 11.53 7.30859 9.25 7.30859 6.44C7.30859 3.58 9.63859 1.25 12.4986 1.25C15.3586 1.25 17.6886 3.58 17.6886 6.44C17.6786 9.25 15.4786 11.53 12.6886 11.62C12.6786 11.62 12.6686 11.62 12.6586 11.62ZM12.4986 2.75C10.4686 2.75 8.80859 4.41 8.80859 6.44C8.80859 8.44 10.3686 10.05 12.3586 10.12C12.4086 10.11 12.5486 10.11 12.6786 10.12C14.6386 10.03 16.1786 8.42 16.1886 6.44C16.1886 4.41 14.5286 2.75 12.4986 2.75Z" fill="currentColor"></path>
                      <path d="M12.6716 22.55C10.7116 22.55 8.74156 22.05 7.25156 21.05C5.86156 20.13 5.10156 18.87 5.10156 17.5C5.10156 16.13 5.86156 14.86 7.25156 13.93C10.2516 11.94 15.1116 11.94 18.0916 13.93C19.4716 14.85 20.2416 16.11 20.2416 17.48C20.2416 18.85 19.4816 20.12 18.0916 21.05C16.5916 22.05 14.6316 22.55 12.6716 22.55ZM8.08156 15.19C7.12156 15.83 6.60156 16.65 6.60156 17.51C6.60156 18.36 7.13156 19.18 8.08156 19.81C10.5716 21.48 14.7716 21.48 17.2616 19.81C18.2216 19.17 18.7416 18.35 18.7416 17.49C18.7416 16.64 18.2116 15.82 17.2616 15.19C14.7716 13.53 10.5716 13.53 8.08156 15.19Z" fill="currentColor"></path>
                    </svg>
                </div>
            </span>

            <h2 className="mt-2 font-semibold text-base sm:text-lg text-white">
            Customer-Centric Approach </h2>
            <p className="sm:mt-1 block text-sm sm:text-base text-gray-300"> Prioritizing customer satisfaction through seamless connectivity and premium content access.
            </p>
        </div>

        <div className="block rounded-xl border border-gray-800 p-4">
            <span  className="inline-block rounded-lg p-3">
               <div className="inline-flex align-middle justify-center items-center select-none text-white">
                   <svg viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" height="32" width="32">
                    <path d="M15.2013 6.29998C15.0181 6.48691 14.9155 6.73823 14.9155 6.99998C14.9155 7.26173 15.0181 7.51305 15.2013 7.69998L16.8013 9.29998C16.9882 9.48321 17.2396 9.58584 17.5013 9.58584C17.7631 9.58584 18.0144 9.48321 18.2013 9.29998L21.4602 6.04107C21.7073 5.79397 22.1242 5.87146 22.229 6.20485C22.52 7.13078 22.583 8.11721 22.4078 9.07913C22.1892 10.279 21.61 11.3838 20.7476 12.2463C19.8852 13.1087 18.7804 13.6878 17.5805 13.9064C16.4942 14.1044 15.3767 13.9983 14.3504 13.6034C14.1561 13.5287 13.9339 13.5674 13.7867 13.7146L7.12132 20.38C6.7235 20.7778 6.18393 21.0013 5.62132 21.0013C5.05871 21.0013 4.51914 20.7778 4.12132 20.38C3.7235 19.9822 3.5 19.4426 3.5 18.88C3.5 18.3174 3.7235 17.7778 4.12132 17.38L10.7867 10.7146C10.9339 10.5674 10.9726 10.3452 10.8979 10.1509C10.503 9.12458 10.3969 8.00708 10.5949 6.92083C10.8135 5.72092 11.3926 4.61614 12.255 3.7537C13.1175 2.89127 14.2223 2.31215 15.4222 2.09352C16.3841 1.91826 17.3705 1.98134 18.2965 2.27232C18.6298 2.37708 18.7073 2.79397 18.4602 3.04107L15.2113 6.28998L15.2013 6.29998Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
                   </svg>
               </div>
            </span>
            <h2 className="mt-2 font-semibold text-base sm:text-lg text-white">
            Innovation in Entertainment </h2>
            <p className="sm:mt-1 block text-sm sm:text-base text-gray-300"> Leading the way in delivering unparalleled entertainment experiences in the digital age.
            </p>
        </div>
    </div>
</div> */}

{/* key offerings */}
<h1 className='mx-10 text-4xl sm:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600 font-bold uppercase text-center'>Launching Blockchain soon</h1>
{/* <div className="container my-10 mx-auto px-5 md:px-0 max-w-5xl flex gap-12 flex-wrap items-start justify-center md:justify-between">
    <div className="grid gap-4 justify-items-center text-center md:flex-1">
        <div className=" rounded-full border-8 border-blue-700 p-4 ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="white" className="w-14 h-14">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z">
                </path>
            </svg>
        </div>
        <h3 className="text-3xl font-bold text-indigo-200">Broadband Services</h3>
        <p className='text-gray-400'>GigaFiber Play prioritizes high-speed internet connectivity to elevate digital experiences. Their broadband services cater to both residential and commercial needs, delivering lightning-fast speeds and unwavering reliability. Users can browse, stream, and engage online without disruptions, enhancing productivity and entertainment.</p>
    </div>
    <div className="grid gap-4 justify-items-center text-center md:flex-1">
        <div className=" rounded-full border-8 border-blue-700 p-4 ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="white" className="w-14 h-14">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"></path>
            </svg>
        </div>
        <h3 className="text-3xl font-bold text-indigo-200">OTT Streaming Options</h3>
        <p className='text-gray-400'>In the age of digital entertainment, GigaFiber Play stands out with its array of Over-the-Top (OTT) streaming services. Partnering with industry giants like Netflix, Amazon Prime Video, and Disney+, GigaFiber Play offers access to a vast library of movies, TV shows, and original content. Customers enjoy seamless streaming experiences, with premium entertainment at their fingertips.</p>
    </div>
</div> */}

{/* <Pricing/> */}

      <Stats/>
      <div className="min-h-screen">
      <div className="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-6 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
	<div className="col-span-3 mb-8">
		<p className="text-lg font-medium text-blue-500">Mission & Vision</p>
		<h2 className="mt-3 mb-4 text-3xl font-bold tracking-tight text-white md:text-3xl ">
			Revolutionizing Blockchain Technology
		</h2>
		<p className="font-light text-gray-300 sm:text-xl">At RK Tech Pvt Ltd., our mission is to redefine the potential of blockchain technology. We aim to create innovative solutions that impact education platforms, streamline cross-border payments, and revolutionize various industries. With our advanced blockchain technology, we strive to drive radical social transformation and empower businesses worldwide.
		</p>
		<div className="pt-6 mt-6 space-y-4 border-t border-gray-700">
			<div>
				<a href="#"
					className="inline-flex items-center text-base font-medium text-blue-500 hover:text-blue-800">
					Explore Blockchain Solutions
					<svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd"
							d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
							clipRule="evenodd"></path>
					</svg>
				</a>
			</div>
			<div>
				<a href="#"
					className="inline-flex items-center text-base font-medium text-blue-500 hover:text-blue-800">
					Learn More about Blockchain Technology
					<svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd"
							d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
							clipRule="evenodd"></path>
					</svg>
				</a>
			</div>
		</div>
	</div>
	<div className="col-span-3 space-y-8 grid grid-cols-1 sm:grid-cols-2 md:gap-10 md:space-y-0">
		<div>
			<svg className="w-10 h-10 mb-2 text-blue-500 md:w-12 md:h-12" fill="currentColor"
				viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
				<path fillRule="evenodd"
					d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z"
					clipRule="evenodd"></path>
			</svg>
			<h3 className="mb-2 text-2xl font-bold text-gray-200">Lead the Industry</h3>
			<p className="font-light text-gray-300">We aim to lead the industry in blockchain innovation, driving social transformation and empowering businesses worldwide with our advanced solutions.</p>
		</div>
		<div>
			<svg className="w-10 h-10 mb-2 text-blue-500 md:w-12 md:h-12" fill="currentColor"
				viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z">
				</path>
			</svg>
			<h3 className="mb-2 text-2xl font-bold text-gray
-200">Collaborate for Success</h3>
<p className="font-light text-gray-300">We collaborate with technology, content, and distribution companies to accelerate time-to-market, achieve scalability, and establish industry leadership.</p>
</div>
<div>
<svg className="w-10 h-10 mb-2 text-blue-500 md:w-12 md:h-12" fill="currentColor"
    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
        clipRule="evenodd"></path>
</svg>
<h3 className="mb-2 text-2xl font-bold text-gray-200">Innovate and Serve</h3>
<p className="font-light text-gray-300">We employ cutting-edge technology to drive ongoing innovation and seamlessly cater to customer needs with a focus on user-friendliness. Our goal is to set new benchmarks for customer care.
</p>
</div>
<div>
<svg className="w-10 h-10 mb-2 text-blue-500 md:w-12 md:h-12" fill="currentColor"
    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z">
    </path>
</svg>
<h3 className="mb-2 text-2xl font-bold text-gray-200">Operational Excellence</h3>
<p className="font-light text-gray-300">We strive to establish unprecedented benchmarks in operational excellence, driving profitability and delivering attractive returns to stakeholders.</p>
</div>
</div>
</div>

</div>
      <Testimonials/>
      <FAQ/>
      <Footer/>
    </div>
    </TracingBeam>
  )
}

export default GigaFiber