"use client";
import React from "react";
import { WobbleCard } from "../components/ui/wobble-card.tsx";

export function WobbleCardDemo() {
    const financialProjections = [
      {
          "title": "Initial Investment",
          "description": "RK Tech has secured an initial investment of INR 4.5 million, providing a solid foundation for our innovative software development and expansion efforts."
      },
      {
          "title": "Revenue Model",
          "description": "Our revenue model includes sales of custom software solutions, service packages, and ongoing support, ensuring sustainable growth and profitability."
      },
      {
          "title": "Break-even Target",
          "description": "With a strategic approach and focus on high-quality software development, we aim to achieve break-even within 3.5 years, highlighting our commitment to financial stability and success."
      }
  ]
  ;
      const operationalPlan = [
        {
            "title": "Sustainable Practices",
            "description": "We prioritize sustainable practices in our development processes, minimizing our environmental impact and promoting a greener future through efficient and responsible software solutions."
        },
        {
            "title": "Strategic Market Presence",
            "description": "Our strategic presence in key markets maximizes visibility and accessibility, ensuring effective customer engagement and driving sales for our software solutions."
        },
        {
            "title": "Comprehensive Support Network",
            "description": "We have established a comprehensive support network to provide timely and efficient assistance, ensuring customer satisfaction and loyalty for our software products."
        }
    ]
    ;
      const salesStrategy = [
        {
            "title": "Targeted Market Focus",
            "description": "Our sales strategy initially targets sectors with high demand for software solutions, such as finance, retail, and healthcare, before expanding our reach globally."
        },
        {
            "title": "Client-Centric Approach",
            "description": "We adopt a client-centric approach, offering personalized software solutions and support to meet the diverse needs of our clientele, ensuring their success and satisfaction."
        }
    ]
    ;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl px-5 sm:mx-auto sm:px-0 w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Financial Projections
          </h2>
          <div className="grid grid-cols-1 sm:w-1/2">
          {financialProjections.map((val)=>{
            return(
                <div className="my-4">
                <h1 className="text-white font-bold text-lg">
                    - {val.title}
                </h1>
                <p className=" text-left  text-base/6 text-neutral-200">
            {val.description}
          </p>
          </div>
            )
          })}
          </div>
        </div>
        <img
          src="https://img.freepik.com/free-photo/html-css-collage-concept-with-person_23-2150062004.jpg?t=st=1716207756~exp=1716211356~hmac=00be89f66f2ffafb1c39dc72e7bcde3938885677247ccaa6e58343e835fea859&w=996"
          width={500}
          height={500}
          alt=""
          className="absolute -right-4 lg:-right-[20%] -z-10 grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
         Operational Plan
        </h2>
        <div className="grid grid-cols-1">
          {operationalPlan.map((val)=>{
            return(
                <div className="my-4">
                <h1 className="text-white font-bold text-lg">
                    - {val.title}
                </h1>
                <p className=" text-left  text-base/6 text-neutral-200">
            {val.description}
          </p>
          </div>
            )
          })}
          </div>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Sales Strategy
          </h2>
          <div className="grid grid-cols-1">
          {salesStrategy.map((val)=>{
            return(
                <div className="my-4">
                <h1 className="text-white font-bold text-lg">
                    - {val.title}
                </h1>
                <p className=" text-left  text-base/6 text-neutral-200">
            {val.description}
          </p>
          </div>
            )
          })}
          </div>
        </div>
        <img
          src="https://img.freepik.com/free-vector/new-app-development-desktop_23-2148684987.jpg?t=st=1716207855~exp=1716211455~hmac=3eb6ce41f4840b2fa4232db92676277fc3821d21348d076d51907d3421560c71&w=740"
          width={500}
          height={500}
          alt="/mobile-app-banner.jpg"
          className="absolute -right-10 -z-10 md:-right-[40%] lg:-right-[15%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}
