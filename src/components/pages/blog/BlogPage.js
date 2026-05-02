
"use client";

import Image from "next/image";
import { blogData } from "@/data";

export default function BlogPage() {

  //  LIMIT DATA
  const gridBlogs = blogData.grid.slice(0, 3);
  const sideBlogs = blogData.side.slice(0, 3);

  const allBlogs = [
    ...blogData.grid,
    ...blogData.side,
  ].slice(0, 8);

  return (
    <div className="px-12 py-45 bg-[#f5f5f5] min-h-screen">
      
      {/* ================= RECENT BLOGS ================= */}
      <h1 className="font-medium text-[55px] leading-[100%] mb-9">
        Recent Blogs
      </h1>

      <div className="grid grid-cols-12 gap-y-6 gap-x-10">

        {/* LEFT */}
        <div className="col-span-9 space-y-6">

          {/* MAIN */}
          <div className="bg-white rounded-md overflow-hidden shadow">
            <Image
              src={blogData.main.image}
              alt=""
              width={800}
              height={400}
              className="w-full h-[500px] object-cover"
            />
          </div>

          <div>
            <h2 className="font-medium text-[31.01px] leading-[46.51px] tracking-[2.07px] capitalize">
              {blogData.main.title}
            </h2>

            <p className="font-normal text-[25.84px] leading-[46.51px] tracking-[2.07px] capitalize">
              {blogData.main.subtitle}
            </p>
          </div>

          {/* GRID (ONLY 3) */}
          <div className="grid grid-cols-3 gap-6 mt-10">
            {gridBlogs.map((item, i) => (
              <div key={i} className="overflow-hidden">

                <div className="relative">
                  <Image
                    src={item.image}
                    alt=""
                    width={300}
                    height={250}
                    className="w-full h-[250px] object-cover"
                  />

                  <div className="absolute top-2 left-2 flex gap-1">
                    {item.tags.map((tag, index) => (
                      <span key={index} className="text-xs bg-white/22 text-white px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-3 p-2">
                  <h3 className="font-normal text-[25px] leading-[27.11px] text-[#121416]">
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-2 mt-4">
                    <Image
                      src={item.user.profile}
                      alt=""
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                    <span className="font-normal text-[16.27px]">
                      {item.user.name}
                    </span>
                    <div className="w-7 h-[1.3px] mx-2 bg-[#6C757D66]"></div>
                    <span className="text-[12px] text-[#6C757D]">{item.date}</span>
                  </div>

                  <p className="text-[12px] text-[#6C757D] mt-3">
                    {item.description}
                  </p>

                  <p className="text-[16px] mt-4 inline-block border-b border-black cursor-pointer">
                    {item.viewText}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE (ONLY 3) */}
        <div className="col-span-3 space-y-5">
          {blogData.side.map((item, i) => (
            <div key={i} className="overflow-hidden">

              <div className="relative">
                <Image
                  src={item.image}
                  alt=""
                  width={250}
                  height={200}
                  className="w-full h-[220px] object-cover"
                />

                {/* TAGS */}
                <div className="absolute top-2 left-2 flex gap-1">
                  {item.tags.map((tag, index) => (
                    <span key={index} className="text-xs bg-white/25 text-white px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-3">
                <h3 className="font-normal text-[23px] leading-[24px]">{item.title}</h3>

                {/* USER */}
                <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                  <Image
                    src={item.user.profile}
                    alt=""
                    width={22}
                    height={22}
                    className="rounded-full"
                  />
                  <span className="font-normal text-[13.84px] leading-[23.07px] tracking-[0] text-[#121416]">
                    {item.user.name}
                  </span>
                  <div className="w-7 h-[1.3px] mx-2 bg-[#6C757D66]"></div>
                  <span className="font-europa font-normal text-[10.38px] leading-[23.07px] text-[#6C757D]">{item.date}</span>
                </div>

                 {/*SIDE DESCRIPTION */}
                <p className="font-normal text-[12px] leading-[150%] tracking-[0] text-[#6C757D] mt-2">
                  {item.description}
                </p>

                <p className="text-[14px] mt-2 inline-block cursor-pointer border-b border-black pb-1">
                  {item.viewText}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ================= ALL BLOGS ================= */}
      <h1 className="font-medium text-[55px] mb-6">
        All Blogs
      </h1>

      <div className="grid grid-cols-4 gap-x-6 gap-y-10">

        {allBlogs.map((item, i) => (
          <div key={i}>

            <div className="relative">
              <Image
                src={item.image}
                alt=""
                width={400}
                height={260}
                className="w-full h-[260px] object-cover"
              />

              <div className="absolute top-2 left-2 flex gap-1">
                {item.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-[10px] bg-white/30 text-white px-2 py-[2px] rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-3 p-2">
              <h3 className="font-normal text-[25px] leading-[27.11px] text-[#121416]">{item.title}</h3>

              <div className="flex items-center gap-2 mt-4">
                <Image
                  src={item.user.profile}
                  alt=""
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <span className="font-normal text-[16.27px] text-[#121416]">
                  {item.user.name}
                  </span>
                  <div className="w-7 h-[1.3px] mx-2 bg-[#6C757D66]"></div>
                  <span className="text-[12px] text-[#6C757D]">{item.date}</span>
              </div>

              <p className="text-[12px] text-[#6C757D] mt-3">
                {item.description}
              </p>

              <p className="text-[16px] mt-4 inline-block border-b border-black cursor-pointer">
                {item.viewText}
              </p>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}