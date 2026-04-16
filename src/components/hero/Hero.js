
// "use client";

// import Image from "next/image";
// import heroData from "@/data";
// import { Bebas_Neue } from "next/font/google";
// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

// const bebas = Bebas_Neue({
//   subsets: ["latin"],
//   weight: "400",
// });

// export default function Hero() {
//   const [index, setIndex] = useState(0);
//   const duration = 3500;

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIndex((prev) => (prev + 1) % heroData.right.author.length);
//     }, duration);

//     return () => clearTimeout(timer);
//   }, [index]);

//   return (
//     <section className="flex h-screen w-full">
//       {/* LEFT */}
//       <div className="w-1/2 bg-[#F05523] text-white flex flex-col justify-between p-20">
//         <div />

//         <div>
//           <h1 className={`${bebas.className} text-[75px] mt-20 leading-[1] uppercase tracking-[3px] text-[#F1F1F1]`}>
//             {heroData.left.title.map((line, i) => (
//               <span key={i} className="block whitespace-nowrap">
//                 {line}
//               </span>
//             ))}
//           </h1>

//           <button className="relative mt-12 w-fit px-3 py-1 text-[22px] cursor-pointer leading-[42px] tracking-[1px] overflow-hidden group">
//             <span className="absolute bottom-0 left-0 w-full h-[1px] mb-2 bg-white transition-opacity duration-300 group-hover:opacity-0"></span>

//             <span className="absolute inset-0 bg-white rounded-3xl z-10
//               [clip-path:circle(0%_at_0_0)]
//               group-hover:[clip-path:circle(150%_at_0_0)]
//               transition-all duration-500 ease-[cubic-bezier(0.77,0,0.175,1)]">
//             </span>

//             <span className="relative z-20 text-white inline-block 
//               transition-all duration-500 delay-75
//               group-hover:text-[#F05523] 
//               group-hover:translate-x-[4px] group-hover:translate-y-[5px]">
//               {heroData.left.button}
//             </span>
//           </button>
//         </div>

//         <div />
//       </div>

//       {/* RIGHT */}
//       <div className="w-1/2 relative">
//         <Image
//           src={heroData.right.image}
//           alt="hero"
//           fill
//           sizes="100vw"
//           className="object-cover object-[90%_5%]"
//         />

//         <div className="absolute inset-0 bg-black/80" />

//         <div className="absolute inset-0 mt-14 flex flex-col justify-between p-20 text-white">
//           <div />

//           <div>
//             <h1 className={`${bebas.className} text-[75px] mt-34 leading-[1] uppercase tracking-[3px] text-[#F1F1F1]`}>
//               {heroData.right.title.map((line, i) => (
//                 <span key={i} className="block whitespace-nowrap">
//                   {line}
//                 </span>
//               ))}
//             </h1>

//             <button className="relative mt-12 w-fit px-3 py-1 text-[20px] cursor-pointer leading-[42px] tracking-[1px] overflow-hidden group">
//               <span className="absolute mb-2 bottom-0 left-0 w-full h-[1px] bg-white transition-opacity duration-300 group-hover:opacity-0"></span>

//               <span className="absolute inset-0 bg-white rounded-3xl z-10
//                 [clip-path:circle(0%_at_0_0)]
//                 group-hover:[clip-path:circle(150%_at_0_0)]
//                 transition-all duration-500 ease-[cubic-bezier(0.77,0,0.175,1)]">
//               </span>

//               <span className="relative z-20 text-white inline-block 
//                 transition-all duration-500 delay-75
//                 group-hover:text-[#F05523] 
//                 group-hover:translate-x-[4px] group-hover:translate-y-[5px]">
//                 {heroData.right.button}
//               </span>
//             </button>
//           </div>

//           <div className="flex flex-col mt-30 gap-1">
//             <div className="h-[16px] overflow-hidden">
//               <motion.p
//                 key={index}
//                 initial={{ x: 40, opacity: 0 }}
//                 animate={{ x: 0, opacity: 0.7 }}
//                 transition={{ duration: 0.4 }}
//                 className="text-sm whitespace-nowrap"
//               >
//                 {heroData.right.author[index]}
//               </motion.p>
//             </div>

