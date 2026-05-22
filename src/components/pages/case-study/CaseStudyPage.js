
"use client";

import Image from "next/image";
import { Check, X } from "lucide-react";
import { caseStudyData, designProcessData, userPersonaData, competitiveAnalysisData, logoBreakdownData, typographyData, colourData, iconsData, conclusionData } from "@/data";
import "@/app/globals.css";

import localFont from "next/font/local";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


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

      {/* IMAGE */}
<div className="mt-8 px-10">
  <div className="overflow-hidden rounded-[20px]">
    <Image
      src="/images/bridge-poster.png"
      width={1635}
      height={886}
      alt="Bridge Poster"
      className="w-full h-162.5"
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

{/* bridge-login Image */}
<div className="w-full py-8">
   <div className="max-w-375 mx-auto px-20">

    {/* height yaha control hogi */}
    <div className="relative h-200 rounded-[24px] overflow-hidden border border-[#1697eb]">
      <Image
        src="/images/bridge-login.png"
        alt="Bridge UI"
        fill
        className="object-cover transition-transform duration-500 hover:scale-[1.02]"
      />
    </div>

  </div>
</div>

{/* COMPETITIVE ANALYSIS */}
<div className="w-full py-24">
      <div className="max-w-[1600px] mx-auto px-25 flex items-start justify-between gap-20">

        {/* LEFT TITLE */}
        <div className="w-[28%]">
          <h2 className=" font-clash font-semibold text-[60px] leading-[100%]  text-black">
            {competitiveAnalysisData.title.split(" ")[0]}
            <br />
            {competitiveAnalysisData.title.split(" ")[1]}
          </h2>
        </div>

        {/* TABLE */}
        <div className="w-250 mt-35">
          <div className="rounded-[10px] overflow-hidden">

            {/* HEADER */}
            <div className="grid grid-cols-4 border-t border-l border-r border-[#8d8d8d]  bg-white">

              <div className="h-22 flex items-center justify-center border-r border-b border-[#8d8d8d]">
                <h3 className="font-clash font-medium text-[25px] leading-[100%] text-[#353535]">
                  Company Name
                </h3>
              </div>

              {competitiveAnalysisData.companies.map((company, index) => (
                <div
                  key={index}
                  className={`h-22 flex items-center justify-center border-b border-[#8d8d8d] ${
                    index !== competitiveAnalysisData.companies.length - 1
                      ? "border-r border-[#8d8d8d]"
                      : ""
                  }`}
                >
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={130}
                    height={30}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>

            {/* ROWS */}
            {competitiveAnalysisData.rows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="grid grid-cols-4 border-l border-r border-[#8d8d8d]  bg-[#E6E6E6]"
              >

                {/* FEATURE */}
                <div className="h-[88px] px-4 flex items-center border-r border-b border-[#8d8d8d]">
                  <p className="font-clash font-medium text-[18px] leading-[100%] text-[#4B4B4B]">
                    {row.feature}
                  </p>
                </div>

                {/* VALUES */}
                {row.values.map((value, valueIndex) => (
                  <div
                    key={valueIndex}
                    className={`h-[88px] flex items-center justify-center border-b border-[#8d8d8d] ${
                      valueIndex !== row.values.length - 1
                        ? "border-r border-[#8d8d8d]"
                        : ""
                    }`}
                  >
                    {value ? (
                      <div className="w-9 h-9 rounded-full bg-[#43C46B] flex items-center justify-center">
                        <Check className="w-5 h-5 text-white stroke-[3]" />
                      </div>
                    ) : (
                      <div className="w-9 h-9 rounded-full bg-[#F05B5B] flex items-center justify-center">
                        <X className="w-5 h-5 text-white stroke-[3]" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

      </div>
   </div>


   {/* LOGO BREAKDOWN */}

    <section className="w-full">
  <div className="mx-auto bg-[#4B4B4B] relative overflow-hidden">

    {/* TOP LIGHT */}
    <div className="absolute top-0 left-0 w-full h-[280px] bg-[linear-gradient(180deg,_#FFFFFF_3.25%,_#474747_100%)] z-10" />

    {/* BOTTOM LIGHT */}
    <div className="absolute bottom-0 left-0 w-full h-[280px] bg-[linear-gradient(180deg,_#484848_0%,_#FFFFFF_100%)] z-10" />

    <div className="relative z-20 px-25 py-80">

      {/* TITLE */}
      <h2 className="font-clash font-semibold text-[60px] leading-[100%] text-white absolute top-55">
        {logoBreakdownData.title.first}
        <br />
        {logoBreakdownData.title.second}
      </h2>

      {/* MAIN LOGO */}
      <div className="flex justify-center mt-40 ml-40 ">
        <Image
          src={logoBreakdownData.mainLogo}
          alt="Main Logo"
          width={920}
          height={120}
          className="object-contain"
        />
      </div>

      {/* LOGO EXPLANATION */}
      <div className="flex justify-center ml-10 mt-16">
        <div className="relative w-[500px] h-[120px]">

          {/* SMALL SYMBOL */}
          <Image
            src={logoBreakdownData.symbolLogo}
            alt="Symbol"
            width={220}
            height={60}
            className="object-contain absolute left-0 top-10"
          />

          {/* LINES */}
          <div className="absolute left-[110px] top-[-10px] w-[180px] h-[1px] bg-[#CFCFCF]" />
          <div className="absolute left-[110px] top-[-10px] w-[1px] h-[45px] bg-[#CFCFCF]" />

          <div className="absolute left-[50px] top-[200px] w-[245px] h-[1px] bg-[#CFCFCF]" />
          <div className="absolute left-[170px] top-[136px] w-[1px] h-[65px] bg-[#CFCFCF]" />
          <div className="absolute left-[50px] top-[136px] w-[1px] h-[65px] bg-[#CFCFCF]" />

          {/* TOP TEXT */}
        <p className="absolute left-[300px] top-[-15px] w-[520px] whitespace-nowrap font-clash font-medium text-[20px] leading-[100%] text-[#FFFFFF]">
          {logoBreakdownData.topText.normal1}{" "}
        
          <span className="text-[#0B87C9]">
            {logoBreakdownData.topText.highlight1}
          </span>{" "}
        
          {logoBreakdownData.topText.normal2}{" "}
        
          <span className="text-[#0B87C9]">
            {logoBreakdownData.topText.highlight2}
          </span>{" "}
        
          {logoBreakdownData.topText.normal3}
        </p>
        
        {/* BOTTOM TEXT */}
        <p className="absolute left-[305px] top-[190px] w-[570px] font-clash font-medium text-[20px] leading-[100%] text-[#FFFFFF]">
          {logoBreakdownData.middleText.normal1}{" "}
          {logoBreakdownData.middleText.normal2}{" "}
        
          <span className="text-[#0B87C9]">
            {logoBreakdownData.middleText.highlight1}
          </span>{" "}
        
          {logoBreakdownData.middleText.normal3}{" "}
        
          <span className="text-[#0B87C9]">
            {logoBreakdownData.middleText.highlight2}
          </span>
        </p>
        </div>
      </div>

      {/* BRIDGE IMAGE */}
      <div className="relative mt-40 rounded-[32px] overflow-hidden border border-[#E0E0E0]">
        <Image
          src={logoBreakdownData.bridgeImage}
          alt="Bridge"
          width={1200}
          height={500}
          className="w-full h-[560px] object-cover"
        />

        {/* CENTER SYMBOL */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src={logoBreakdownData.symbolLogo}
            alt="Center Symbol"
            width={270}
            height={140}
            className="object-contain"
          />
        </div>
      </div>

      {/* BOTTOM CONTENT */}
      <div className="flex items-end justify-between mt-10">

        {/* LEFT text*/}
        <h2 className="font-clash font-semibold text-[90px] leading-[100%] tracking-[0%]">
         <span className="text-[#0B87C9]">B</span>
        <span className="text-white">ridge it</span>
        </h2>

        {/* RIGHT TEXT */}
        <p className="w-[570px] font-clash font-semibold text-[20px] leading-[100%] text-white">
          <span className="text-[#0B87C9]">
            {logoBreakdownData.bottomText.highlight}
          </span>{" "}

          {logoBreakdownData.bottomText.normal}
        </p>
      </div>

    </div>
  </div>
</section>


<section className="w-full py-4 overflow-hidden">
  <div className="w-full flex items-center justify-center px-30">

    {/* WATCH 1 */}
    <Image
      src="/images/watch.png"
      alt="Watch"
      width={1450}
      height={980}
      className="object-contain mr-[-940px] relative z-10"
    />

    {/* WATCH 2 */}
    <Image
      src="/images/watch.png"
      alt="Watch"
      width={1450}
      height={980}
      className="object-contain rotate-180 mr-[-920px] relative z-20"
    />

    {/* WATCH 3 */}
    <Image
      src="/images/watch.png"
      alt="Watch"
      width={1450}
      height={1080}
      className="object-contain mr-[-930px] relative z-30"
    />

    {/* WATCH 4 */}
    <Image
      src="/images/watch.png"
      alt="Watch"
      width={1450}
      height={980}
      className="object-contain rotate-180 mt-12 relative z-10"
    />

  </div>
</section>

{/* TYPOGRAPHY */}
<section className="w-full py-26 px-25 mt-30">
  <div className="max-w-[1400px] mx-auto flex items-start justify-between">
    
    {/* LEFT TITLE */}
    <div>
      <h2 className="font-clash text-[50px] font-semibold text-[#2f2f2f] leading-[100%]">
        {typographyData.title}
      </h2>
    </div>

    {/* CENTER */}
    <div className="flex flex-col items-center mt-18 mr-40">
      <h1 className={`${poppins.className} text-[140px] font-bold text-[#3A3A3A] leading-[100%]`}>
        {typographyData.mainText.heading}
      </h1>

      <h2 className={`${poppins.className} text-[72px] font-semibold text-[#0277B5] leading-[100%] mt-4`}>
        {typographyData.mainText.fontName}
      </h2>
    </div>

    {/* RIGHT SIDE */}
    <div className="text-[#282828] mt-18 flex flex-col gap-5">

  {/* UPPERCASE */}
  <div
    className={`${poppins.className} font-bold text-[24px] leading-[160%] tracking-[0.25em] uppercase`}
  >
    <div>{typographyData.uppercase.firstLine}</div>

    <div className="text-[#8E8E8E]">
      {typographyData.uppercase.secondLine}
    </div>
  </div>

  {/* LOWERCASE */}
  <div
    className={`${poppins.className} font-bold text-[24px] leading-[100%] tracking-[0.25em] lowercase`}
  >
    <div>{typographyData.lowercase.firstLine}</div>

    <div className="text-[#8E8E8E]">
      {typographyData.lowercase.secondLine}
    </div>
  </div>

  {/* NUMBERS */}
  <div
    className={`${poppins.className} font-bold text-[24px] leading-[160%] tracking-[0.25em]`}
  >
    <div>{typographyData.numbers.firstLine}</div>

    <div className="text-[#8E8E8E]">
      {typographyData.numbers.secondLine}
    </div>
  </div>

</div>
  </div>
</section>

{/* COLOR PALETTE */}
<section className="w-full py-30 px-10 overflow-hidden">
  <div className="max-w-[1300px] mx-auto flex justify-between">

    {/* LEFT TITLE */}
    <div>
      <h2
        className="font-clash text-[44px] font-bold text-[#353535] leading-none"
      >
        {colourData.title}
      </h2>
    </div>

    {/* RIGHT SIDE */}
    <div className="relative w-[920px] h-[430px] mt-15">

      {/* TOP LEFT */}
      <div
        className="absolute top-0 left-0 w-[300px] h-[170px] rounded-[28px] shadow-[0px_5.72px_5.72px_0px_#00000040]"
        style={{ backgroundColor: colourData.colors[0].bg }}
      >
        <p className="absolute bottom-4 left-4 text-white text-[14px] font-medium tracking-[0.08em]">
          {colourData.colors[0].code}
        </p>
      </div>

      {/* TOP RIGHT */}
      <div
        className="absolute top-0 right-0 w-[300px] h-[170px] rounded-[28px] shadow-[0px_5.72px_5.72px_0px_#00000040]"
        style={{ backgroundColor: colourData.colors[1].bg }}
      >
        <p className="absolute bottom-4 left-4 text-white text-[14px] font-medium tracking-[0.08em]">
          {colourData.colors[1].code}
        </p>
      </div>

      {/* CENTER */}
      <div
        className="absolute top-[180px] left-[310px] w-[300px] h-[170px] rounded-[28px] shadow-[0px_5.72px_5.72px_0px_#00000040] border border-[#E8E8E8]"
        style={{ backgroundColor: colourData.colors[2].bg }}
      >
        <p className="absolute bottom-4 left-4 text-[#666666] text-[14px] font-medium tracking-[0.08em]">
          {colourData.colors[2].code}
        </p>
      </div>

      {/* BOTTOM LEFT */}
      <div
        className="absolute -bottom-27 left-0 w-[300px] h-[170px] rounded-[28px] shadow-[0px_5.72px_5.72px_0px_#00000040]"
        style={{ backgroundColor: colourData.colors[3].bg }}
      >
        <p className="absolute bottom-4 left-4 text-white text-[14px] font-medium tracking-[0.08em]">
          {colourData.colors[3].code}
        </p>
      </div>

      {/* BOTTOM RIGHT */}
      <div
        className="absolute -bottom-27 right-0 w-[300px] h-[170px] rounded-[28px] shadow-[0px_5.72px_5.72px_0px_#00000040]"
        style={{ backgroundColor: colourData.colors[4].bg }}
      >
        <p className="absolute bottom-4 left-4 text-white text-[14px] font-medium tracking-[0.08em]">
          {colourData.colors[4].code}
        </p>
      </div>

    </div>
  </div>
</section>

{/* ICONS */}
<section className="w-full py-30 px-10 overflow-hidden">
  <div className="max-w-[1300px] mx-auto flex justify-between">

    {/* LEFT TITLE */}
    <div>
      <h2
        className="font-clash text-[44px] font-semibold text-[#353535] leading-none"
      >
        {iconsData.title}
      </h2>
    </div>

    {/* ICONS GRID */}
    <div className="grid grid-cols-6 gap-x-18 gap-y-17 mt-20">
      {iconsData.icons.map((Icon, index) => (
        <div
          key={index}
          className="flex items-center justify-center"
        >
          <Icon
            size={80.5}
            strokeWidth={2}
            className="text-[#4F5B79]"
          />
        </div>
      ))}
    </div>

  </div>
</section>

<section className="w-full">
  <div className="max-w-[1350px] mx-auto rounded-[20px] overflow-hidden">

    {/* TOP IMAGE */}
    <div className="relative w-full h-[500px]">
      <Image
        src="/images/grid-phone.png"
        alt="Phone Grid"
        fill
        priority
        className="object-cover"
      />
    </div>

    {/* BOTTOM SECTION */}
   <div className="bg-[#4B4B4B] rounded-[20px] px-24 py-28 flex items-center justify-center gap-28">

  {/* LEFT IMAGE */}
  <div className="relative w-[475px] h-[556px] rounded-[20px] overflow-hidden">
    <Image
      src="/images/person.png"
      alt="Person"
      fill
      priority
      className="object-cover"
    />
  </div>

  {/* RIGHT IMAGE */}
  <div className="relative w-[455px] h-[566px] rounded-[20px] overflow-hidden">
    <Image
      src="/images/bridge-post.png"
      alt="Bridge Post"
      fill
      priority
      className="object-cover"
    />
  </div>

</div>
  </div>
</section>

{/* CONCLUSION */}
<section className="w-full py-36 px-6 overflow-hidden">
  <div className="max-w-[1300px] mx-auto flex justify-between items-start">

    {/* LEFT TITLE */}
    <div className="w-[260px]">
      <h2 className="font-clash font-semibold text-[52px] leading-none text-[#353535]">
        {conclusionData.title}
      </h2>
    </div>

    {/* RIGHT CONTENT */}
    <div className="w-[840px] mt-20">
      <p className="font-clash text-[30px] font-normal leading-[132%] tracking-[-0.02em] text-[#3A3A3A]">
        {conclusionData.description}
      </p>
    </div>

  </div>
</section>
 </div>
  );
}