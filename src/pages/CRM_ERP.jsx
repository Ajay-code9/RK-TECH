import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Stats from "../components/Stats";
import { Testimonials } from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Hero from "../components/Hero";
import { TracingBeam } from "../components/ui/tracing-beam.tsx";

import { Example } from "../components/ui/infinite-moving-cards.tsx";
import { HeroScrollDemo } from "../components/ContainerScroll.jsx";

const Card = ({ title, subtitle, Icon, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      className="w-full p-4 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-black"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-400/20 group-hover:text-violet-400 group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-2 text-2xl text-violet-600 group-hover:text-white transition-colors relative z-10 duration-300" />
      <h3 className="font-medium text-lg text-white relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
        {subtitle}
      </p>
    </a>
  );
};

const CRM_ERP = () => {
  return (
    <TracingBeam>
      <div className="bg-black">
        <Navbar />
        <Hero
          title="CRM & ERP Softwares"
          words="RK Tech excels in developing robust, scalable, and customizable ERP and CRM software solutions. Our systems streamline business operations, boost productivity, and facilitate seamless communication within organizations, helping businesses stay competitive in today's fast-paced market."
        />
        <div className="p-4 mx-5">
          <h1 className="px-10 my-10 text-3xl sm:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600 font-bold uppercase text-center">
            {" "}
            ERP Services
          </h1>
          <style jsx>{`
            h1 {
              background: linear-gradient(135deg, #0F5E3B 0%, #1F8A5A 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
            }
          `}</style>

          <div className="relative overflow-hidden bg-black pt-16 pb-32 space-y-24">
            <div className="relative overflow-hidden">
              <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
                <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
                  <div>
                    <div>
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                          className="h-8 w-8 text-white"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                          ></path>
                        </svg>
                      </span>
                    </div>

                    <div className="mt-6">
                      <h2 className="text-3xl font-bold tracking-tight text-white">
                        Start your cloud ERP journey by adopting a ready-to-run
                        solution
                      </h2>
                      <p className="mt-4 text-lg text-gray-300">
                        Run, build, and grow your business with a cloud ERP that
                        provides industry best practices and helps you build
                        breakthroughs.
                      </p>
                      <div className="mt-6">
                        <a
                          className="inline-flex rounded-lg bg-[#0F5E3B] px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-[#0F5E3B] hover:bg-[#1F8A5A] hover:ring-[#1F8A5A]"
                          href="/login"
                        >
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-12 sm:mt-16 lg:mt-0 mx-5 sm:mx-0">
                  <img
                    loading="lazy"
                    width="647"
                    height="486"
                    className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-10 lg:h-full lg:w-auto lg:max-w-2xl"
                    style={{ color: "transparent" }}
                    src="https://img.freepik.com/free-vector/gradient-erp-illustration_23-2149368728.jpg?t=st=1716206807~exp=1716210407~hmac=f7c77fbab95ba077d9ac3b906192881ca51beb440bc30f9708f9078de5ff5708&w=826"
                  />
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
                <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
                  <div>
                    <div>
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                          className="h-8 w-8 text-white"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <div className="mt-6">
                      <h2 className="text-3xl font-bold tracking-tight text-white">
                        Migrate your current ERP to a tailored-to-fit cloud
                        solution
                      </h2>
                      <p className="mt-4 text-lg text-gray-300">
                        Move to cloud ERP at your pace to safeguard your
                        existing SAP ERP investment. You can drive innovation
                        and unlock new efficiencies with intelligent automation.
                      </p>
                      <div className="mt-6">
                        <a
                          className="inline-flex rounded-lg bg-[#0F5E3B] px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-[#0F5E3B] hover:bg-[#1F8A5A] hover:ring-[#1F8A5A]"
                          href="/login"
                        >
                          Contact Us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-12 sm:mt-16 lg:mt-0 mx-5 sm:mx-0">
                  <img
                    alt="Inbox user interface"
                    loading="lazy"
                    width="647"
                    height="486"
                    className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-10 lg:h-full lg:w-auto lg:max-w-2xl"
                    style={{ color: "transparent" }}
                    src="https://img.freepik.com/free-vector/gradient-erp-illustration_23-2149379179.jpg?t=st=1716206858~exp=1716210458~hmac=92eb80359ae5ddffe7a8227cf63f65107d1d2f17ca521893904906fd4190e947&w=740"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="p-4 mx-5">
          <h1 className="px-10 my-10 text-3xl sm:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600 font-bold uppercase text-center">
            {" "}
            CRM Services
          </h1>
          <h4 className="px-10 my-10 text-2xl sm:text-xl text-transparent bg-clip-text bg-white  text-center">
            {" "}
            Our all-in-one CRM services cater to a wide range of sectors, including pharma, medical, hospitals, schools, e-commerce, retail, finance, manufacturing, import-export, hospitality, real estate, and logistics, streamlining customer interactions and enhancing management and satisfaction across all industries.
          </h4>

          <div className="relative overflow-hidden bg-black pt-16 pb-32 space-y-24">
            <div className="relative overflow-hidden">
              <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
                <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
                  <div>
                    <div>
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                          className="h-8 w-8 text-white"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                          ></path>
                        </svg>
                      </span>
                    </div>

                    <div className="mt-6">
                    <h4 className="text-3xl font-bold tracking-tight text-white">E-commerce</h4>
<p className="mt-4 text-lg text-gray-300">Seize market opportunities and drive profitable growth by delivering innovative and engaging e-commerce experiences. Our solutions help you quickly launch new business models and adapt to change in an agile way.</p>
<ul>
    <li className="mt-4 text-lg text-gray-300"><a href="#">Explore RK Tech Commerce Cloud solutions</a></li>
    <li className="mt-4 text-lg text-gray-300"><a href="#">Explore RK Tech Recommerce</a></li>
    <li className="mt-4 text-lg text-gray-300"><a href="#">View all e-commerce solutions</a></li>
</ul>
                      <div className="mt-6">
                        <a
                          className="inline-flex rounded-lg bg-[#0F5E3B] px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-[#0F5E3B] hover:bg-[#1F8A5A] hover:ring-[#1F8A5A]"
                          href="/login"
                        >
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-12 sm:mt-16 lg:mt-0 mx-5 sm:mx-0">
                  <img
                    loading="lazy"
                    width="647"
                    height="486"
                    className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-10 lg:h-full lg:w-auto lg:max-w-2xl"
                    style={{ color: "transparent" }}
                    src="https://img.freepik.com/free-photo/businesspeople-working-finance-accounting-analyze-financi_74952-1399.jpg?t=st=1716206873~exp=1716210473~hmac=9061d5b2732cb64b643b85b3928b0999b61cb528e36429562e36cfb024a00e2b&w=996"
                  />
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
                <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
                  <div>
                    <div>
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                          className="h-8 w-8 text-white"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <div className="mt-6">
                    <h4 className="text-3xl font-bold tracking-tight text-white">Customer Data</h4>
<p className="mt-4 text-lg text-gray-300">Crush revenue and growth targets with customer identity and access management, data privacy, and data management solutions that give you in-depth customer insights while reducing compliance risks.</p>
<ul>
    <li className="mt-4 text-lg text-gray-300"><a href="#">Explore RK Tech Customer Data Platform</a></li>
    <li className="mt-4 text-lg text-gray-300"><a href="#">Explore RK Tech Customer Identity and Access Management</a></li>
    <li className="mt-4 text-lg text-gray-300"><a href="#">View all customer data solutions</a></li>
</ul>
                      <div className="mt-6">
                        <a
                          className="inline-flex rounded-lg bg-[#0F5E3B] px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-[#0F5E3B] hover:bg-[#1F8A5A] hover:ring-[#1F8A5A]"
                          href="/login"
                        >
                          Contact Us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-12 sm:mt-16 lg:mt-0 mx-5 sm:mx-0">
                  <img
                    alt="Inbox user interface"
                    loading="lazy"
                    width="647"
                    height="486"
                    className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-10 lg:h-full lg:w-auto lg:max-w-2xl"
                    style={{ color: "transparent" }}
                    src="https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041853.jpg?t=st=1716206893~exp=1716210493~hmac=470be8c93813ac7f939c0c8e12bd09290fcbbe685029fd93824559c66f162a0d&w=996"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden bg-black pt-16 pb-32 space-y-24">
            <div className="relative overflow-hidden">
              <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
                <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
                  <div>
                    <div>
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                          className="h-8 w-8 text-white"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                          ></path>
                        </svg>
                      </span>
                    </div>

                    <div className="mt-6">
                    <h4 className="text-3xl font-bold tracking-tight text-white">Marketing</h4>
<p className="mt-4 text-lg text-gray-300">Automate campaigns and execute on a global scale. Customer engagement solutions from RK Tech help you identify target audiences, deliver personalised omnichannel experiences, and measure your results.</p>
<ul>
    <li className="mt-4 text-lg text-gray-300"><a href="#">Explore RK Tech Emarsys Customer Engagement</a></li>
</ul>
                      <div className="mt-6">
                        <a
                          className="inline-flex rounded-lg bg-[#0F5E3B] px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-[#0F5E3B] hover:bg-[#1F8A5A] hover:ring-[#1F8A5A]"
                          href="/login"
                        >
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-12 sm:mt-16 lg:mt-0 mx-5 sm:mx-0">
                  <img
                    loading="lazy"
                    width="647"
                    height="486"
                    className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-10 lg:h-full lg:w-auto lg:max-w-2xl"
                    style={{ color: "transparent" }}
                    src="https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041852.jpg?t=st=1716206907~exp=1716210507~hmac=c0c77f57565493a746be6a9d5fb286f205faacd91bedda0b1a076bc978f832ff&w=996"
                  />
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
                <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
                  <div>
                    <div>
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                          className="h-8 w-8 text-white"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <div className="mt-6">
                    <h4 className="text-3xl font-bold tracking-tight text-white">Customer Service</h4>
<p className="mt-4 text-lg text-gray-300">Deliver on your brand promise and offer outstanding service across the customer journey. By connecting business-wide service operations, you can accelerate issue resolution and improve customer satisfaction.</p>
<ul>
    <li className="mt-4 text-lg text-gray-300"><a href="#">Explore RK Tech Service Cloud solutions</a></li>
</ul>
                      <div className="mt-6">
                        <a
                          className="inline-flex rounded-lg bg-[#0F5E3B] px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-[#0F5E3B] hover:bg-[#1F8A5A] hover:ring-[#1F8A5A]"
                          href="/login"
                        >
                          Contact Us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-12 sm:mt-16 lg:mt-0 mx-5 sm:mx-0">
                  <img
                    alt="Inbox user interface"
                    loading="lazy"
                    width="647"
                    height="486"
                    className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-10 lg:h-full lg:w-auto lg:max-w-2xl"
                    style={{ color: "transparent" }}
                    src="https://img.freepik.com/free-photo/customer-relationship-management-concept_23-2150038409.jpg?t=st=1716206938~exp=1716210538~hmac=b24b9f82b2fed314d2c423ef4854b1890f15fc4926f566a140e24d370c3126b7&w=1060"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden bg-black pt-16 pb-32 space-y-24">
            <div className="relative overflow-hidden">
              <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
                <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
                  <div>
                    <div>
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                          className="h-8 w-8 text-white"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                          ></path>
                        </svg>
                      </span>
                    </div>

                    <div className="mt-6">
                    <h4 className="text-3xl font-bold tracking-tight text-white">Sales Automation</h4>
<p className="mt-4 text-lg text-gray-300">Empower sales teams to engage effectively with your customers. Our sales automation software streamlines and automates sales processes so that salespeople can focus on building lasting customer relationships.</p>
<ul>
    <li className="mt-4 text-lg text-gray-300"><a href="#">Explore RK Tech Sales Cloud solutions</a></li>
</ul>
                      <div className="mt-6">
                        <a
                          className="inline-flex rounded-lg bg-[#0F5E3B] px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-[#0F5E3B] hover:bg-[#1F8A5A] hover:ring-[#1F8A5A]"
                          href="/login"
                        >
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-12 sm:mt-16 lg:mt-0 mx-5 sm:mx-0">
                  <img
                    loading="lazy"
                    width="647"
                    height="486"
                    className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-10 lg:h-full lg:w-auto lg:max-w-2xl"
                    style={{ color: "transparent" }}
                    src="https://img.freepik.com/free-vector/site-stats-concept-illustration_114360-1434.jpg?t=st=1716207230~exp=1716210830~hmac=b5894dd287168cab289a77bd43fe602f5f83ab82667c589b3290fd5823d9af2d&w=740"
                  />
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
                <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
                  <div>
                    <div>
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                          className="h-8 w-8 text-white"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <div className="mt-6">
                    <h4 className="text-3xl font-bold tracking-tight text-white">Artificial Intelligence</h4>
<p className="mt-4 text-lg text-gray-300">Give your sales, service, and e-commerce teams access to AI as they complete daily tasks, providing valuable customer insights and helping them work more efficiently.</p>
<ul>
    <li className="mt-4 text-lg text-gray-300"><a href="#">Explore RK Tech AI Toolkit</a></li>
</ul>
                      <div className="mt-6">
                        <a
                          className="inline-flex rounded-lg bg-[#0F5E3B] px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-[#0F5E3B] hover:bg-[#1F8A5A] hover:ring-[#1F8A5A]"
                          href="/login"
                        >
                          Contact Us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-12 sm:mt-16 lg:mt-0 mx-5 sm:mx-0">
                  <img
                    alt="Inbox user interface"
                    loading="lazy"
                    width="647"
                    height="486"
                    className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-10 lg:h-full lg:w-auto lg:max-w-2xl"
                    style={{ color: "transparent" }}
                    src="https://img.freepik.com/free-photo/ai-cloud-concept-with-robot-arm_23-2149739748.jpg?t=st=1716206969~exp=1716210569~hmac=42634a2d3a1eb581d0fa79d39dfb487b5da28c841c3c4e2615d82659f3297896&w=900"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* <Example /> */}
        <HeroScrollDemo />

        <section className="bg-black mt-20">
          <div className="mx-auto grid max-w-lg gap-x-8 gap-y-12 px-4 py-0 sm:py-40 md:max-w-screen-xl md:grid-cols-2 md:px-8 lg:grid-cols-3">
            <div>
              <h2 className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600 font-bold">
                Unmatched <br />
                Services.
                <br />
                Unmatched <br />
                Excellence.
              </h2>
            </div>

            <div className="border-white/40 transition hover:shadow-lg cursor-pointer hover:shadow-blue-800 relative border-4 px-4 pt-14 pb-8">
              <div className="absolute -top-8 left-8 bg-black px-4 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-16 w-16"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
              </div>
              <p className="mb-3 font-medium uppercase text-white">
              FOR INDIVIDUAL CLIENTS
              </p>
              <p className="text-blue-200">
              At RK Tech, we understand that your journey towards digital transformation begins with envisioning innovative solutions. Our intuitive platforms and tailored software services provide a comprehensive toolkit to discover, plan, and implement your business strategies. With access to a wide range of CRM, ERP, and customized software solutions, we empower you to streamline your operations, optimize resources, and achieve your organizational goals. Our advanced features, real-time updates, and secure systems ensure a smooth transition, allowing you to focus on the success of your upcoming transformation.
              </p>
            </div>
            <div className="border-white/40 transition hover:shadow-lg cursor-pointer hover:shadow-blue-800 relative border-4 px-4 pt-14 pb-8">
              <div className="absolute -top-8 left-8 bg-black px-4 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-16 w-16"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
              </div>
              <p className="mb-3 font-medium uppercase text-white">
              FOR ENTERPRISE SOLUTIONS
              </p>
              <p className="text-blue-200">
              RK Tech offers robust and scalable enterprise solutions that cater to the specific needs of your organization. Our state-of-the-art technology integrates seamlessly with your existing systems, enabling efficient and cost-effective management of your business processes. Our dedicated team works closely with you to understand your business requirements, customize solutions, and provide ongoing support to optimize your operations. With our end-to-end support, you can enhance your organizational efficiency while maximizing productivity and ensuring compliance with industry standards.
              </p>
            </div>
            <div className="border-white/40 transition hover:shadow-lg cursor-pointer hover:shadow-blue-800 relative border-4 px-4 pt-14 pb-8">
              <div className="absolute -top-8 left-8 bg-black px-4 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-16 w-16"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
              </div>
              <p className="mb-3 font-medium uppercase text-white">
              WHAT SETS RK TECH APART
              </p>
              <p className="text-blue-200">
              What sets RK Tech apart is our commitment to exceptional service. Our experienced professionals are available round-the-clock to assist you with any inquiries, modifications, or emergencies during your digital transformation journey. We understand that business needs evolve, and our flexible solutions ensure that you have peace of mind.
              </p>
            </div>
            <div className="border-white/40 transition hover:shadow-lg cursor-pointer hover:shadow-blue-800 relative border-4 px-4 pt-14 pb-8">
              <div className="absolute -top-8 left-8 bg-black px-4 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-16 w-16"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
              </div>
              <p className="mb-3 font-medium uppercase text-white">
              ABOUT RK TECH
              </p>
              <p className="text-blue-200">
              RK Tech is more than just a software provider; we are your trusted partner in digital transformation. We are passionate about delivering innovative solutions and helping you achieve your business objectives. Whether you are implementing CRM, ERP, or customized software solutions, RK Tech is here to support you every step of the way.
              </p>
            </div>
            <div className="border-white/40 transition hover:shadow-lg cursor-pointer hover:shadow-blue-800 relative border-4 px-4 pt-14 pb-8">
              <div className="absolute -top-8 left-8 bg-black px-4 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-16 w-16"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
              </div>
              <p className="mb-3 font-medium uppercase text-white">
                {" "}
                START YOUR TRANSFORMATION TODAY!
              </p>
              <p className="text-blue-200">
              Embark on your digital transformation journey with RK Tech and let us help you achieve your business goals with ease and efficiency.
              </p>
            </div>
          </div>
        </section>

        <Stats />
        <Testimonials />
        <FAQ />
        <Footer />
      </div>
    </TracingBeam>
  );
};

export default CRM_ERP;