//             <div className="flex gap-1 w-[160px]">
//               {heroData.right.author.map((_, i) => {
//                 const isActive = i === index;

//                 return (
//                   <motion.div
//                     key={i}
//                     animate={{ flex: isActive ? 3 : 1 }}
//                     transition={{ duration: 0.4 }}
//                     className="h-[2px] bg-white/20 rounded-full overflow-hidden flex"
//                   >
//                     {isActive && (
//                       <motion.div
//                         key={index}
//                         initial={{ width: "0%" }}
//                         animate={{ width: "100%" }}
//                         transition={{
//                           duration: duration / 1000,
//                           ease: "linear",
//                         }}
//                         className="h-full bg-white"
//                       />
//                     )}
//                   </motion.div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }





// "use client";

// import Image from "next/image";
// import heroData from "@/data";
// import { Bebas_Neue } from "next/font/google";
// import { motion } from "framer-motion";
// import { useEffect, useState, useRef } from "react";
// import gsap from "gsap";

// const bebas = Bebas_Neue({
//   subsets: ["latin"],
//   weight: "400",
// });

// export default function Hero() {
//   const [index, setIndex] = useState(0);
//   const duration = 3500;

//   // ✅ refs (only added)
// const containerRef = useRef(null);
// const leftRef = useRef(null);
// const rightRef = useRef(null);
// const imageRef = useRef(null);

//   // 🔁 author slider (same as yours)
// useEffect(() => {
//   const left = leftRef.current;
//   const right = rightRef.current;
//   const image = imageRef.current;

//   gsap.set([left, right], { flex: 1 });

//   const tlLeft = gsap.timeline({ paused: true });
//   const tlRight = gsap.timeline({ paused: true });

//   // 👉 LEFT HOVER (SMOOTH)
//   tlLeft
//     .to(left, { flex: 1.2, duration: 0.5, ease: "power2.out" })
//     .to(right, { flex: 0.8, duration: 0.5, ease: "power2.out" }, "<")

//     .to(left.querySelectorAll("h1 span"), {
//       x: 6,
//       duration: 0.5,
//       stagger: 0.02,
//     }, "<")

//     .to(left.querySelector("button"), {
//       x: 5,
//       y: 2,
//       duration: 0.5,
//     }, "<")

//     .to(right.querySelectorAll("h1 span"), {
//       x: 10,
//       opacity: 0.85,
//       duration: 0.5,
//     }, "<")

//     .to(image, {
//       x: 10,
//       scale: 1.01,
//       duration: 0.5,
//     }, "<");


//   // 👉 RIGHT HOVER (SMOOTH)
//   tlRight
//     .to(left, { flex: 0.8, duration: 0.5, ease: "power2.out" })
//     .to(right, { flex: 1.2, duration: 0.5, ease: "power2.out" }, "<")

//     .to(right.querySelectorAll("h1 span"), {
//       x: -6,
//       duration: 0.5,
//       stagger: 0.02,
//     }, "<")

//     .to(right.querySelector("button"), {
//       x: -5,
//       y: 2,
//       duration: 0.5,
//     }, "<")

//     .to(left.querySelectorAll("h1 span"), {
//       x: -10,
//       opacity: 0.85,
//       duration: 0.5,
//     }, "<")

//     .to(image, {
//       x: -10,
//       scale: 1.01,
//       duration: 0.5,
//     }, "<");


//   // 🚀 CRITICAL FIX (no overlap)
//   left.addEventListener("mouseenter", () => {
//     tlRight.pause(0);
//     tlLeft.play();
//   });

//   left.addEventListener("mouseleave", () => {
//     tlLeft.reverse();
//   });

//   right.addEventListener("mouseenter", () => {
//     tlLeft.pause(0);
//     tlRight.play();
//   });

//   right.addEventListener("mouseleave", () => {
//     tlRight.reverse();
//   });

// }, []);

