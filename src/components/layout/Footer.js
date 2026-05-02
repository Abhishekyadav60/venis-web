
"use client";


import Link from "next/link";
import { footerData } from "@/data";
import  { heroData }  from "@/data";
import { usePathname } from 'next/navigation';
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

export default function Footer() {
    const Pathname = usePathname();

  return (
    <footer className="relative bg-[#eeeeee]  text-[#000000] border-t border-[#00000040] shadow-[0px_4px_20px_4px_rgba(0,0,0,0.25)]">

      {/* Navigation */}
      <div className="px-20 pt-10 flex gap-10 font-[Myriad_Pro] font-normal text-[20px] leading-[42.05px] tracking-[2.32px]">
        {heroData.nav
        .filter((item) => item.name !== "Get in Touch")
        .map((item, index) => {
          const isActive = usePathname === item.path;

          return (
            <Link
              key={index}
              href={item.path}
              className="relative group"
            >
              {item.name}
              <span
                className={`absolute left-1/2 -translate-x-1/2 bottom-0 h-px mb-1 bg-black transition-all duration-300 ease-in-out
                ${
                  isActive
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
          );
        })}
      </div>

      {/* Top Section */}
      <div className="mx-auto px-20 py-18 flex items-start">
        
        {/* Left */}
        <div className="w-1/2">
          <p className="text-[#000000] font-[Myriad_Pro] font-normal text-[24px] leading-[42.05px] tracking-[2.32px]">
            {footerData.left.title}
          </p>
          <Link href="/contact">
          <h2 className=" group flex items-center gap-1 text-[#F05523] cursor-pointer font-[Myriad_Pro] font-normal text-[34px] leading-[42.05px] tracking-[2.32px]">
            {footerData.left.link}

            <span className="relative w-10 h-10 overflow-hidden flex items-center"> 
              <LiaLongArrowAltRightSolid 
              className="text-4xl transition-transform duration-300 ease-out group-hover:translate-x-2"
              />
            </span>
          </h2>
          </Link>
        </div>

        {/* Right */}
        <div className="w-1/2">
          <p className="text-[#000000] font-[Myriad_Pro] font-normal text-[24px] leading-[42.05px] tracking-[2.32px]">
            {footerData.right.title}
          </p>
          <h2 className=" group flex items-center gap-1 text-[#F05523] cursor-pointer font-[Myriad_Pro] font-normal text-[34px] leading-[42.05px] tracking-[2.32px]">
            {footerData.right.link}
            
            <span className="relative w-10 h-10 overflow-hidden flex items-center"> 
              <LiaLongArrowAltRightSolid 
              className="text-4xl transition-transform duration-300 ease-out group-hover:translate-x-2"
              />
            </span>
          </h2>
          
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#B2B2B2] mx-20"></div>

      {/* Bottom Section */}
      <div className="mx-auto px-20 py-8 flex justify-between items-center text-sm text-[#000000]">
        
        {/* Social links*/}
        <div className="flex items-center font-[Myriad_Pro] font-normal text-[19px] leading-[42.05px] tracking-[2.32px]">
        {footerData.socialLinks.map((item, index) => (
        <div key={index} className="flex items-center">
      
      {/* TEXT */}
      <span className="cursor-pointer hover:text-gray-600 transition">
        {item}
      </span>

      {index !== footerData.socialLinks.length - 1 && (
        <span className="mx-5 h-[17px] w-[1px] bg-[#000000]"></span>
      )}
      
       </div>
       ))}
       </div>

      {/* Legal */}
      <div className="flex w-1/2 pl-30 gap-10 text-[#000000] items-center font-[Myriad_Pro] font-normal text-[19px] leading-[42.05px] tracking-[2.20px]">
        {footerData.legalLinks.map((item, index) => (
          <span key={index} className="cursor-pointer hover:text-gray-600 transition">
            {item}
          </span>
        ))}
      </div>
    </div>
    </footer>
  );
}



