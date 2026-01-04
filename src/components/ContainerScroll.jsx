"use client";
import React from "react";
import { ContainerScroll } from "../components/ui/container-scroll-animation.tsx";
import image from "/mobile-app-banner.png"
export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white">
            Now Stay Connected Anytime Anywhere <br />
              <span className="text-4xl md:text-7xl font-bold text-white mt-1 leading-none">
              Introducing our Mobile Application for Android
              </span>
            </h1>
          </>
        }
      >
        <img
          src={"https://img.freepik.com/free-vector/flat-design-gathering-data-business-concept_23-2149163770.jpg?t=st=1716207637~exp=1716211237~hmac=1e2b1ef85660c3f0d281b39308f67da35f2e7b05122721e0be6c50a967757956&w=996"}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-fit h-full object-left-top"
          draggable={false}
        />
        
      </ContainerScroll>
      <div className="flex justify-center items-center">
      <button className="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-blue-600 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-blue-600 relative bg-neutral-800 h-16 w-64 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-blue-600 after:right-8 after:top-3 after:rounded-full after:blur-lg text-center">
    Download
    </button>
    </div>
    </div>
  );
}