//   return (
//     <section ref={containerRef} className="flex h-screen w-full">
//       {/* LEFT */}
//       <div
//         ref={leftRef}
//         className="w-1/2 bg-[#F05523] text-white flex flex-col justify-between p-20"
//       >
//         <div />

//         <div>
//           <h1
//             className={`${bebas.className} text-[75px] mt-20 leading-[1] uppercase tracking-[3px] text-[#F1F1F1]`}
//           >
//             {heroData.left.title.map((line, i) => (
//               <span key={i} className="block whitespace-nowrap">
//                 {line}
//               </span>
//             ))}
//           </h1>

//           <button className="relative mt-12 w-fit px-3 py-1 text-[22px] cursor-pointer leading-[42px] tracking-[1px] overflow-hidden group">
//             <span className="absolute bottom-0 left-0 w-full h-[1px] mb-2 bg-white transition-opacity duration-300 group-hover:opacity-0"></span>

//             <span
//               className="absolute inset-0 bg-white rounded-3xl z-10
//               [clip-path:circle(0%_at_0_0)]
//               group-hover:[clip-path:circle(150%_at_0_0)]
//               transition-all duration-500 ease-[cubic-bezier(0.77,0,0.175,1)]"
//             ></span>

//             <span
//               className="relative z-20 text-white inline-block 
//               transition-all duration-500 delay-75
//               group-hover:text-[#F05523] 
//               group-hover:translate-x-[4px] group-hover:translate-y-[5px]"
//             >
//               {heroData.left.button}
//             </span>
//           </button>
//         </div>

//         <div />
//       </div>

//       {/* RIGHT */}
//       <div ref={rightRef} className="w-1/2 relative">
//         <Image
//           ref={imageRef}
//           src={heroData.right.image}
//           alt="hero"
//           fill
//           sizes="100vw"
//           className="object-cover object-[90%_5%]"
//         />

//         <div className="absolute inset-0 bg-black/80" />

//         <div
//           ref={rightRef}
//           className="absolute inset-0 mt-14 flex flex-col justify-between p-20 text-white"
//         >
//           <div />

//           <div>
//             <h1
//               className={`${bebas.className} text-[75px] mt-34 leading-[1] uppercase tracking-[3px] text-[#F1F1F1]`}
//             >
//               {heroData.right.title.map((line, i) => (
//                 <span key={i} className="block whitespace-nowrap">
//                   {line}
//                 </span>
//               ))}
//             </h1>

//             <button className="relative mt-12 w-fit px-3 py-1 text-[20px] cursor-pointer leading-[42px] tracking-[1px] overflow-hidden group">
//               <span className="absolute mb-2 bottom-0 left-0 w-full h-[1px] bg-white transition-opacity duration-300 group-hover:opacity-0"></span>

//               <span
//                 className="absolute inset-0 bg-white rounded-3xl z-10
//                 [clip-path:circle(0%_at_0_0)]
//                 group-hover:[clip-path:circle(150%_at_0_0)]
//                 transition-all duration-500 ease-[cubic-bezier(0.77,0,0.175,1)]"
//               ></span>

//               <span
//                 className="relative z-20 text-white inline-block 
//                 transition-all duration-500 delay-75
//                 group-hover:text-[#F05523] 
//                 group-hover:translate-x-[4px] group-hover:translate-y-[5px]"
//               >
//                 {heroData.right.button}
//               </span>
//             </button>
//           </div>

//           <div className="flex flex-col mt-30 gap-1">
//             <div className="h-[16px] overflow-hidden">
//               <motion.p
//                 key={index}
//                 initial={{ x: 40, opacity: 0 }}
//                 animate={{ x: 0, opacity: 0.7 }}
//                 transition={{ duration: 0.4 }}
//                 className="text-sm whitespace-nowrap"
//               >
//                 {heroData.right.author[index]}
//               </motion.p>
//             </div>

//             <div className="flex gap-1 w-[160px]">
//               {heroData.right.author.map((_, i) => {
//                 const isActive = i === index;

