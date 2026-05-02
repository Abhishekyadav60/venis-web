// "use client";

// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { Bebas_Neue } from "next/font/google";
// import { heroData } from "@/data";

// const bebas = Bebas_Neue({
//   subsets: ["latin"],
//   weight: "400",
// });

// export default function AboutPage() {
//   const [expand, setExpand] = useState(false);

//   const imgRef = useRef(null);

//   useEffect(() => {
//     setExpand(true);

//     // ✅ IMAGE ANIMATION (clean)
//     gsap.fromTo(
//       imgRef.current,
//       {
        
//       },
//       {
//         scale: 1,
//         x: 0,
//         duration: 1,
//         ease: "power3.out",
//       }
//     );
//   }, []);

//   return (
//     <div className="w-full h-screen overflow-hidden bg-black">
//       <div className="flex w-full h-full">

//         {/* LEFT PANEL */}
//         <div
//           className={`bg-[#F05523] text-white flex items-center justify-center px-20
//           transition-all duration-1000 ease-[cubic-bezier(0.77,0,0.18,1)]
//           ${expand ? "w-[85%]" : "w-[50%]"}`}
//         >
//           {/* ✅ FIXED TEXT CONTAINER */}
//           <div className="max-w-3xl w-full">
            
//             <h1 className={`${bebas.className} text-[75px] leading-none uppercase`}>
//               {heroData.left.title.map((line, i) => (
//                 <span key={i} className="block">
//                   {line}
//                 </span>
//               ))}
//             </h1>

//             {/* ✅ NO ANIMATION */}
//             <p className="mt-6 text-[22px] leading-10">
//               {heroData.left.description}
//             </p>

//           </div>
//         </div>

//         {/* RIGHT IMAGE PANEL */}
//         <div
//           className={`relative overflow-hidden
//           transition-all duration-1000 ease-[cubic-bezier(0.77,0,0.18,1)]
//           ${expand ? "w-[15%]" : "w-[50%]"}`}
//         >
//           {/* IMAGE */}
//           <div
//             ref={imgRef}
//             className="absolute inset-0 bg-cover bg-center will-change-transform"
//             style={{
//               backgroundImage: "url('/images/hero.jpg')",
//             }}
//           />

//           {/* OVERLAY */}
//           <div className="absolute inset-0 bg-black/80" />
//         </div>

//       </div>
//     </div>
//   );
// }


"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Bebas_Neue } from "next/font/google";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import Link from "next/link";

import { heroData, servicesData, whyChooseData, processData, testimonialSection  } from "@/data";


gsap.registerPlugin(ScrollTrigger);

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

export default function AboutPage() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeWhy, setActiveWhy] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const [expand, setExpand] = useState(false);

  const containerRef = useRef(null);
  const workRef = useRef(null);
  const descRef = useRef(null);

  const nextTestimonial = () => {
  if (testimonialIndex < testimonialSection.testimonials.length - 1) {
    setTestimonialIndex(testimonialIndex + 1);
  }
};

