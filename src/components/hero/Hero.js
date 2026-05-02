"use client";

import Image from "next/image";
import { heroData } from "@/data";
import { Bebas_Neue } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

export default function Hero() {

  const router = useRouter();

  const wrapperRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const leftText = useRef(null);
  const rightText = useRef(null);
  const imageRef = useRef(null);

  const [index, setIndex] = useState(0);
  const duration = 3500;

  // HOVER ANIMATION
  useEffect(() => {
    const wrapper = wrapperRef.current;
    const left = leftRef.current;
    const right = rightRef.current;

    const leftHover = () => {
      gsap.to(wrapper, { x: "1.5%", duration: 0.5, ease: "power2.out" });

      gsap.to(leftText.current, { x: 6, duration: 0.4 });
      gsap.to(rightText.current, { x: 10, duration: 0.4 });

      gsap.to(imageRef.current, {
        x: 25,
        duration: 0.6,
        ease: "power2.out",
      });
    };

    const rightHover = () => {
      gsap.to(wrapper, { x: "-1.5%", duration: 0.5, ease: "power2.out" });

      gsap.to(leftText.current, { x: -10, duration: 0.4 });
      gsap.to(rightText.current, { x: -6, duration: 0.4 });

      gsap.to(imageRef.current, {
        x: -25,
        duration: 0.6,
        ease: "power2.out",
      });
    };

    const reset = () => {
      gsap.to(wrapper, { x: "0%", duration: 0.5, ease: "power2.out" });

      gsap.to([leftText.current, rightText.current], {
        x: 0,
        duration: 0.4,
      });

      gsap.to(imageRef.current, {
        x: 0,
        duration: 0.6,
        ease: "power2.out",
      });
    };

    left.addEventListener("mouseenter", leftHover);
    right.addEventListener("mouseenter", rightHover);
    left.addEventListener("mouseleave", reset);
    right.addEventListener("mouseleave", reset);

    return () => {
      left.removeEventListener("mouseenter", leftHover);
      right.removeEventListener("mouseenter", rightHover);
      left.removeEventListener("mouseleave", reset);
      right.removeEventListener("mouseleave", reset);
    };
  }, []);

  // AUTHOR AUTO CHANGE
  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % heroData.right.author.length);
    }, duration);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <section className="h-screen w-full overflow-hidden">
      <div
        ref={wrapperRef}
        className="flex w-[104%] -ml-[2%] h-full will-change-transform"
      >
        {/* LEFT */}
        <div
          ref={leftRef}
          onClick={() => router.push("/about")}
          className="w-1/2 bg-[#F05523] text-white flex flex-col justify-between p-25 group cursor-pointer"
        >
          <div />

          <div ref={leftText} className="mt-20">
            <h1 className={`${bebas.className} text-[75px] leading-[1] uppercase tracking-[3px] text-[#F1F1F1]`}>
              {heroData.left.title.map((line, i) => (
                <span key={i} className="block whitespace-nowrap">
                  {line}
                </span>
              ))}
            </h1>

            <button
            onClick={(e) => {
              e.stopPropagation();
              router.push("/about");
            }}
             className="relative mt-12 w-fit px-6 py-2 text-[22px] cursor-pointer tracking-[1px] overflow-hidden">
              
              {/* underline */}
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white transition-opacity duration-200 group-hover:opacity-0"></span>

              {/* bg */}
             <span className="absolute bottom-0 left-0 w-full h-0 bg-white z-10 
             transition-all duration-300 ease-out 
             group-hover:h-full">
             </span>

              {/* text */}
              <span className="relative z-20 text-white inline-block 
                transition-all duration-300
                group-hover:text-[#F05523]">
                {heroData.left.button}
              </span>
            </button>
          </div>

          <div />
        </div>

        {/* RIGHT */}
        <div
          ref={rightRef}
          onClick={() => router.push("/works")}
          className="w-1/2 relative overflow-hidden group cursor-pointer"
        >
          <div
            ref={imageRef}
            className="absolute inset-0 scale-110 will-change-transform"
          >
            <Image
              src={heroData.right.image}
              alt="hero"
              fill
              className="object-cover object-[90%_5%]"
            />
          </div>

          <div className="absolute inset-0 bg-black/80" />

          <div className="absolute inset-0 mt-14 flex flex-col justify-between p-20 text-white">
            <div />

            <div ref={rightText}>
              <h1 className={`${bebas.className} text-[75px] mt-34 leading-[1] uppercase tracking-[3px] text-[#F1F1F1]`}>
                {heroData.right.title.map((line, i) => (
                  <span key={i} className="block whitespace-nowrap">
                    {line}
                  </span>
                ))}
              </h1>

              <button 
              onClick={(e) => {
              e.stopPropagation();
              router.push("/works");
            }}
              className="relative mt-12 w-fit px-6 py-2 cursor-pointer text-[20px] tracking-[1px] overflow-hidden">
                
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white transition-opacity duration-200 group-hover:opacity-0"></span>

                <span className="absolute bottom-0 left-0 w-full h-0 bg-white z-10 
                transition-all duration-300 ease-out 
                group-hover:h-full">
                </span>

                <span className="relative z-20 text-white inline-block 
                  transition-all duration-300
                  group-hover:text-[#F05523]">
                  {heroData.right.button}
                </span>
              </button>
            </div>

            {/* AUTHOR */}
            <div className="flex flex-col mt-30 gap-1">
              <div className="h-[16px] overflow-hidden">
                <motion.p
                  key={index}
                  initial={{ x: 40, opacity: 0 }}
                  animate={{ x: 0, opacity: 0.7 }}
                  transition={{ duration: 0.4 }}
                  className="text-sm whitespace-nowrap"
                >
                  {heroData.right.author[index]}
                </motion.p>
              </div>

              <div className="flex gap-1 w-[160px]">
                {heroData.right.author.map((_, i) => {
                  const isActive = i === index;

                  return (
                    <motion.div
                      key={i}
                      animate={{ flex: isActive ? 3 : 1 }}
                      transition={{ duration: 0.4 }}
                      className="h-[2px] bg-white/20 rounded-full overflow-hidden flex"
                    >
                      {isActive && (
                        <motion.div
                          key={index}
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{
                            duration: duration / 1000,
                            ease: "linear",
                          }}
                          className="h-full bg-white"
                        />
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}