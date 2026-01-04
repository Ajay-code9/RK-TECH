"use client";

import React from "react";
import { InfiniteMovingCards2 } from "../components/ui/infinite-moving-cards.tsx";

export function Testimonials() {
    return (
        <div className="mb-10 rounded-md flex flex-col antialiased bg-black bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards2
                items={testimonials}
                direction="left"
                speed="normal"
            />
        </div>
    );
}

const testimonials = [
    {
        "quote": "RK Tech's coding marketplace transformed my career. Selling my source code and themes on their platform has significantly boosted my earnings. Their support and community are top-notch!",
        "stars": [1, 2, 3, 4, 5],
        "name": "Rahul Verma, Mumbai"
    },
    {
        "quote": "Thanks to RK Tech, I have been able to monetize my skills effectively. The platform's user-friendly interface and vast client base have allowed me to sell my admin dashboard codes with ease. Highly recommended!",
        "stars": [1, 2, 3, 4, 5],
        "name": "Anjali Mehta, Delhi"
    },
    {
        "quote": "Selling my mobile app development services on RK Tech's platform has been a game-changer. Their marketplace connects me with clients who value quality and are willing to pay for it. A fantastic experience!",
        "stars": [1, 2, 3, 4, 5],
        "name": "Karan Singh, Jaipur"
    },
    {
        "quote": "RK Tech has provided me with a great avenue to sell my blockchain and web3 developments. The platform's reach and the support from the team have been instrumental in my success. A reliable and professional service!",
        "stars": [1, 2, 3, 4, 5],
        "name": "Neha Joshi, Kolkata"
    },
    {
        "quote": "Thanks to RK Tech, I've successfully sold numerous e-commerce solutions. The platform's exposure and ease of use have greatly enhanced my business, allowing me to focus on what I do best - developing cutting-edge solutions.",
        "stars": [1, 2, 3, 4, 5],
        "name": "Ravi Nair, Bangalore"
    },
    {
        "quote": "RK Tech's platform has been a boon for my custom software development projects. The ability to reach a wide audience and the support from their team have maximized my earnings and opportunities. Highly recommended for any coder looking to grow!",
        "stars": [1, 2, 3, 4, 5],
        "name": "Sneha Patel, Ahmedabad"
    }
]
;
