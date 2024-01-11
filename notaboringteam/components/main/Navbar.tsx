"use client";
import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={60}
            height={60}
            className="cursor-pointer hover:animate-slowspin rounded-full"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Not a Boring team
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto VPY_from_APL1 border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About us
            </a>
            <a href="#project" className="cursor-pointer">
              What & Why
            </a>
            <a href="#tools" className="cursor-pointer">
              We use
            </a>
            <a href="#projects" className="cursor-pointer">
              Products
            </a>
            <a href="#contact" className="cursor-pointer">
              Contact
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {/* {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            /> */}
            <Link target="_bank" href="https://www.facebook.com/profile.php?id=61555697092873">
            <Image
            alt="facebook"
            src={"/facebook.svg"}
            width={24}
            height={24}
            /></Link>

            <Link target="_bank" href="https://instagram.com/notaboringteam">
            <Image
            alt="instagram"
            src={"/instagram.svg"}
            width={24}
            height={24}
            /></Link>
          ))
        </div>
      </div>
    </div>
  );
};

export default Navbar;
