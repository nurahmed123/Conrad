"use client";
/* eslint-disable */
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";
import { useState } from "react";
import Link from "next/link";

const teamDetails = () => {
  const [teamInfo, setTeamInfo] = useState("show");

  return (
    <section className="text-gray-400 body-font z-[20]" data-aos="fade-up"
      data-aos-duration="3000">
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]"
      >
        Our R&D team
      </motion.div>
      <div className="w-[90%] mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div
          className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
          data-aos="zoom-out-up"
        >
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Members of
            <br className="hidden lg:inline-block" />
            NBT
          </h1>
          <p
            className={`mb-8 leading-relaxed ${teamInfo === "hide" ? "hidden" : "block"
              }`}
          >
            At our new startup, our collaborative Not a Boring Team(NBT),
            comprises skilled individuals committed to reshaping road safety.
            Twa-Shin, our lead, excels in robotics, ICT, business and Physics,
            backed by a track record of regional and national awarded.<br />Mahdi Bin
            Ferdaus, a hardware virtuoso, adeptly manages components, garnering
            recognition regionally and nationally. <br />Nadim Shahriar Apurbo
            specializes in UAV technology and Robotics, merging drone expertise
            with hardware finesse. Backed by a track record he was regional and
            national awarded in the field of Robotics and Technology. <br />Nur Ahmad,
            a software and embedded expert, working with advanced programming,
            neural networks and machine learning contributing significantly to
            our tech solutions, garnering recognition regionally and nationally.
            <br />Sunjim, specializes in 3D, visual design and presentations, earning
            international acclaim in robotics. <br />Our team members have many
            national and international recognition. As NBT, we extend beyond
            being a startup, actively providing tech solutions while addressing
            the critical issue of road accidents. Our collective dedication is
            fueled by a firsthand awareness of the consequences, propelling us
            to ensure no mother loses a child to road mishaps.
          </p>

          <div
            className={`faq__holder w-full ${teamInfo !== "hide" ? "hidden" : "block"
              }`}
          >
            <details className="faq__detail flex">
              <summary className="faq__summary mb-4 text flex h-16">
                <Image
                  height={30}
                  width={60}
                  className="object-cover object-center rounded-full"
                  alt="team"
                  src="/twasin.png"
                />
                <span className="faq__question ml-20 mt-3">Twasin elahi</span>
              </summary>

              <div className="member-info">
                <div className="flex">
                  <span className="px-2">Working:</span>
                  <span>Excels in robotics, ICT and business</span>
                </div>
                <div className="flex">
                  <span className="px-2">Phone:</span>
                  <a href="tel:+8801844322598">+880 1844322598</a>
                </div>
                <div className="flex">
                  <span className="px-2">Email:</span>
                  <a href="mailto: twashinilahi231@gmail.com">
                    twashinilahi231@gmail.com
                  </a>
                </div>
                <div className="flex my-4">
                  <Link target="_bank" href="https://www.facebook.com/illusional.Twashin">
                    <Image
                      className="mr-4"
                      alt="facebook"
                      src={"/facebook.svg"}
                      width={24}
                      height={24}
                    />
                  </Link>
                  
                </div>
              </div>
            </details>

            <details className="faq__detail">
              <summary className="faq__summary mb-4 text flex h-16">
                <Image
                  height={30}
                  width={60}
                  className="object-cover object-center rounded-full"
                  alt="team"
                  src="/mahdi.png"
                />
                <span className="faq__question ml-20 mt-3">Mahdi Bin Ferdaus</span>
              </summary>
              <div className="member-info">
                <div className="flex">
                  <span className="px-2">Working:</span>
                  <span>Product Developer and Research</span>
                </div>
                <div className="flex">
                  <span className="px-2">Phone:</span>
                  <a href="tel:+8801774254696">+880 1774254696</a>
                </div>
                <div className="flex">
                  <span className="px-2">Email:</span>
                  <a href="mailto: ibnemahdi5@gmail.com">
                    ibnemahdi5@gmail.com
                  </a>
                </div>
                <div className="flex my-4">
                  <Link target="_bank" href="https://www.facebook.com/mahdibin.ferdaus">
                    <Image
                      className="mr-4"
                      alt="facebook"
                      src={"/facebook.svg"}
                      width={24}
                      height={24}
                    />
                  </Link>
                  
                </div>
              </div>
            </details>

            <details className="faq__detail">
              <summary className="faq__summary mb-4 text flex h-16">
                <Image
                  height={60}
                  width={60}
                  className="object-cover object-center rounded-full"
                  alt="team"
                  src="/nur.png"
                />
                <span className="faq__question ml-20 mt-3">Nur Ahmad</span>
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
                  <a href="mailto: nurahmed6@icloud.com">
                    nurahmed6@icloud.com
                  </a>
                </div>
                <div className="flex my-4">
                  <Link target="_bank" href="https://facebook.com/06nurahmed">
                    <Image
                      className="mr-4"
                      alt="facebook"
                      src={"/facebook.svg"}
                      width={24}
                      height={24}
                    />
                  </Link>
                  <Link
                    target="_bank"
                    href="https://github.com/nurahmed123"
                  >
                    <Image
                      className="mr-4"
                      alt="github"
                      src={"/github.png"}
                      width={24}
                      height={24}
                    />
                  </Link>
                </div>
              </div>
            </details>

            <details className="faq__detail">
              <summary className="faq__summary mb-4 text flex h-16">
                <Image
                  height={60}
                  width={60}
                  className="object-cover object-center rounded-full"
                  alt="team"
                  src="/sunjim.png"
                />
                <span className="faq__question ml-20 mt-3">Sunjim Hossain</span>
              </summary>
              <div className="member-info">
                <div className="flex">
                  <span className="px-2">Working:</span>
                  <span>Research and design</span>
                </div>
                <div className="flex">
                  <span className="px-2">Phone:</span>
                  <a href="tel:+8801772323974">+880 1772323974</a>
                </div>
                <div className="flex">
                  <span className="px-2">Email:</span>
                  <a href="mailto: sunjimhossain10@gmail.com">
                    sunjimhossain10@gmail.com
                  </a>
                </div>
                <div className="flex my-4">
                  <Link target="_bank" href="https://www.facebook.com/sunjim.hossain">
                    <Image
                      className="mr-4"
                      alt="facebook"
                      src={"/facebook.svg"}
                      width={24}
                      height={24}
                    />
                  </Link>
                </div>
              </div>
            </details>

            <details className="faq__detail">
              <summary className="faq__summary mb-4 text flex h-16">
                <Image
                  height={60}
                  width={60}
                  className="object-cover object-center rounded-full"
                  alt="team"
                  src="/nadim.png"
                />
                <span className="faq__question ml-20 mt-3">
                  Nadim Shariar Apurbo
                </span>
              </summary>

              <div className="member-info">
                <div className="flex">
                  <span className="px-2">Working:</span>
                  <span>UAV technology and Robotics</span>
                </div>
                <div className="flex">
                  <span className="px-2">Phone:</span>
                  <a href="tel:+8801716909892">+880 1716909892</a>
                </div>
                <div className="flex">
                  <span className="px-2">Email:</span>
                  <a href="mailto: nadimshahriarapurbo@gmail.com">
                    nadimshahriarapurbo@gmail.com
                  </a>
                </div>
                <div className="flex my-4">
                  <Link target="_bank" href="https://www.facebook.com/ERROR.Hiii">
                    <Image
                      className="mr-4"
                      alt="facebook"
                      src={"/facebook.svg"}
                      width={24}
                      height={24}
                    />
                  </Link>
                </div>
              </div>
            </details>


          </div>

          <div className="flex justify-center mt-6">
            <motion.a
              variants={slideInFromLeft(1)}
              className="py-2 px-6 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
              onClick={() =>
                setTeamInfo(`${teamInfo === "hide" ? "show" : "hide"}`)
              }
            >
              More details
            </motion.a>
          </div>
        </div>

        <div
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
          data-aos="zoom-out-up"
        >
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