//                 return (
//                   <motion.div
//                     key={i}
//                     animate={{ flex: isActive ? 3 : 1 }}
//                     transition={{ duration: 0.4 }}
//                     className="h-[2px] bg-white/20 rounded-full overflow-hidden flex"
//                   >
//                     {isActive && (
//                       <motion.div
//                         key={index}
//                         initial={{ width: "0%" }}
//                         animate={{ width: "100%" }}
//                         transition={{
//                           duration: duration / 1000,
//                           ease: "linear",
//                         }}
//                         className="h-full bg-white"
//                       />
//                     )}
//                   </motion.div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



// safe version without gsap (only framer-motion)

// "use client";

// import Image from "next/image";
// import heroData from "@/data";
// import { Bebas_Neue } from "next/font/google";
// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { motion } from "framer-motion"; 

// const bebas = Bebas_Neue({
//   subsets: ["latin"],
//   weight: "400",
// });

// export default function Hero() {
//   const wrapperRef = useRef(null);
//   const leftRef = useRef(null);
//   const rightRef = useRef(null);
//   const leftText = useRef(null);
//   const rightText = useRef(null);
//   const imageRef = useRef(null);

  
//   const [index, setIndex] = useState(0);
//   const duration = 3500;

//   useEffect(() => {
//     const wrapper = wrapperRef.current;
//     const left = leftRef.current;
//     const right = rightRef.current;

//     const leftHover = () => {
//       gsap.to(wrapper, { x: "3%", duration: 0.6, ease: "power3.out" });
//       gsap.to(leftText.current, { x: 15, duration: 0.5 });
//       gsap.to(rightText.current, { x: 25, duration: 0.5 });
//       gsap.to(imageRef.current, { x: 30, scale: 1.05, duration: 0.8 });
//     };

//     const rightHover = () => {
//       gsap.to(wrapper, { x: "-3%", duration: 0.6, ease: "power3.out" });
//       gsap.to(leftText.current, { x: -25, duration: 0.5 });
//       gsap.to(rightText.current, { x: -15, duration: 0.5 });
//       gsap.to(imageRef.current, { x: -30, scale: 1.05, duration: 0.8 });
//     };

//     const reset = () => {
//       gsap.to(wrapper, { x: "0%", duration: 0.6, ease: "power3.out" });
//       gsap.to([leftText.current, rightText.current], { x: 0, duration: 0.5 });
//       gsap.to(imageRef.current, { x: 0, scale: 1, duration: 0.8 });
//     };

//     left.addEventListener("mouseenter", leftHover);
//     right.addEventListener("mouseenter", rightHover);
//     left.addEventListener("mouseleave", reset);
//     right.addEventListener("mouseleave", reset);

//     return () => {};
//   }, []);

//   //auto change author
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIndex((prev) => (prev + 1) % heroData.right.author.length);
//     }, duration);

//     return () => clearTimeout(timer);
//   }, [index]);

//   return (
//     <section className="h-screen w-full overflow-hidden">
//       <div
//         ref={wrapperRef}
//         className="flex w-[110%] -ml-[5%] h-full will-change-transform"
//       >
//         {/* LEFT */}
//         <div
//           ref={leftRef}
//           className="w-1/2 bg-[#F05523] text-white flex items-center justify-center px-20"
//         >
//           <div ref={leftText} className="">
//             <h1 className={`${bebas.className} text-[75px] leading-[0.95] uppercase tracking-[3px]`}>
//               {heroData.left.title.map((line, i) => (
//                 <span key={i} className="block whitespace-nowrap">
//                   {line}
//                 </span>
//               ))}
//             </h1>

//             <button className="relative mt-10 px-3 py-1 text-[22px] group overflow-hidden">
//               <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white group-hover:opacity-0" />
//               <span className="absolute inset-0 bg-white rounded-3xl z-10
//                 [clip-path:circle(0%_at_0_0)]
//                 group-hover:[clip-path:circle(150%_at_0_0)]
//                 transition-all duration-500" />
//               <span className="relative z-20 text-white group-hover:text-[#F05523]">
//                 {heroData.left.button}
//               </span>
//             </button>
//           </div>
//         </div>

