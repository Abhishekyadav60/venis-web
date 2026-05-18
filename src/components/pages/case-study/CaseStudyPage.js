
"use client";

import Image from "next/image";
import { caseStudyData, designProcessData, userPersonaData   } from "@/data";
import "@/app/globals.css";

import localFont from "next/font/local";


const clashDisplay = localFont({
  src: [
    {
      path: "../../../../public/fonts/ClashDisplay-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../../public/fonts/ClashDisplay-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../../public/fonts/ClashDisplay-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../../../public/fonts/ClashDisplay-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});

export default function CaseStudyPage() {
  const { hero, sidebar, overview, problem } = caseStudyData;


  return (
    <div className="bg-white">

      {/* HERO SECTION */}
      <div className="bg-[#f5f5f5] px-24 py-20 flex items-center justify-between">
        
        {/* LEFT TEXT */}
       <h1 className="max-w-150 text-[43.3px]">
          {hero.title
            .split(/(job hunting|user-centric)/g)
            .map((part, i) =>
              part === "job hunting" || part === "user-centric" ? (
                <span key={i} className="font-semibold text-black">
                  {part}
                </span>
              ) : (
                part
              )
            )}
        </h1>

        {/* RIGHT IMAGES */}
        <div className="flex gap-6 mt-25">
          <Image src={hero.image1} width={500} height={600} alt="phone1" />
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="grid grid-cols-12 px-20 py-16 gap-12">

        {/* SIDEBAR */}
        <div className="col-span-4">
          
          {/* LOGO */}
          <div className="flex items-center gap-3 bg-[#2d2d2d] text-white px-4 py-3 rounded-lg w-fit">
            <Image src={sidebar.logo} width={250} height={70} alt="logo" />
          </div>

          {/* FIELDS */}
          <div className="mt-8 space-y-6">
            {sidebar.fields.map((item, i) => (
              <div key={i}>
                <p className={`${clashDisplay.className} text-[34px] font-medium mb-4`}>{item.label}</p>
                <div className="w-[220px] h-[50px] bg-[#D9D9D9] rounded-[14px]"></div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="col-span-8 mt-20">

          {/* OVERVIEW */}
          <div className={clashDisplay.className}>
            <h2 className=" font-bold text-[55px] mb-4">{overview.title}</h2>
            <p className="text-[30px] leading-10 text-[#3d3d3d] font-regular">
              {overview.description}
            </p>
          </div>

          {/* PROBLEM */}
          <div className={clashDisplay.className}>
         <div className="mt-10">
          <h2 className="font-bold text-[55px] mb-4">
            {problem.title}
          </h2>

          <p className="text-[30px] leading-10 text-[#3d3d3d] font-normal">
            {problem.description.split("Job seekers").map((part, index) => (
              <span key={index}>
                {index === 0 && (
                  <span className="text-blue-500">Job seekers</span>
                )}
                {part}
              </span>
            ))}
          </p>
        </div>
        </div>

        </div>
      </div>

      {/* IMAGE SECTION */}
<div className="mt-8 px-10">
  <div className="overflow-hidden rounded-[20px]">
    <Image
      src="/images/bridge-poster.png"
      width={1635}
      height={886}
      alt="Bridge Poster"
      className="w-full h-[650px]"
      priority
    />
  </div>
</div>

{/* DESIGN PROCESS SECTION */}
<div className="w-full py-28 mt-24 overflow-hidden">
  <div className="max-w-400 mx-auto px-24">
    <div className="flex items-center justify-between">

      {/* LEFT TITLE */}
      <div className="font-clash ">
        <p className="text-[#0B87C9] font-semibold text-[48px] leading-[100%]">
          {designProcessData.titleTop}
        </p>

        <h2 className="font-semibold text-[60px] leading-[100%] text-[#333333] mt-2">
          {designProcessData.titleBottom}
        </h2>
      </div>

      {/* RIGHT PROCESS */}
      <div className="relative w-197.5 h-185">

        {/* MAIN SHAPE IMAGE */}
        <Image
          src="/images/process-shape.png" 
          alt="process"
          fill
          className="object-contain"
        />

        {/* ICON 1 */}
        <div className="absolute top-20 left-65 rotate-[-10deg]">
          <Image
            src="/images/edit.png"
            alt="edit"
            width={50}
            height={50}
            className="object-contain"
          />
        </div>

        {/* ICON 2 */}
        <div className="absolute top-43.75 left-100 rotate-10">
          <Image
            src="/images/search.png"
            alt="search"
            width={50}
            height={50}
            className="object-contain"
          />
        </div>

        {/* ICON 3 */}
        <div className="absolute top-83.75 left-115 rotate-[-8deg]">
          <Image
            src="/images/bulb.png"
            alt="bulb"
            width={50}
            height={50}
            className="object-contain"
          />
        </div>

        {/* ICON 4 */}
        <div className="absolute bottom-43.75 left-100 rotate-[5deg]">
          <Image
            src="/images/grid.png"
            alt="grid"
            width={50}
            height={50}
            className="object-contain"
          />
        </div>

        {/* ICON 5 */}
        <div className="absolute bottom-20 left-66.25 rotate-[-8deg]">
          <Image
            src="/images/divide.png"
            alt="divide"
            width={50}
            height={50}
            className="object-contain"
          />
        </div>

        {/* STEP 1 TEXT */}
        <div className="absolute -top-22.5 left-100">
          <div className="w-5 h-px bg-[#3A3A3A] absolute top-12 -left-16.5" />
          <div className="w-px h-22.5 bg-[#3A3A3A] absolute top-12 -left-16.5" />

         <div className={`${clashDisplay.className} translate-x-[-30px]`}>
          <h3 className="text-[#0B87C9] font-semibold mt-7 text-[30px] leading-[30px]">
            {designProcessData.steps[0].title}
          </h3>

          <div className="font-medium text-[16px] leading-[100%] text-[#3A3A3A] mt-2">
            {designProcessData.steps[0].items.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
          </div>
        </div>

        {/* STEP 2 TEXT */}
       <div className="absolute top-[80px] right-[60px]">
  
        {/* line same position */}
        <div className="w-[20px] h-[1px] bg-[#8a8a8a] absolute top-[28px] -left-[63px] -rotate-45" />
        <div className="w-[1px] h-[55px] bg-[#8a8a8a] absolute top-[35px] -left-[60px]" />
      
        {/* only text adjusted */}
        <div className={`${clashDisplay.className} translate-x-[-30px]`}>
          <h3 className="font-semibold text-[30px] leading-[30px] text-[#0B87C9]">      
      {designProcessData.steps[1].title}
          </h3>
      
          <div className="mt-3 space-y-1">
            {designProcessData.steps[1].items.map((item, index) => (
              <p
                key={index}
                className="font-medium text-[16px] leading-[100%] text-[#333]"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>

        {/* STEP 3 TEXT */}
        <div className="absolute top-[360px] right-[-10px]">
          <div className="w-[55px] h-[1px] bg-[#3A3A3A] absolute top-[15px] -left-[62px]" />
          
          <div className={`${clashDisplay.className}`}>
          <h3 className="text-[#0B87C9] font-semibold text-[30px] leading-[30px]">
            {designProcessData.steps[2].title}
          </h3>

          <div className="font-medium text-[16px] leading-[100%] text-[#3A3A3A] mt-2">
            {designProcessData.steps[2].items.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
          </div>
        </div>

        {/* STEP 4 TEXT */}
        <div className="absolute bottom-[60px] right-[95px]">
          <div className="w-[55px] h-[1px] bg-[#3A3A3A] absolute top-[15px] -left-[62px]" />
          <div className="w-[1px] h-[28px] bg-[#3A3A3A] absolute top-[-12px] -left-[62px]" />
          <div className={`${clashDisplay.className}`}>
          <h3 className="text-[#0B87C9] font-semibold text-[30px] leading-[30px]">
            {designProcessData.steps[3].title}
          </h3>

          <div className="font-medium text-[16px] leading-[100%] text-[#3A3A3A] mt-2">
            {designProcessData.steps[3].items.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
          </div>
        </div>

        {/* STEP 5 TEXT */}
        <div className="absolute bottom-[-95px] left-[400px]">
          <div className="w-[20px] h-[1px] bg-[#3A3A3A] absolute top-[11px] -left-[68px]" />
          <div className="w-[1px] h-[77px] bg-[#3A3A3A] absolute top-[-66px] -left-[68px]" />
           
           <div className={`${clashDisplay.className} translate-x-[-30px]`}>
          <h3 className="text-[#0B87C9] font-semibold text-[30px] leading-[30px]">
            {designProcessData.steps[4].title}
          </h3>

          <div className="font-medium text-[16px] leading-[100%] text-[#3A3A3A] mt-2">
            {designProcessData.steps[4].items.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>

<div className="w-full py-16 px-20">
  <div className="max-w-350 mx-auto flex justify-between">

    {/* LEFT TITLE */}
    <div>
      <h2 className="font-clash font-semibold text-[60px] leading-[100%] text-black">
        {userPersonaData.title.split(" ")[0]} <br />
        {userPersonaData.title.split(" ")[1]}
      </h2>
    </div>

    {/* RIGHT CARDS */}
    <div className="flex flex-col mt-30 gap-6">

      {userPersonaData.personas.map((person) => (
        <div
          key={person.id}
          className="relative w-220 h-135 border-[1.60px] border-[#000000] rounded-[40px] px-14 py-14 shadow-[8.38px_15.08px_6.7px_0px_#00000040]"
        >
          {/* QUOTE */}
         <div className="absolute top-15 right-15">
        <Image
          src="/images/quote-icon.png"
          alt="quote"
          width={120}
          height={120}
          className="object-contain"
        />
      </div>

          {/* PROFILE */}
          <div className="flex items-center mt-35 gap-4">
            <img
              src={person.image}
              alt={person.name}
              className="w-24.5 h-24.5 rounded-full object-cover"
            />

            <div>
              <h3 className="font-inter font-semibold text-[30px] text-[#383838]">
                {person.name}
              </h3>

              <p className="font-inter text-[23px] text-[#383838]">
                {person.role}
              </p>
            </div>
          </div>

          {/* TEXT */}
          <p className="text-[28px] text-[#383838] mt-10">
            {person.quote}
          </p>
        </div>
      ))}
    </div>
  </div>
</div>

 </div>
  );
}