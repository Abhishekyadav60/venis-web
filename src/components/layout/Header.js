
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { heroData } from "@/data";

export default function Header() {
  const pathname = usePathname();

  const isHomePage = pathname === "/";
  const isAboutPage = pathname === "/about";
  const isWorkPage = pathname === "/works";

  return (
    <header
      className={`absolute top-0 left-0 w-full z-50 flex items-center px-15 py-10 ${
        isAboutPage
          ? "justify-start gap-20 text-white"
          : "justify-between"
      } ${isHomePage || isWorkPage ? "text-white" : "text-black"}`}
    >

      {/* LOGO */}
      <div className="relative w-25 h-20 group cursor-pointer overflow-hidden">
        <Link href="/">
          {isHomePage ? (
            <Image
              src="/images/logo.png"
              alt="logo"
              width={100}
              height={50}
              className="object-contain"
            />
          ) : (
            <>
              {/* Default Logo */}
              <Image
                src="/images/logo1.png"
                alt="logo-default"
                width={80}
                height={80}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain
                transition-all duration-400 ease-in-out
                group-hover:-translate-x-[170%]"
              />
      
              {/* Hover Logo */}
              <Image
                src="/images/logo.png"
                alt="logo-hover"
                width={100}
                height={50}
                className="absolute top-1/2 left-1/2 translate-x-[120%] -translate-y-1/2 object-contain
                transition-all duration-400 ease-in-out
                group-hover:-translate-x-1/2"
              />
            </>
          )}
        </Link>
      </div>

      {/* NAV */}
      <nav
        className={`flex items-center text-[18px] tracking-[3.3px] mb-5 ${
          isAboutPage ? "gap-15 ml-110 text-white" : "gap-15"
        }`}
      >
        {heroData.nav.map((item, i) => {
          const isActive = pathname === item.path;
          const isButton = item.name === "Get in Touch";

          return (
            <Link
              key={i}
              href={item.path}
              className={`relative group ${
                isButton
                  ? isAboutPage
                    ? "bg-white text-[#F05523] px-8 py-3 rounded-full border"
                    : isHomePage
                    ? "bg-[#F05523] text-white border-white px-8 py-3 rounded-full border"
                    : "bg-[#F05523] text-white border-black px-8 py-3 rounded-full border"
                  : ""
              }`}
            >
              {item.name}

              {/* underline */}
              {!isButton && (
                <span
                  className={`absolute left-1/2 -translate-x-1/2 bottom-0 h-px transition-all duration-300
                  ${
                    isAboutPage || isHomePage || isWorkPage
                      ? "bg-white"
                      : "bg-black"
                  }
                  ${
                    isActive
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              )}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}