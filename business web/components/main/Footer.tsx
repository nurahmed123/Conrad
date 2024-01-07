import React from "react";
import {
    RxDiscordLogo,
    RxGithubLogo,
    RxInstagramLogo,
    RxTwitterLogo,
    RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] " id="contact" data-aos="fade-up"
        data-aos-duration="3000">
            <div className="w-full flex flex-col items-center justify-center m-auto">
                <div className="w-full h-full flex flex-row items-center justify-around flex-wrap z-[20]">


                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Community</div>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <FaYoutube />
                            <span className="text-[15px] ml-[6px]"><Link target="_blank" href="https://youtube.com/bongprogramiz">Youtube</Link></span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxGithubLogo />
                            <span className="text-[15px] ml-[6px]"><Link target="_blank" href="https://github.com/nurahmed123">Github</Link></span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxDiscordLogo />
                            <span className="text-[15px] ml-[6px]"><Link href="https://discord.gg/U24a53ZF" target="_blank">Discord</Link></span>
                        </p>
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Social Media</div>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <FaYoutube />
                            <span className="text-[15px] ml-[6px]">Instagram</span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxGithubLogo />
                            <span className="text-[15px] ml-[6px]">Twitter</span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxDiscordLogo />
                            <span className="text-[15px] ml-[6px]">Linkedin</span>
                        </p>
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">About</div>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">

                            <span className="text-[15px] ml-[6px]">Become Sponsor</span>
                        </p>
                        <p className="flex flex-row items-center my-[15px]">

                            <span className="text-[15px] ml-[6px]">Feel free to contact</span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">

                            <span className="text-[15px] ml-[6px]"><a href="mailto:contact@notaboringteam.com">contact@notaboringteam.com</a></span>
                        </p>
                    </div>
                </div>

                <div className="mb-[20px] text-[15px] text-center">
                    &copy; Not A Boring Team 2023 Inc. All rights reserved
                </div>
            </div>
        </div>
    )
}

export default Footer