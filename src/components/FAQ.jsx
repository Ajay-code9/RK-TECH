import React from 'react'

const FAQ = () => {
    const data =[
        {
            "Q": "What types of projects can coders sell on your platform?",
            "A": "Coders can sell a variety of projects on our platform, including source code, themes, admin dashboards, mobile apps, website templates, and blockchain solutions, among others."
        },
        {
            "Q": "How do you support coders in maximizing their earnings?",
            "A": "We provide a user-friendly marketplace, extensive marketing support, and a vibrant community of buyers to help coders maximize their earnings. Our platform also offers resources and guidance on best practices for showcasing and pricing their work."
        },
        {
            "Q": "What security measures do you have in place to protect coders' intellectual property?",
            "A": "We employ industry-leading security measures, including encryption, secure payment gateways, and regular vulnerability assessments, to protect coders' intellectual property. Our platform ensures that all transactions and communications are secure."
        },
        {
            "Q": "What kind of ongoing support and resources do you provide to coders?",
            "A": "We offer ongoing support through our dedicated customer service team, as well as resources such as tutorials, webinars, and community forums to help coders continuously improve their skills and stay updated with industry trends."
        },
        {
            "Q": "How do you ensure the quality and reliability of the projects sold on your platform?",
            "A": "We have a thorough vetting process for projects listed on our platform, including code reviews and quality checks. Additionally, our community-driven rating and review system helps maintain high standards and reliability for all projects sold."
        }
    ]
    
    return (
        <div>

            <div className="relative mx-auto my-10 w-full px-5 py-16 text-white sm:px-20 md:max-w-screen-lg lg:py-24">
                <h2 className="mb-5 text-4xl text-center font-serif  sm:text-5xl">Have Questions? Checkout these FAQs</h2>
                <p className="mb-12 text-center text-lg text-gray-300">We have written down answers to some of the frequently asked questions. But, if you still have any queries, feel free to ping us on chat.</p>
                <div className="space-y-4">
                    {data.map((val)=>{
                        return(
                            <details
                        className="group border-s-4 border-blue-900  p-6 [&_summary::-webkit-details-marker]:hidden"
                    >
                        <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                            <h2 className="text-lg font-medium text-gray-200">
                                {val.Q}
                            </h2>

                            <span className="shrink-0 rounded-full p-1.5 text-gray-200 sm:p-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                        </summary>

                        <p className="mt-4 leading-relaxed text-gray-400">
                            {val.A}
                        </p>
                    </details>
                        )
                    })}

                   
                </div>
            </div>

        </div>
    )
}

export default FAQ