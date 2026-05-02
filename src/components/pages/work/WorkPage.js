"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { heroData, workData } from "@/data";
import { Bebas_Neue } from "next/font/google";
import Link from "next/link";



const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

export default function WorkPage() {
  const { title, description, image } = heroData.right;

  const [expand, setExpand] = useState(false);

   const containerRef = useRef(null);
   const descRef = useRef(null);
   const aboutRef = useRef(null);



   useEffect(() => {
      setExpand(true);
      // META STYLE EXPAND FROM LEFT TO RIGHT
       gsap.fromTo(
        containerRef.current,
       {
         scaleX: 0.6,
         transformOrigin: "right center", 
         opacity: 0,
       },
       {
         scaleX: 1,
         opacity: 1,
         duration: 1,
         ease: "power3.out",
       }
     );
  
      //DESCRIPTION 
      gsap.fromTo(
        descRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.7,
          ease: "power2.out",
        }
      );

      gsap.to(aboutRef.current, {
      y: 80,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
    }, []);

  return (
    <div className="w-full flex">
      
      {/* LEFT SIDEBAR */}
      <Link href="/about">
      <div className="w-54.25 bg-[#f04d23] sticky top-0 h-screen flex items-center justify-center">
        
       <div
        ref={aboutRef}
        className={`${bebas.className} text-white text-[50px]`}
        style={{
        writingMode: "vertical-rl",
        transform: "rotate(180deg)",
        }}
      >
        ABOUT
    </div>
        
      </div>
      </Link>

      {/* RIGHT CONTENT */}
      <div className="flex-1">
        <div className="relative min-h-screen">
          
          <Image
            src={image}
            alt="hero"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/80"></div>

          <div className="absolute inset-0 flex items-center px-35  z-10">
            <div ref={containerRef} className="max-w-187.5 mt-20 text-white">
              
              <h1 className={`${bebas.className} text-[75px] leading-none uppercase tracking-[4px]`}>
               {heroData.right.title.map((line, i) => (
                <span key={i} className="block">
                 {line}
               </span>
                ))}
                </h1>

             <p
              ref={descRef}
              className="font-normal mt-5 text-[23px] leading-10 tracking-[2px] capitalize align-middle"
            >
              {description}
            </p>

            </div>
          </div>
        </div>

        {/* OUR WORK SECTION */}
        <div className="bg-[#f4f4f4] px-10 py-20">
          
          <h2 className="text-4xl mb-12 font-medium text-[60px] leading-[100%] tracking-[0]">Our Work</h2>
        
          <div className="grid grid-cols-3 mt-20 gap-7">
            {workData.map((item, i) => (
              <div key={i} className="group cursor-pointer">
                
                {/* IMAGE */}
                <div className="w-[390px] h-[330px] rounded-xl overflow-hidden bg-gray-300 relative">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-300" />
                  )}
                </div>
        
                {/* TEXT */}
                <div className="mt-1">
                  <h3 className="font-medium text-[25px] leading-11.25 tracking-[2px] capitalize">{item.title}</h3>
                  <p className="font-normal text-[20px] leading-11.25 tracking-[2px] capitalize">
                    {item.category}
                  </p>
                </div>
        
              </div>
            ))}
          </div>
        
        </div>

      </div>
    </div>
  );
}



// "use client";

// import { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import Image from "next/image";
// import { heroData } from "@/data";
// import { Bebas_Neue } from "next/font/google";
// import Link from "next/link";

// const bebas = Bebas_Neue({
//   subsets: ["latin"],
//   weight: "400",
// });

// export default function WorkPage() {
//   const { description, image } = heroData.right;

//   const [expand, setExpand] = useState(false);

//   const pageRef = useRef(null);     // ✅ FULL PAGE
//   const descRef = useRef(null);
//   const aboutRef = useRef(null);

//   useEffect(() => {
//     setExpand(true);

//     // ✅ FULL PAGE SLIDE (LEFT + RIGHT TOGETHER)
//     gsap.fromTo(
//       pageRef.current,
//       {
//         x: 500,
//       },
//       {
//         x: 0,
//         duration: 1.4,
//         ease: "power4.out",
//       }
//     );

//     // ✅ DESCRIPTION ANIMATION
//     gsap.fromTo(
//       descRef.current,
//       { y: 40, opacity: 0 },
//       {
//         y: 0,
//         opacity: 1,
//         duration: 1,
//         delay: 0.5,
//         ease: "power2.out",
//       }
//     );

//     // ✅ SCROLL EFFECT (same)
//     gsap.to(aboutRef.current, {
//       y: 80,
//       scrollTrigger: {
//         trigger: pageRef.current,
//         start: "top top",
//         end: "bottom top",
//         scrub: true,
//       },
//     });

//   }, []);

//   return (
//     <div className="overflow-hidden">
      
//       {/* ✅ FULL PAGE WRAPPER */}
//       <div ref={pageRef} className="w-full flex bg-black">
        
//         {/* LEFT SIDEBAR */}
//         <Link href="/about">
//           <div className="w-54.25 bg-[#f04d23] sticky top-0 h-screen flex items-center justify-center">
            
//             <div
//               ref={aboutRef}
//               className={`${bebas.className} text-white text-[50px]`}
//               style={{
//                 writingMode: "vertical-rl",
//                 transform: "rotate(180deg)",
//               }}
//             >
//               ABOUT
//             </div>

//           </div>
//         </Link>

//         {/* RIGHT CONTENT */}
//         <div className="flex-1">
          
//           <section className="relative min-h-screen">
            
//             <Image
//               src={image}
//               alt="hero"
//               fill
//               className="object-cover"
//             />

//             <div className="absolute inset-0 bg-black/80"></div>

//             <div className="absolute inset-0 flex items-center px-35 z-10">
              
//               <div className="max-w-187.5 mt-20 text-white">
                
//                 <h1
//                   className={`${bebas.className} text-[75px] leading-none uppercase tracking-[4px]`}
//                 >
//                   {heroData.right.title.map((line, i) => (
//                     <span key={i} className="block">
//                       {line}
//                     </span>
//                   ))}
//                 </h1>

//                 <p
//                   ref={descRef}
//                   className="font-normal mt-5 text-[23px] leading-10 tracking-[2px] capitalize align-middle"
//                 >
//                   {description}
//                 </p>

//               </div>

//             </div>
//           </section>

//           {/* SECTION 2 */}
//           <section className="min-h-screen bg-black text-white flex items-center justify-center">
//             <h2 className="text-4xl">Next Section</h2>
//           </section>

//           {/* SECTION 3 */}
//           <section className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
//             <h2 className="text-4xl">Another Section</h2>
//           </section>

//         </div>
//       </div>
//     </div>
//   );
// }