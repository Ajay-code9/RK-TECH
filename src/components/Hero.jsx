import React from 'react'
import { TextGenerateEffect } from './ui/text-generate-effect'

const Hero = ({title, words}) => {
  return (
    <div className="hero h-auto md:h-[20rem]" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
  <div className="bg-black/80 h-full w-full "></div>
  <div className="hero-content text-center text-white">
  <div className="mx-auto py-10 text-center">
      <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>

      <p className="mt-4 text-gray-300">
      <TextGenerateEffect className='font-light' words={words}/>
        
      </p>
    </div>
  </div>
</div>
  )
}

export default Hero