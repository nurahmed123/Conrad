"use client";
import Image from "next/image";
import { React, useState, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import { motion } from 'framer-motion'
import { slideInFromLeft } from '@/utils/motion'

const projectdetailtab = () => {
    useEffect(() => {
        AOS.init({
            duration: 900,
            once: false,
        })
    }, [])

    const outLook = 
        {
            showContent: `Introducing the Smart Road Safety Beast(SRSB), our mission is
            to drive the rate of road accidents to zero. This innovative
            solution transcends conventional safety systems, integrating
            features such as real-time hazard detection, proactive
            accident prevention, comprehensive monitoring, and seamless
            emergency response. Our commitment ex...`,
            fullContentL: `Introducing the Smart Road Safety Beast(SRSB), our mission is
            to drive the rate of road accidents to zero. This innovative
            solution transcends conventional safety systems, integrating
            features such as real-time hazard detection, proactive
            accident prevention, comprehensive monitoring, and seamless
            emergency response. Our commitment extends beyond safety; it
            encompasses environmental stewardship. The SRSB reduces fuel
            waste, contributing to resource conservation along roadways.
            The impact is profound — lives saved, injuries prevented, and
            a transformative approach to road safety. Positioned for a
            market hungry for advanced safety solutions, it not only
            prioritizes lives but also presents a compelling business
            opportunity. Catering to drivers, fleet operators, and
            government agencies, our solution is market-ready. It's a
            journey towards zero accidents and a greener, more sustainable
            future, aligning with a paradigm shift in automotive safety.
            Smart Road Safety Beast emerges as the beacon of progress,
            offering a comprehensive, reliable partner for enhancing road
            safety infrastructure.`,
        }
    
    const [outLookTrigger, setOutLookTrigger] = useState("show")
    const what = 
        {
            showContent: `To reduce the energy we lose due to various accidents
            continuously this product going to be a golden one. Our
            carelessness is one of the big reasons for losing energy and
            lives. The cause of drugs and overnight driving most common
            scenario of accidents. To make sure your condition is good
            enough to drive, our product will handle this. When you try to
            start your vehicle our system will check if you are drunk or
            good. Even today’s world is also about security, according to
            this, our system will also check that you are the owner of it
            or someone else. When you start our sys...`,
            fullContentL: `To reduce the energy we lose due to various accidents
            continuously this product going to be a golden one. Our
            carelessness is one of the big reasons for losing energy and
            lives. The cause of drugs and overnight driving most common
            scenario of accidents. To make sure your condition is good
            enough to drive, our product will handle this. When you try to
            start your vehicle our system will check if you are drunk or
            good. Even today’s world is also about security, according to
            this, our system will also check that you are the owner of it
            or someone else. When you start our system you need to submit
            your facial record and driving licence also so further our
            system can check that it's you by checking your facial data.
            If is well then you will be ready to go. During long drives,
            you could feel drowsy or asleep which causes also accidents.
            In that case, our system always monitors your tiny-to-tiny
            activity like when you fall asleep or drowsy and whether you
            following all the traffic rules properly. When you feel drowsy
            or asleep vibrator will start which will mount with the seat
            belt and start to give an alert besides that it also reduces
            the car's speed. Even during the night driving light a most
            import role in the field. Many times for this light couses we
            lose lots of energy. On this time if any viche come towards
            then automatically high bim convert into low bim. Along with
            this our system also monitor surrounding thats how many
            vehicles is going by your side and whats the distance of
            these. If you come close any vehicle then our system will
            reduce the speed. Our system can predict the weather and road
            condition using gps and apis and thats corresponding it shows
            you driving tips. And all this information you can access from
            our app, even you can monitor where is your car is now and in
            which speed it runs moreover you can see how many cars are
            going from besides you. And you can lock-unlock your car using
            our apps also. As mention the system check your facial data to
            start the car, there is a two mode. Self and guest. Primarily
            it will set self mode always for more safety but when you
            share your car with some one you have to set the mode as guest
            then the guest can drive but there will be some restriction
            cause he/she had not to submit driving licence. Restriction
            means he/shi coundnt drive in high speed and highway. But you
            can off the restriction also. More over by any couse accident
            occurse our system will shated count down from 10 to 0 within
            this time if you are well then you can stop otherwise it will
            sent a message to the nearest hospital and fire station.`
        }
    
    const [whatTrigger, setWhatTrigger] = useState("show")
    return (
        <>
            <section className="text-gray-400 body-font" id="project">
                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'
                >
                    Product overview
                </motion.div>
                <div className="px-5 py-24 mx-auto flex flex-wrap items-center">
                    <div className="justify-center items-center lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden leading-relaxed text-lg">
                        <Image
                            data-aos="fade-right"
                            alt="feature"
                            height={460}
                            width={400}
                            className="object-cover object-center h-full w-full"
                            src="/projectdetailstab.png"
                        />
                    </div>
                    <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center z-[20]">
                        <div className="flex flex-col mb-10 lg:items-start items-center">
                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-5">
                                {/* <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-6 h-6"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                </svg> */}
                                <Image
                                src={"/outlook.svg"}
                                height={80}
                                width={80}
                                alt="outlook"
                                />
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-white text-lg title-font font-medium mb-3" data-aos="fade-left">
                                    Out Look
                                </h2>
                                <p className="leading-relaxed text-lg" data-aos="fade-left">
                                    {outLookTrigger === "show" ? outLook.showContent : outLook.fullContentL}
                                </p>
                                <a className="mt-3 text-indigo-400 inline-flex items-center cursor-pointer" data-aos="fade-left" onClick={() => setOutLookTrigger(outLookTrigger === "show" ? "full" : "show")}>
                                    Learn More
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-4 h-4 ml-2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col mb-10 lg:items-start items-center">
                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-5">
                                {/* <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-6 h-6"
                                    viewBox="0 0 24 24"
                                >
                                    <circle cx="6" cy="6" r="3"></circle>
                                    <circle cx="6" cy="18" r="3"></circle>
                                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                                </svg> */}
                                <Image
                                src={"/whay.svg"}
                                height={80}
                                width={80}
                                alt="what"
                                />
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-white text-lg title-font font-medium mb-3 cursor-pointer" data-aos="fade-left">
                                    What & Why
                                </h2>
                                <p className="leading-relaxed text-base" data-aos="fade-left">
                                    {whatTrigger === "show" ? what.showContent : what.fullContentL}
                                </p>
                                <a className="mt-3 text-indigo-400 inline-flex items-center cursor-pointer" data-aos="fade-left" onClick={() => setWhatTrigger(whatTrigger === "show" ? "full" : "show")}>
                                    Learn More
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-4 h-4 ml-2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col mb-10 lg:items-start items-center">
                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-5">
                                {/* <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-6 h-6"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg> */}
                                <Image
                                src={"/use.svg"}
                                height={80}
                                width={80}
                                alt="what"
                                />
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-white text-lg title-font font-medium mb-3" data-aos="fade-left">
                                    Use
                                </h2>
                                <p className="leading-relaxed text-base" data-aos="fade-left">
                                    This is very handy to use, after installing into your car you
                                    have to submit some information sucha as your driving licence,
                                    NID or Passport, name, country, phone number and you will be
                                    ready to go
                                </p>
                                {/* <a className="mt-3 text-indigo-400 inline-flex items-center cursor-pointer" data-aos="fade-left">
                                    Learn More
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-4 h-4 ml-2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );

};

export default projectdetailtab;
