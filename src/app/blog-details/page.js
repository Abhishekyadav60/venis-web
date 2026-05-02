// "use client";

// import Image from "next/image";
// import { blogDetails } from "@/data";
// import { clsx } from 'clsx';

// export default function BlogDetailsPage() {
//   const { hero, sidebar, intro, about, quote, process, skills } = blogDetails;

//   return (
//     <div className="bg-white min-h-screen px-20 py-16 mt-25">
      
//       {/* HERO */}
//       <div className="mb-16 text-center">
//         <h1 className="text-[48px] font-medium leading-tight mb-4">
//           {hero.title}
//         </h1>
//         <p className="text-md text-gray-500 mb-6">{hero.date}</p>

//         <div className="w-full h-[550px] relative rounded-xl overflow-hidden">
//           <Image
//             src={hero.image}
//             alt="hero"
//             fill
//             className="object-cover"
//           />
//         </div>
//       </div>

//       {/* MAIN LAYOUT */}
//       <div className="grid grid-cols-4 gap-16">
        
//         {/* SIDEBAR */}
//         <div className="col-span-1">
//           <ul className="space-y-4 sticky top-20">
//             {sidebar.map((item, index) => (
//               <li
//                 key={index}
//                 className="text-[22px] uppercase font-light leading-[41.03px] cursor-pointer hover:text-black transition"
//               >
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* CONTENT */}
//         <div className="col-span-3 space-y-16">

//           {/* INTRO */}
//           <p className="font-medium text-[35px] leading-[160%] text-[#292929]">
//             {intro}
//           </p>

//           {/* ABOUT */}
//           <div>
//             <h2 className="font-bold text-[43px] leading-[53px] mb-6">
//               {about.title}
//             </h2>

//             <div className="space-y-4 font-normal text-[25px] leading-[45px] text-[#292929] ">
//               {about.description.map((para, i) => (
//                 <p key={i}>{para}</p>
//               ))}
//             </div>

//            <div className="mt-6">
//             <ul className=" ml-8 text-[23px] leading-[45px] text-[#292929]">
//               {about.focus.map((item, i) => (
//                <li key={i} className="flex items-start gap-5">
                   
//                    {/* Bullet */}
//                    <span className="mt-5 w-1.5 h-1.5 bg-black rounded-full shrink-0"></span>
                   
//                    {/* Text */}
//                    <span>{item}</span>
             
//                  </li>
//               ))}
//             </ul>
//           </div>
//           </div>

//           {/* QUOTE */}
//           <div className="rounded-xl px-2 flex items-center gap-4 ">
  
//           {/* Quote Icon */}
//           <div className="w-[82px] h-[82px]  rounded-full bg-[#e0e0e0] flex items-center justify-center shrink-0">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="28"
//               height="28"
//               viewBox="0 0 24 24"
//               fill="currentColor"
             
//             >
//               <path d="M7.17 6A5.001 5.001 0 0 0 2 11v7h7v-7H5.08A3.001 3.001 0 0 1 7.17 6zM17.17 6A5.001 5.001 0 0 0 12 11v7h7v-7h-3.92A3.001 3.001 0 0 1 17.17 6z" />
//             </svg>
//           </div>
        
//           {/* Quote Text */}
//           <p className="font-semibold text-[35px] leading-[50px] text-gray-500">
//             {quote}
//           </p>
        
//         </div>

//           {/* PROCESS */}
//           <div className="space-y-8">
//           <div>
//             <h2 className=" font-bold text-[43px] leading-[53px] mb-7">
//               {process.title}
//             </h2>

//             <div className="space-y-4 font-normal text-[25px] leading-[45.9px]">
//               {process.steps.map((step, i) => (
//                 <p key={i}>{step}</p>
//               ))}
//             </div>
//           </div>

//           {/* SKILLS */}
//           <div className="">
//             <h2 className="font-bold text-[35px] leading-[53.35px] mb-6">
//               {skills.title}
//             </h2>

//               <div className=" font-normal text-[25px] leading-[45.9px] ">
//                <div className="mb-6">
//                 <h3 className="font-medium mb-6">Design Skills:</h3>
//                    <ul className=" ml-8 space-y-2">
//                    {skills.design.map((item, i) => (
//                    <li key={i} className="flex items-start gap-5">
                   
//                    {/* Bullet */}
//                    <span className="mt-5 w-1.5 h-1.5 bg-black rounded-full shrink-0"></span>
                   
//                    {/* Text */}
//                    <span>{item}</span>
             
//                  </li>
//                ))}
//                </ul>
//             </div>

//             <div>
//               <h3 className="font-medium mb-6">Tools:</h3>
//              <ul className="ml-8 space-y-2">
//                {skills.tools.map((item, i) => (
//                  <li key={i} className="flex items-start gap-5">
                   
//                    {/*  Bullet */}
//                    <span className="mt-5 w-1.5 h-1.5 bg-black rounded-full shrink-0"></span>
                   
