import React from 'react'

const Stats = () => {
  return (
    <section className="py-10 bg-black  sm:py-16 lg:py-24">
    <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Numbers tell our story</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-10 text-center lg:mt-24 sm:gap-x-8 md:grid-cols-3">
            <div>
                <h3 className="font-bold text-7xl">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600"> 10k+ </span>
                </h3>
                <p className="mt-4 text-xl font-medium text-gray-400">Active Coders</p>
            </div>

            <div>
                <h3 className="font-bold text-7xl">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600"> 5000+ </span>
                </h3>
                <p className="mt-4 text-xl font-medium text-gray-400">Themes & Code Files</p>
            </div>

            <div>
                <h3 className="font-bold text-7xl">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600"> 50%</span>
                </h3>
                <p className="mt-4 text-xl font-medium text-gray-400">Withdrawal as a lifetime Royality upto 50% </p>
            </div>
        </div>
    </div>
</section>

  )
}

export default Stats