const prevTestimonial = () => {
  if (testimonialIndex > 0) {
    setTestimonialIndex(testimonialIndex - 1);
  }
};

  useEffect(() => {
    setExpand(true);
    // META STYLE EXPAND FROM LEFT TO RIGHT
    gsap.fromTo(
      containerRef.current,
      {
        x: 0,
        scaleX: 0.6,
        transformOrigin: "left center",
      },
      {
        x: 0,
        scaleX: 1,
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
    

    // WORK MOVE 
    gsap.to(workRef.current, {
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
    <div className="flex w-full">

      {/*` LEFT CONTENT */}
      <div className="w-[86%]">

        {/* ABOUT */}
        <section className="min-h-screen bg-[#F05523] text-white flex items-center px-20">
          <div ref={containerRef} className="max-w-3xl mt-30 ml-30">
            
            <h1 className={`${bebas.className} text-[75px] leading-none uppercase tracking-[4px]`}>
              {heroData.left.title.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h1>

            <p
              ref={descRef}
              className="font-normal mt-5 text-[23px] leading-10 tracking-[2px] capitalize align-middle"
            >
              {heroData.left.description}
            </p>
          </div>
        </section>

        {/*  SERVICES  */}
        <section className="min-h-screen bg-black text-white px-20 py-20 relative">
          
          {/* TOP LINE */}
          <div className="absolute top-0 left-0 w-full h-1 bg-[#F05523]" />

          <h2 className="text-[65px] mb-10">Our Core Services</h2>

          <div className="relative">
            {servicesData.map((item, index) => (
              <div
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                className="py-8 border-b border-[#DDDDDD] flex justify-between items-center cursor-pointer relative z-10"
              >
                {/* TEXT */}
                <h3
                  className={`text-[45px] transition-all duration-300 ${
                    activeIndex === index
                      ? "text-[#F05523] scale-85"
                      : "text-white scale-100"
                  }`}
                >
                  {item.title}
                </h3>

                {/* DOT GRID */}
                <div className="grid grid-cols-2 grid-rows-2 mr-4 gap-3 w-5 h-5">
                  <span className="w-3.25 h-3.25 bg-[#F05523] rounded-full"></span>
                  <span className="w-3.25 h-3.25 bg-white rounded-full"></span>
                  <span className="w-3.25 h-3.25 bg-white rounded-full"></span>
                  <span className="w-3.25 h-3.25 bg-white rounded-full"></span>
                </div>

                {/* IMAGE */}
                {activeIndex === index && (
                  <div className="absolute right-42.5 top-1/2 -translate-y-1/2 pointer-events-none z-0">
                    <div className="w-80 rotate-7">
                      <Image
                        src={item.image}
                        alt="preview"
                        width={300}
                        height={200}
                        className="rounded-xl shadow-xl"
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/*WHY CHOOSE US */}

       <section className="bg-[#f5f5f5] px-20 py-25">
         <h2 className="mb-25 text-black text-[70px] font-medium leading-[100%]">Why Choose Us</h2>
       
         <div className="flex gap-6">
           {whyChooseData.map((item, index) => (
             <div
               key={index}       
        onMouseEnter={() => setActiveWhy(index)}
        className={`relative rounded-md p-8 cursor-pointer
        ${
          activeWhy === index
            ? "bg-[#F05523] text-white w-105"
            : "bg-[#eaeaea] text-black w-39.25 h-125 flex items-center justify-center"
               }`}
             >
               {/* NUMBER */}
               <span className="absolute top-1 right-5 text-[80px] opacity-10 font-bold">       
          {item.id}
               </span>
       
               {/* ACTIVE CONTENT */}
               {activeWhy === index ? (       
          <div>
            <h3 className="text-[40px] font-semibold mb-4 mt-10">
              {item.title}
            </h3>
            <p className="text-[24px] font-normal leading-[160%] mt-5">
              {item.description}
            </p>
          </div>
               ) : (
                <div className="h-full flex items-end justify-center pb-20">
         <div className="-rotate-90 text-[40px] font-medium">
           
           {(() => {
             const words = item.title.split(" ");
             const safeWords = words.map(word =>       
             word.replace(/-/g, "\u2011")
             );
       
             if (safeWords.length === 3) {       
           return (
           <>
            <span className="block whitespace-nowrap">
              {safeWords[0]} {safeWords[1]}
            </span>
            <span className="block whitespace-nowrap">
              {safeWords[2]}
            </span>
          </>
        );
             }
       
             if (safeWords.length === 2) {
               return (
                 <>
                   <span className="block whitespace-nowrap">       
              {safeWords[0]}
                   </span>
                   <span className="block whitespace-nowrap">
                     {safeWords[1]}
                   </span>
                 </>
               );
             }
       
             return item.title;
           })()}
       
         </div>
       </div>
        )}
       </div>
        ))}
       </div>
     </section>
      
      {/* OUR PROCESS */}

   <section className="min-h-screen bg-black text-white py-10">
  <h2 className="text-[65px] ml-15">
    {processData.title}
  </h2>
<div className="flex gap-5 overflow-x-auto overflow-y-visible no-scrollbar py-20">
  {processData.items.map((item, index) => (
    <div
      key={index}
      className="min-w-112.5 h-137.5 ml-10 relative bg-[#2f2f2f] rounded-lg p-10 flex flex-col justify-between overflow-visible"
    >
      <div>
        <h3 className="text-[32px] font-semibold mb-5 leading-snug max-w-[80%]">
          {item.title}
        </h3>

        <p className="text-[23px] text-gray-300 font-normal leading-[180%] max-w-full">
          {item.description}
        </p>
      </div>

      {/* IMAGE */}
      <div className="absolute -bottom-20 -right-15 w-70 h-70 pointer-events-none">
        <Image
          src={item.image}
          alt="shape"
          fill
          className="object-contain"
        />
      </div>
    </div>
  ))}
</div>
      </section>
      
      {/* TESTIMONIAL */}
<section className="bg-[#e9e9e9] px-15 py-15 overflow-hidden">
  <div className="flex justify-between items-center mb-12">

    {/* LEFT TEXT */}
    <div>
      <h2 className="text-[65px] font-bold mb-4 text-black">
        {testimonialSection.heading}
      </h2>
      <p className="text-gray-600 max-w-xl text-[20px]">
        {testimonialSection.subheading}
      </p>
    </div>

    {/* ARROWS */}
    <div className="flex gap-4">
      <button
        onClick={prevTestimonial}
        className="w-16 h-16 rounded-full border-2 border-orange-500 flex items-center justify-center cursor-pointer"
      >
        <ArrowLeft size={20} className="text-[#F05523]"  />
      </button>

      <button
        onClick={nextTestimonial}
        className="w-16 h-16 rounded-full border-2 border-orange-500 flex items-center justify-center cursor-pointer"
      >
        <ArrowRight size={20} className="text-[#F05523]" />
      </button>
    </div>
  </div>

  {/* SLIDER */}
  <div className="">
    <div
      className="flex gap-6 transition-transform duration-500"
      style={{
        transform: `translateX(-${testimonialIndex * 340}px)`,
      }}
    >
      {testimonialSection.testimonials.map((item) => (
        <div
          key={item.id}
          className="min-w-[320px] bg-black text-white rounded-xl p-6 flex flex-col items-center justify-between text-center"
        >
          {/* TEXT */}
          <p className="text-[16px] leading-relaxed mb-6">
            "{item.text}"
          </p>

          {/* STARS */}
          <div className="flex gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={16}
                className={`${
                  i < item.rating
                    ? "fill-[#FFB800] text-[#FFB800]"
                    : "text-[#FFB800]"
                }`}
              />
            ))}
          </div>

          {/* USER */}
          <div className="flex flex-col items-center">
            <Image
              src={item.image}
              alt={item.name}
              width={50}
              height={50}
              className="rounded-full mb-2"
            />
            <h4 className="font-semibold">{item.name}</h4>
            <p className="text-gray-400 text-sm">{item.role}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

</div>

  {/* RIGHT STICKY STRIP */}
  <Link href="/works" className="block w-[15%]">
  <div className="sticky top-0 h-screen overflow-hidden border-l border-white/70 cursor-pointer">
    
    {/* BACKGROUND IMAGE */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/hero.jpg')",
      }}
    />

    {/* DARK OVERLAY */}
    <div className="absolute inset-0 bg-black/90" />

    {/* WORK TEXT */}
    <div className="relative flex items-center justify-center h-full">
      <div
        ref={workRef}
        className={`${bebas.className} text-white text-[50px]`}
        style={{
          writingMode: "vertical-rl",
          transform: "rotate(180deg)",
        }}
      >
        WORK
      </div>
    </div>

  </div>
</Link>
</div>
  );
 }