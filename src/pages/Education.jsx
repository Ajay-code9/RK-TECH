import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Stats from '../components/Stats'
import { Testimonials } from '../components/Testimonials'
import FAQ from '../components/FAQ'
import Hero from '../components/Hero'
import { TracingBeam } from '../components/ui/tracing-beam.tsx'
import VerticalAccordion from '../components/Accordian.jsx'

const GigaStore = () => {
    
  return (
    <TracingBeam>
    <div className='bg-black'>
      <Navbar/>
      <Hero title="CodeXaayaam Coding Institute" words="Through CodexAayaam, we offer educational programs in Blockchain, AI, Ethical Hacking, VFX, Game Development, and Full Stack Development. Our courses are designed to equip individuals with the knowledge and skills needed to excel in these cutting-edge fields, fostering the next generation of tech innovators."/>
<div className="bg-black pt-12 sm:pt-16">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-5xl text-center">
      <h2 className="text-4xl font-bold tracking-tight uppercase sm:text-4xl text-red-600">Launching Educational Institute Soon</h2>
    </div>
  </div>
  {/* <div className="mt-10 bg-black pb-12 sm:pb-16">
    <div className="relative">
      <div className="absolute inset-0 h-1/2 bg-black "></div>
      <div className="relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid grid-cols-1">
          <dl className="glassmorphism sm:grid sm:grid-cols-3">
            <div className="flex flex-col border-b border-gray-700 p-6 text-center sm:border-0 sm:border-r border-blue-950">
              <dt className="order-1 text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">Convenience</dt>
              <dd className="order-2 mt-2 text-lg font-normal leading-6 text-gray-300"><span className=''>We bring the store to your doorstep, saving you time and effort.</span></dd>
            </div> 
            <div className="flex flex-col border-t border-b border-gray-700 p-6 text-center sm:border-0 sm:border-l sm:border-r border-blue-950">
              <dt className="order-1 text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">Reliability</dt>
              <dd className="order-2 mt-2 text-lg font-normal leading-6 text-gray-300"><span className=''>Trust in our commitment to delivering quality products promptly.</span></dd>
            </div>
            <div className="flex flex-col border-t border-b border-gray-700 p-6 text-center sm:border-0 sm:border-l border-blue-950">
              <dt className="order-1 text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">Accessibility</dt>
              <dd className="order-2 mt-2 text-lg font-normal leading-6 text-gray-300"><span className=''>Access essential groceries and medicines with just a few clicks.</span></dd>
            </div>
            <div className="flex flex-col border-b border-t border-gray-700 p-6 text-center sm:border-0 sm:border-r border-blue-950">
              <dt className="order-1 text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">Customer Satisfaction</dt>
              <dd className="order-2 mt-2 text-lg font-normal leading-6 text-gray-300"><span className=''>Your satisfaction is our top priority, and we continuously strive to exceed your expectations.</span></dd>
            </div>
            <div className="flex flex-col border-t border-gray-700 p-6 text-center sm:border-0 sm:border-l sm:border-r border-blue-950">
              <dt className="order-1 text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">Community Engagement</dt>
              <dd className="order-2 mt-2 text-lg font-normal leading-6 text-gray-300"><span className=''>We believe in giving back to the community and actively support initiatives that promote well-being and accessibility to essential resources.</span></dd>
            </div>
            <div className="flex flex-col border-gray-700 hidden sm:block p-6 text-center sm:border-0 sm:border-l sm:border-r border-blue-950">
</div>
          </dl>
        </div>
      </div>
    </div>
  </div> */}
</div>

{/* <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">

    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
            <p
                className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-sky-500 text-white">
                Brand new
            </p>
        </div>
        <h2
            className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-200 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">

                <svg viewBox="0 0 52 24" fill="currentColor"
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-slate-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
                    <defs>
                        <pattern id="fdca20a0-aeb4-4caf-ba1b-4351eee42363" x="0" y="0" width=".135"
                            height=".30">
                            <circle cx="1" cy="1" r=".7"></circle>
                        </pattern>
                    </defs>
                    <rect fill="url(#fdca20a0-aeb4-4caf-ba1b-4351eee42363)" width="52" height="24"></rect>
                </svg>

                <span className="relative">Giga Store</span>
            </span>
        </h2>
        <p className="text-base text-gray-200 md:text-lg">With Giga Store, you can rest assured that essentials are always within your reach. Experience the convenience of seamless shopping and reliable service today.
        </p>
    </div>


    <div className="grid max-w-md gap-8 row-gap-10 sm:mx-auto lg:max-w-full lg:grid-cols-3">
        <div className="flex flex-col sm:flex-row">
            <div className="sm:mr-4">
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-50">
                    <svg className="w-12 h-12 text-blue-400" stroke="currentColor" viewBox="0 0 52 52">
                        <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"
                            points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                    </svg>
                </div>
            </div>
            <div>
                <h6 className="mb-2 font-semibold leading-5 text-gray-50">Grocery Delivery:</h6>
                <p className="mb-3 text-sm text-gray-200">
                    Our grocery delivery service offers a convenient way to shop for all your essential food items from the comfort of your home.
                </p>
                <ul className="mb-4 -ml-1 space-y-2">
                    <li className="flex text-gray-200 items-start">
                        <span className="mr-1">
                            <svg className="w-5 h-5 mt-px text-blue-400" stroke="currentColor" viewBox="0 0 52 52">
                                <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                            </svg>
                        </span>
                        Fresh Produce
                    </li>
                    <li className="flex text-gray-200 items-start">
                        <span className="mr-1">
                            <svg className="w-5 h-5 mt-px text-blue-400" stroke="currentColor" viewBox="0 0 52 52">
                                <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                            </svg>
                        </span>
                        Pantry Staples
                    </li>
                    <li className="flex text-gray-200 items-start">
                        <span className="mr-1">
                            <svg className="w-5 h-5 mt-px text-blue-400" stroke="currentColor" viewBox="0 0 52 52">
                                <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                            </svg>
                        </span>
                        Personal Care Items
                    </li>
                </ul>
                <a href="/" aria-label=""
                    className="inline-flex items-center font-semibold transition-colors duration-200 text-blue-400 hover:text-blue-800">Learn
                    more
                </a>
            </div>
        </div>
        <div className="flex flex-col sm:flex-row">
            <div className="sm:mr-4">
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-50">
                    <svg className="w-12 h-12 text-blue-400" stroke="currentColor" viewBox="0 0 52 52">
                        <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"
                            points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                    </svg>
                </div>
            </div>
            <div>
                <h6 className="mb-2 font-semibold leading-5 text-gray-50">Medicine Delivery:</h6>
                <p className="mb-3 text-sm text-gray-200">
                    Our medicine delivery service ensures timely access to vital medications, ensuring your health needs are met conveniently.
                </p>
                <ul className="mb-4 -ml-1 space-y-2">
                    <li className="flex text-gray-200 items-start">
                        <span className="mr-1">
                            <svg className="w-5 h-5 mt-px text-blue-400" stroke="currentColor" viewBox="0 0 52 52">
                                <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                            </svg>
                        </span>
                        Prescription Medications
                    </li>
                    <li className="flex text-gray-200 items-start">
                        <span className="mr-1">
                            <svg className="w-5 h-5 mt-px text-blue-400" stroke="currentColor" viewBox="0 0 52 52">
                                <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                            </svg>
                        </span>
                        Over-the-counter Drugs
                    </li>
                    <li className="flex text-gray-200 items-start">
                        <span className="mr-1">
                            <svg className="w-5 h-5 mt-px text-blue-400" stroke="currentColor" viewBox="0 0 52 52">
                                <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                            </svg>
                        </span>
                        Health Supplements
                    </li>
                </ul>
                <a href="/" aria-label=""
                    className="inline-flex items-center font-semibold transition-colors duration-200 text-blue-400 hover:text-blue-800">Learn
                    more
                </a>
            </div>
        </div>
        <div className="flex flex-col sm:flex-row">
            <div className="sm:mr-4">
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-50">
                    <svg className="w-12 h-12 text-blue-400" stroke="currentColor" viewBox="0 0 52 52">
                        <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"
                            points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                    </svg>
                </div>
            </div>
            <div>
                <h6 className="mb-2 font-semibold leading-5 text-gray-50">Wide Range of Products:</h6>
                <p className="mb-3 text-sm text-gray-200">
                    Our extensive inventory ensures that you can find everything you need, from fresh produce to over-the-counter medications, all in one place.
                </p>
                <ul className="mb-4 -ml-1 space-y-2">
                    <li className="flex text-gray-200 items-start">
                        <span className="mr-1">
                            <svg className="w-5 h-5 mt-px text-blue-400" stroke="currentColor" viewBox="0 0 52 52">
                                <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                            </svg>
                        </span>
                        Fresh Fruits and Vegetables
                    </li>
                    <li className="flex text-gray-200 items-start">
                        <span className="mr-1">
                            <svg className="w-5 h-5 mt-px text-blue-400" stroke="currentColor" viewBox="0 0 52 52">
                                <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                            </svg>
                        </span>
                        Personal Care Products
                    </li>
                    <li className="flex text-gray-200 items-start">
                        <span className="mr-1">
                            <svg className="w-5 h-5 mt-px text-blue-400" stroke="currentColor" viewBox="0 0 52 52">
                                <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                            </svg>
                        </span>
                        Healthcare Essentials
                    </li>
                </ul>
                <a href="/" aria-label=""
                    className="inline-flex items-center font-semibold transition-colors duration-200 text-blue-400 hover:text-blue-800">Learn
                    more
                </a>
            </div>
        </div>
    </div>

</div> */}
{/* <VerticalAccordion/> */}


      <Stats/>
      <Testimonials/>
      <FAQ/>
      <Footer/>
    </div>
    </TracingBeam>
  )
}

export default GigaStore