//         {/* RIGHT */}
//         <div
//           ref={rightRef}
//           className="w-1/2 relative flex items-center justify-center px-20 overflow-hidden"
//         >
//           <div
//             ref={imageRef}
//             className="absolute inset-0 scale-110 will-change-transform"
//           >
//             <Image
//               src={heroData.right.image}
//               alt="hero"
//               fill
//               className="object-cover object-[90%_5%]"
//             />
//           </div>

//           <div className="absolute inset-0 bg-black/80" />

//           <div
//             ref={rightText}
//             className="relative z-10 text-white max-w-[600px] w-full"
//           >
//             <h1 className={`${bebas.className} text-[75px] leading-[0.95] uppercase tracking-[3px]`}>
//               {heroData.right.title.map((line, i) => (
//                 <span key={i} className="block whitespace-nowrap">
//                   {line}
//                 </span>
//               ))}
//             </h1>

//             <button className="relative mt-10 px-3 py-1 text-[20px] group overflow-hidden">
//               <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white group-hover:opacity-0" />
//               <span className="absolute inset-0 bg-white rounded-3xl z-10
//                 [clip-path:circle(0%_at_0_0)]
//                 group-hover:[clip-path:circle(150%_at_0_0)]
//                 transition-all duration-500" />
//               <span className="relative z-20 text-white group-hover:text-[#F05523]">
//                 {heroData.right.button}
//               </span>
//             </button>
//           </div>

//           {/* AUTHOR*/}
//           <div className="absolute bottom-20 left-30 z-10 text-white">
//             <div className="flex flex-col gap-1">
              
//               <div className="h-[16px] overflow-hidden">
//                 <motion.p
//                   key={index}
//                   initial={{ x: 40, opacity: 0 }}
//                   animate={{ x: 0, opacity: 0.7 }}
//                   transition={{ duration: 0.4 }}
//                   className="text-sm whitespace-nowrap"
//                 >
//                   {heroData.right.author[index]}
//                 </motion.p>
//               </div>

//               <div className="flex gap-1 w-[160px]">
//                 {heroData.right.author.map((_, i) => {
//                   const isActive = i === index;

//                   return (
//                     <motion.div
//                       key={i}
//                       animate={{ flex: isActive ? 3 : 1 }}
//                       transition={{ duration: 0.4 }}
//                       className="h-[2px] bg-white/20 rounded-full overflow-hidden flex"
//                     >
//                       {isActive && (
//                         <motion.div
//                           key={index}
//                           initial={{ width: "0%" }}
//                           animate={{ width: "100%" }}
//                           transition={{
//                             duration: duration / 1000,
//                             ease: "linear",
//                           }}
//                           className="h-full bg-white"
//                         />
//                       )}
//                     </motion.div>
//                   );
//                 })}
//               </div>

//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import Image from "next/image";
import heroData from "@/data";
import { Bebas_Neue } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

export default function Hero() {
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
          className="w-1/2 bg-[#F05523] text-white flex flex-col justify-between p-25 group"
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

            <button className="relative mt-12 w-fit px-6 py-2 text-[22px] cursor-pointer tracking-[1px] overflow-hidden">
              
              {/* underline */}
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white transition-opacity duration-200 group-hover:opacity-0"></span>

              {/* bg */}
              <span className="absolute inset-0 bg-white rounded-3xl z-10
                [clip-path:circle(0%_at_0_0)]
                group-hover:[clip-path:circle(150%_at_0_0)]
                transition-all duration-300 ease-out">
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
          className="w-1/2 relative overflow-hidden group"
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

              <button className="relative mt-12 w-fit px-6 py-2 cursor-pointer text-[20px] tracking-[1px] overflow-hidden">
                
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white transition-opacity duration-200 group-hover:opacity-0"></span>

                <span className="absolute inset-0 bg-white rounded-3xl z-10
                  [clip-path:circle(0%_at_0_0)]
                  group-hover:[clip-path:circle(150%_at_0_0)]
                  transition-all duration-300 ease-out">
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