"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";


const compare = () => {
    return (
        <section className="text-gray-600 body-font z-[20]">
            <motion.div
                variants={slideInFromLeft(0.5)}
                className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]"
            >
                Our target
            </motion.div>
            <div className="container flex flex-wrap px-5 py-24 mx-auto items-center ">
                <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-100">Why consummers</h1>
                    <p className="leading-relaxed text-base">Do you need clarification? Well now ask yourself, do you love yourself and your family? Oh! It&apos;s yes, so why do you think more, here is SRBS to make your life and family safe and secure life in every journey and travel that you make daily. There are a couple of features that make your life smooth and easier. As you love your family, you never wanna drive drunk and when you drink, you haven&apos;t sensed that time our system detects and your vehicle will not start. Even when you drive late light and suddenly you feel drowsy or asleep our system will detect that and start to alarm not only that but it will start the seat belt mounted vibrator also. If any vicle comes toward you and you are still in high light bim then it will convert it into short light bim. Even you also love your favourite car so you don&apos;t wanna lose it. There is an app where you can manage each and everything. Such as your car&apos;s live location, driving history and many more. Even you can lock and unlock your car from any corner of the world and without you, anyone can&apos;t access it. But there are two modes self and guest. But there will be some restrictions but if you wish you could change it at any moment. So why are you doing let, grab it now and go into a safe and peaceful life.</p>
                    {/* <a className="text-indigo-500 inline-flex items-center mt-4">Learn More
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </a> */}
                </div>
                <div className="flex flex-col md:w-1/2 md:pl-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-100">Why investor</h1>
                    <p className="leading-relaxed text-base">Investor interested! Why didn&apos;t. We people always try to make our life safe and secure, that&apos;s why we are spending millions of dollars continuously. And most of the time we lose our life and essential things by accident. And now if its the solution to avoid these accidents and make their life safe and secure so who doesn&apos;t wanna afford it.
                        Globally, there are approximately 1,470 million vehicles, with only 50 million of them equipped with autonomous capabilities. This indicates that our opportunity lies within the remaining 1,420 million vehicles, which accounts for approximately 96% of the overall vehicle market. Our objective is to capture this market by installing omur device. This is not all, here is a monthly and yearly subscription. Well what and which kind of subscriptions? Well as u you know your all data will be on the cloud. So there is cloud charge and according to your subscription the feature will change also. So there is a vast chance to gain a good amount of people and can generate revenue in a long turn</p>
                </div>
            </div>
        </section>
    )
    // mx-12
}

export default compare