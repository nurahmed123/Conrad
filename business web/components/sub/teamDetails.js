"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";
import { useState } from "react";
import Link from "next/link";



const teamDetails = () => {
  const [teamInfo, setTeamInfo] = useState("show")

  return (
    <section className="text-gray-400 body-font z-[20]">
      <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'
      >
        Our team
      </motion.div>
      <div className="w-[90%] mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div
          className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
          data-aos="zoom-out-up"
        >
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Members of
            <br className="hidden lg:inline-block" />
            NABT
          </h1>
          <p className={`mb-8 leading-relaxed ${teamInfo === "hide" ? "hidden" : "block"}`}>
            At our new startup, our collaborative Not a Boring Team(NBT),
            comprises skilled individuals committed to reshaping road safety.
            Twa-Shin, our lead, excels in robotics, ICT, business and Physics,
            backed by a track record of regional and national
            awarded. Mahdi Bin Ferdaus, a hardware virtuoso, adeptly manages components,
            garnering recognition regionally and nationally. Nadim Shahriar Apurbo specializes in UAV technology and Robotics, merging drone expertise with hardware finesse. Backed by a track record he was regional and national awarded in the field of Robotics and Technology.
            Nur Ahmad, a software and embedded expert, working with advanced
            programming, neural networks and machine learning contributing significantly to our
            tech solutions, garnering recognition regionally and nationally.
            Sunjim, specializes in 3D, visual design and presentations, earning
            international acclaim in robotics. Our team members have many
            national and international recognition. As NBT, we extend beyond
            being a startup, actively providing tech solutions while addressing
            the critical issue of road accidents. Our collective dedication is
            fueled by a firsthand awareness of the consequences, propelling us
            to ensure no mother loses a child to road mishaps.
          </p>


          <div className={`faq__holder w-full ${teamInfo !== "hide" ? "hidden" : "block"}`}>

            <details className="faq__detail flex">
              <summary className="faq__summary mb-4 text flex h-16">
                {/* <Image
                  height={35}
                  width={50}
                  className="object-cover object-center rounded-full"
                  alt="team"
                  src="/nur.jpeg"
                /> */}
                <span className="faq__question ml-20">
                  Twasin elahi
                </span>
              </summary>


              <p>will change</p>

            </details>

            <details className="faq__detail">
              <summary className="faq__summary mb-4"><span className="faq__question">Mahdi Bin Ferdaus</span></summary>
              <p className="faq__text mt-12">No more than 2GB. All files in your account must fit your allotted storage space.</p>
            </details>

            <details className="faq__detail">
              <summary className="faq__summary mb-4 text flex h-16">
                <Image
                  height={35}
                  width={50}
                  className="object-cover object-center rounded-full"
                  alt="team"
                  src="/nur.jpeg"
                />
                <span className="faq__question ml-20">
                  Nur Ahmad
                </span>
              </summary>
              <div className="member-info">
                <div className="flex">
                  <span className="px-2">Working:</span>
                  <span>Programming & Software</span>
                </div>
                <div className="flex">
                  <span className="px-2">Phone:</span>
                  <a href="tel:+8801886772094">+880 1886772094</a>
                </div>
                <div className="flex">
                  <span className="px-2">Email:</span>
                  <a href="mailto: nurahmed6@icloud.com">nurahmed6@icloud.com</a>
                </div>
                <div className="flex my-4">
                  <Link target="_bank" href="https://facebook.com/06nurahmed">
                    <Image
                      className="mr-4"
                      alt="facebook"
                      src={"/facebook.svg"}
                      width={24}
                      height={24}
                    /></Link>
                  <Link target="_bank" href="www.https://github.com/nurahmed123">
                    <Image
                      className="mr-4"
                      alt="github"
                      src={"/github.png"}
                      width={24}
                      height={24}
                    /></Link>
                </div>
              </div>
            </details>

            <details className="faq__detail">
              <summary className="faq__summary mb-4"><span className="faq__question">Nadim Shariar Apurbo</span></summary>
              <p className="faq__text mt-12">Yes! Send us a message and we’ll process your request no questions asked.</p>
            </details>

            <details className="faq__detail">
              <summary className="faq__summary mb-4"><span className="faq__question">Sunjim Hossain</span></summary>
              <p className="faq__text mt-12">Chat and email support is available 24/7. Phone lines are open during normal business hours.</p>
            </details>

          </div>


          <div className="flex justify-center mt-6">
            <motion.a
              variants={slideInFromLeft(1)}
              className="py-2 px-6 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
              onClick={() => setTeamInfo(`${teamInfo === "hide" ? "show" : "hide"}`)}
            >
              More details
            </motion.a>
          </div>
        </div>

        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6" data-aos="zoom-out-up">
          <Image

            height={1000}
            width={700}
            className="object-cover object-center rounded"
            alt="team"
            src="/teamdetails.png"
          />
        </div>
      </div>
    </section>
  );
};

export default teamDetails;