//                    {/* Text */}
//                    <span>{item}</span>
             
//                  </li>
//                ))}
//              </ul>
//             </div>
//             </div>
//           </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import Image from "next/image";
import { blogDetails } from "@/data";
import { clsx } from "clsx";
import { useEffect, useState } from "react";

export default function BlogDetailsPage() {
  const { hero, sidebar, intro, about, quote, process, skills } = blogDetails;

  const sections = ["about", "process", "skills", "conclusion"];
  const [active, setActive] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      let current = "about";

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - 150;
          if (window.scrollY >= top) {
            current = id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white min-h-screen px-20 py-16 mt-25">
      
      {/* HERO */}
      <div className="mb-16 text-center">
        <h1 className="text-[48px] font-medium leading-tight mb-4">
          {hero.title}
        </h1>
        <p className="text-md text-gray-500 mb-6">{hero.date}</p>

        <div className="w-full h-[550px] relative rounded-xl overflow-hidden">
          <Image src={hero.image} alt="hero" fill className="object-cover" />
        </div>
      </div>

      {/* MAIN LAYOUT */}
      <div className="grid grid-cols-4 gap-16">
        
        {/* SIDEBAR */}
        <div className="col-span-1">
          <div className="sticky top-20">

            {/* Wrapper */}
            <div className="relative pl-6">
              
              {/* Gray Line  */}
              <div className="absolute left-0 top-2 w-[4px] h-[225px] bg-gray-300"></div>

              {/* Orange Progress */}
              <div
                className="absolute left-0 top-2 w-[4px] bg-orange-500 transition-all duration-300"
                style={{
                  height:
                    active === "about"
                      ? "40px"
                      : active === "process"
                      ? "90px"
                      : active === "skills"
                      ? "150px"
                      : "180px",
                }}
              />

              {/* Menu */}
              <ul className="space-y-6">
                {sidebar.map((item, index) => {
                  const id = sections[index];

                  return (
                    <li
                      key={index}
                      onClick={() =>
                        document
                          .getElementById(id)
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                      className={clsx(
                        "text-[22px] uppercase leading-[40.20px] cursor-pointer transition",
                        active === id ? "text-black" : "text-black font-light"
                      )}
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>

            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="col-span-3 space-y-16">

          {/* INTRO */}
          <p className="font-medium text-[35px] leading-[160%] text-[#292929]">
            {intro}
          </p>

          {/* ABOUT */}
          <div id="about">
            <h2 className="font-bold text-[43px] leading-[53px] mb-6">
              {about.title}
            </h2>

            <div className="space-y-4 font-normal text-[25px] leading-[45px] text-[#292929]">
              {about.description.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="mt-6">
              <ul className="ml-8 text-[23px] leading-[45px] text-[#292929]">
                {about.focus.map((item, i) => (
                  <li key={i} className="flex items-start gap-5">
                    <span className="mt-5 w-1.5 h-1.5 bg-black rounded-full"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* QUOTE */}
          <div className="rounded-xl px-2 flex items-center gap-4">
            <div className="w-[82px] h-[82px] rounded-full bg-[#e0e0e0] flex items-center justify-center shrink-0">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.17 6A5.001 5.001 0 0 0 2 11v7h7v-7H5.08A3.001 3.001 0 0 1 7.17 6zM17.17 6A5.001 5.001 0 0 0 12 11v7h7v-7h-3.92A3.001 3.001 0 0 1 17.17 6z" />
              </svg>
            </div>

            <p className="font-semibold text-[35px] leading-[50px] text-gray-500">
              {quote}
            </p>
          </div>

          {/* PROCESS + SKILLS */}
          <div className="space-y-8">

            {/* PROCESS */}
            <div id="process">
              <h2 className="font-bold text-[43px] leading-[53px] mb-7">
                {process.title}
              </h2>

              <div className="space-y-4 font-normal text-[25px] leading-[45.9px]">
                {process.steps.map((step, i) => (
                  <p key={i}>{step}</p>
                ))}
              </div>
            </div>

            {/* SKILLS */}
            <div id="skills">
              <h2 className="font-bold text-[35px] leading-[53.35px] mb-6">
                {skills.title}
              </h2>

              <div className="font-normal text-[25px] leading-[45.9px]">
                
                <div className="mb-6">
                  <h3 className="font-medium mb-6">Design Skills:</h3>
                  <ul className="ml-8 space-y-2">
                    {skills.design.map((item, i) => (
                      <li key={i} className="flex items-start gap-5">
                        <span className="mt-5 w-1.5 h-1.5 bg-black rounded-full"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium mb-6">Tools:</h3>
                  <ul className="ml-8 space-y-2">
                    {skills.tools.map((item, i) => (
                      <li key={i} className="flex items-start gap-5">
                        <span className="mt-5 w-1.5 h-1.5 bg-black rounded-full"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}