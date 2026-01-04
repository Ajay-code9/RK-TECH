import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import { Testimonials } from '../components/Testimonials.jsx';
import Stats from '../components/Stats.jsx';
import FAQ from '../components/FAQ.jsx';
import Hero from '../components/Hero.jsx';
import { TracingBeam } from '../components/ui/tracing-beam.tsx';


const GigaTech = () => {
  const [count, setCount] = useState(6);
  const data = [
    {
      "heading": "Website Development",
      "content": "Coders can craft bespoke websites using cutting-edge technology to ensure a seamless user experience, including responsive designs and optimized performance.",
      "icon": ""
    },
    {
      "heading": "Mobile App Development",
      "content": "Develop native and cross-platform apps for iOS and Android, focusing on optimal performance and user engagement.",
      "icon": ""
    },
    {
      "heading": "Admin Dashboards",
      "content": "Create intuitive and feature-rich admin dashboards for managing business operations and data effectively.",
      "icon": ""
    },
    {
      "heading": "Custom Software Development",
      "content": "Offer tailored software solutions that address unique business needs, from enterprise software to specialized industry applications.",
      "icon": ""
    },
    {
      "heading": "Front-End Development",
      "content": "Develop visually appealing and user-friendly front-end interfaces using languages like HTML, CSS, JavaScript, and frameworks like React and Angular.",
      "icon": ""
    },
    {
      "heading": "Back-End Development",
      "content": "Provide robust back-end development services using technologies like Node.js, Django, Ruby on Rails, and more.",
      "icon": ""
    },
    {
      "heading": "Full Stack Development",
      "content": "Offer comprehensive full stack development services, handling both front-end and back-end development to deliver complete applications.",
      "icon": ""
    },
    {
      "heading": "API Development and Integration",
      "content": "Develop and integrate APIs to enhance the functionality of applications and ensure seamless data exchange between systems.",
      "icon": ""
    },
    {
      "heading": "E-commerce Solutions",
      "content": "Build robust e-commerce platforms with intuitive interfaces, secure payment gateways, and features that enhance the online shopping experience.",
      "icon": ""
    },
    {
      "heading": "Game Development",
      "content": "Create engaging and interactive games for various platforms, utilizing technologies like Unity and Unreal Engine.",
      "icon": ""
    },
    {
      "heading": "Database Management",
      "content": "Design, develop, and maintain efficient database systems using SQL, NoSQL, and other database technologies.",
      "icon": ""
    },
    {
      "heading": "Blockchain Development",
      "content": "Develop decentralized applications and smart contracts using blockchain technologies like Ethereum, Hyperledger, and others.",
      "icon": ""
    },
    {
      "heading": "UI/UX Design",
      "content": "Design visually stunning and user-friendly interfaces to maximize customer satisfaction and engagement.",
      "icon": ""
    },
    {
      "heading": "Cloud Solutions",
      "content": "Provide cloud computing services, including setup, migration, and maintenance of cloud infrastructure using AWS, Azure, and Google Cloud.",
      "icon": ""
    },
    {
      "heading": "Cybersecurity Services",
      "content": "Implement robust security measures to protect sensitive data and ensure compliance with industry regulations.",
      "icon": ""
    },
    {
      "heading": "DevOps Services",
      "content": "Offer DevOps services to streamline software development processes, automate workflows, and ensure continuous integration and delivery.",
      "icon": ""
    },
    {
      "heading": "AI and Machine Learning",
      "content": "Develop AI-driven applications and machine learning models to provide intelligent solutions and insights.",
      "icon": ""
    },
    {
      "heading": "Data Analytics",
      "content": "Harness data to provide actionable insights for informed decision-making and business growth.",
      "icon": ""
    },
    {
      "heading": "IT Consulting",
      "content": "Offer expert guidance and strategic advice to optimize IT infrastructure and technology investments for business success.",
      "icon": ""
    },
    {
      "heading": "IT Support and Maintenance",
      "content": "Provide reliable support and maintenance services to ensure smooth operation and uptime of IT systems and applications.",
      "icon": ""
    }
  ]
  

  return (
    <TracingBeam>
    <div className='bg-black'>
      <Navbar/>
      <Hero title="Coding Marketplace" words="We provide a platform for young coders and experienced developers to utilize their skills, sell their source code, themes, and more. Our marketplace enables coders to monetize their expertise, offering a vibrant community where their creations can thrive and be recognized by businesses in need of high-quality code."/>
      <section className="bg-black text-white">
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-8 lg:px-8 lg:py-8">

    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {data.slice(0, count).map((val)=>{
        return (
          <a
        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="#"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-10 text-pink-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>

        <h2 className="mt-4 text-xl font-bold text-white">{val.heading}</h2>

        <p className="mt-1 text-sm text-gray-300">
          {val.content}
        </p>
      </a>
        )
      })}
    </div>

    <div className="mt-12 text-center">
      <p
        onClick={()=>{if(count <= data.length){setCount(count + 6)}}}
        className="inline-block cursor-pointer rounded bg-[#0F5E3B] px-12 py-3 text-sm font-medium text-white transition hover:bg-[#1F8A5A] focus:outline-none focus:ring focus:ring-yellow-400"
      >
        Load more
      </p>
    </div>
  </div>
</section>
<Stats/>
<Testimonials/>
<FAQ/>
      <Footer/>
    </div>
    </TracingBeam>
  )
}

export default GigaTech
