"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";


const teamDetails = () => {
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
                    <p className="mb-8 leading-relaxed">
                        At our new startup, our collaborative Not a Boring Team(NBT),
                        comprises skilled individuals committed to reshaping road safety.
                        Twa-Shin, our lead, excels in robotics, ICT, business and Physics,
                        backed by a track record of national awards and international
                        awards. Mahdi, a hardware virtuoso, adeptly manages components,
                        garnering recognition regionally and nationally. Nadim specializes
                        in UAV technology, merging drone expertise with hardware finesse.
                        Nur, a software and embedded expert, delves into advanced
                        programming and neural networks, contributing significantly to our
                        tech solutions, garnering recognition regionally and nationally.
                        Sunjim, specializes in 3D, visual design and presentations, earning
                        international acclaim in robotics. Our team members have many
                        national and international recognition. As NBT, we extend beyond
                        being a startup, actively providing tech solutions while addressing
                        the critical issue of road accidents. Our collective dedication is
                        fueled by a firsthand awareness of the consequences, propelling us
                        to ensure no mother loses a child to road mishaps.{" "}
                    </p>
                    <div className="flex justify-center">
                        <motion.a
                            variants={slideInFromLeft(1)}
                            className="py-2 px-6 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
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
