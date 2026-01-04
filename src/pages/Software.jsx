import React, { useEffect } from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import Stats from '../components/Stats.jsx'
import { Testimonials } from '../components/Testimonials.jsx'
import FAQ from '../components/FAQ.jsx'
import Hero from '../components/Hero.jsx'
import { TracingBeam } from '../components/ui/tracing-beam.tsx'
import KeenSlider from 'https://cdn.jsdelivr.net/npm/keen-slider@6.8.6/+esm'
import { WobbleCardDemo } from '../components/Wobble.jsx'

const GigaSpeed = () => {
  const keyPoints = [
    {
        "title": "Trading Software Development",
        "description": "We specialize in developing advanced trading software solutions that offer real-time trading capabilities, robust security, and comprehensive analytics."
    },
    {
        "title": "Exchange Software Solutions",
        "description": "Our expertise extends to creating secure and efficient exchange software, providing seamless and reliable platforms for cryptocurrency and stock exchanges."
    },
    {
        "title": "Customized Software Development",
        "description": "We excel in crafting tailored software solutions to meet the unique needs and challenges of our clients, ensuring optimal performance and scalability."
    }
];

  
  const features = [
    {
      title: "Electric Bikes",
      description: "Our key offering includes the manufacturing and sale of electric bikes, providing efficient and eco-friendly transportation solutions.",
    },
    {
      title: "Customizable Options",
      description: "We offer customizable options to meet individual needs, allowing customers to tailor their electric bikes according to their preferences.",
    },
    {
      title: "Global Expansion",
      description: "While initially focusing on urban centers, our sales strategy aims to expand globally based on demand, making sustainable transportation accessible worldwide.",
    },
  ];
  useEffect(() => {
    const keenSlider = new KeenSlider('#keen-slider', {
      loop: true,
      slides: {
        origin: 'center',
        perView: 1.25,
        spacing: 16,
      },
      breakpoints: {
        '(min-width: 1024px)': {
          slides: {
            origin: 'auto',
            perView: 1.5,
            spacing: 32,
          },
        },
      },
    });

    const keenSliderPrevious = document.getElementById('keen-slider-previous');
    const keenSliderNext = document.getElementById('keen-slider-next');
    const keenSliderPreviousDesktop = document.getElementById('keen-slider-previous-desktop');
    const keenSliderNextDesktop = document.getElementById('keen-slider-next-desktop');

    keenSliderPrevious.addEventListener('click', () => keenSlider.prev());
    keenSliderNext.addEventListener('click', () => keenSlider.next());
    keenSliderPreviousDesktop.addEventListener('click', () => keenSlider.prev());
    keenSliderNextDesktop.addEventListener('click', () => keenSlider.next());

    return () => {
      keenSlider.destroy();
    };
  }, []);
  
  return (
    <TracingBeam>
    <div className='bg-black'>
      <Navbar/>
      <Hero title="Exchange , Trading & Customized Softwares" words="Our team specializes in creating sophisticated exchange and trading software. We develop platforms that offer real-time trading capabilities, high security, and advanced analytics, catering to the needs of financial institutions and individual traders alike."/>

<section className="bg-black overflow-hidden">
  <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
      <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
        <h2 className="text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">
          Don't just take our word for it...
        </h2>

        <p className="mt-4 text-gray-400">
        GigaSpeed EV Motors is set to transform global transportation with its innovative, inclusive, and sustainable electric vehicles.RK Tech envisions a future where technology transcends boundaries, providing a seamless and unified experience for users and developers alike.

        </p>

        <div className="hidden lg:mt-8 lg:flex lg:gap-4">
          <button
            aria-label="Previous slide"
            id="keen-slider-previous-desktop"
            className="rounded-full border border-purple-700 p-3 text-purple-700 transition hover:bg-purple-700 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 rtl:rotate-180"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          <button
            aria-label="Next slide"
            id="keen-slider-next-desktop"
            className="rounded-full border border-purple-700 p-3 text-purple-700 transition hover:bg-purple-700 hover:text-white"
          >
            <svg
              className="size-5 rtl:rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="-mx-6 lg:col-span-2 lg:mx-0">
        <div id="keen-slider" className="keen-slider">
          {keyPoints.map((val)=>{
            return(
              <div className="keen-slider__slide">
            <blockquote
              className="flex h-full flex-col justify-between black p-6 shadow-sm sm:p-8 lg:p-12"
            >
              <div>
                <div className="mt-4">
                  <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600 sm:text-3xl">{val.title}</p>

                  <p className="mt-4 leading-relaxed text-gray-200">
                  {val.description}
                  </p>
                </div>
              </div>
            </blockquote>
          </div>
            )
          })}

        </div>
      </div>
    </div>

    <div className="mt-8 flex justify-center gap-4 lg:hidden">
      <button
        aria-label="Previous slide"
        id="keen-slider-previous"
        className="rounded-full border border-purple-700 p-4 text-purple-700 transition hover:bg-purple-700 hover:text-white"
      >
        <svg
          className="size-5 -rotate-180 transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      </button>

      <button
        aria-label="Next slide"
        id="keen-slider-next"
        className="rounded-full border border-purple-700 p-4 text-purple-700 transition hover:bg-purple-700 hover:text-white"
      >
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      </button>
    </div>
  </div>
</section>

<div className="mx-auto max-w-6xl mb-20 px-4 sm:px-6 lg:px-8 py-8">
    <h2 className="font-headline text-2xl sm:text-5xl text-center text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600 font-bold">Software Types</h2>

    <div className="grid sm:grid-cols-3 gap-16 sm:gap-8 mt-16 sm:mt-24">
        <div className="text-center">
            <div className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto left-2">
                <div className="z-10 relative w-full h-full bg-black rounded-full border border-gray-300 shadow flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="0.5"
                        stroke="white" className="text-gray-500 w-1/2 h-1/2" alt="Trading icon">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z">
                        </path>
                    </svg>
                </div>
                <div className="absolute inset-0 -translate-x-2 -translate-y-2 bg-purple-800 rounded-full"></div>
            </div>
            <h3 className="font-headline text-gray-100 text-xl sm:text-2xl mt-6 sm:mt-10">Trading Software Development</h3>
            <p className="leading-relaxed mt-4 text-gray-200">We specialize in the development of advanced trading software solutions for the stock market. Our offerings include comprehensive APIs, WebSockets, and live data integration, enabling real-time trading, extensive analytics, and enhanced decision-making capabilities for traders and investors.</p>
        </div>
        <div className="text-center">
            <div className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto left-2">
                <div className="z-10 relative w-full h-full bg-black rounded-full border border-gray-300 shadow flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="0.5"
                        stroke="white" className="text-gray-500 w-1/2 h-1/2" alt="Customizable Options icon">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"></path>
                    </svg>
                </div>
                <div className="absolute inset-0 -translate-x-2 -translate-y-2 bg-purple-800 rounded-full"></div>
            </div>
            <h3 className="font-headline text-gray-100 text-xl sm:text-2xl mt-6 sm:mt-10">Exchange Software Solutions</h3>
            <p className="leading-relaxed mt-4 text-gray-200">Our proficiency in exchange software development results in secure and efficient platforms tailored for cryptocurrency and stock exchanges. These solutions offer seamless trading experiences, robust security features, and reliable performance, ensuring a trustworthy environment for all users.</p>
        </div>
        <div className="text-center">
            <div className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto left-2">
                <div className="z-10 relative w-full h-full bg-black rounded-full border border-gray-300 shadow flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth=".5"
                        stroke="white" className="text-gray-500 w-1/2 h-1/2" alt="Global Expansion icon">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z">
                        </path>
                    </svg>
                </div>
                <div className="absolute inset-0 -translate-x-2 -translate-y-2 bg-purple-800 rounded-full"></div>
            </div>
            <h3 className="font-headline text-gray-100 text-xl sm:text-2xl mt-6 sm:mt-10">Customized Software Development</h3>
            <p className="leading-relaxed mt-4 text-gray-200">We excel in delivering customized software solutions designed to meet your specific business requirements. Our services include website development, mobile app creation for iOS and Android, and innovative web3 applications. Each solution is crafted to provide optimal performance, scalability, and user satisfaction.</p>
        </div>
    </div>
</div>

<WobbleCardDemo/>


      <Stats/>
      <Testimonials/>
      <FAQ/>
      <Footer/>
    </div>
    </TracingBeam>
  )
}

export default GigaSpeed
