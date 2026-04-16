"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import heroData from "@/data";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="absolute top-0 left-0 w-full z-50 flex justify-between items-center px-15 py-10">
      <Link href="/">
        <Image
          src="/images/logo.png" 
          alt="logo"
          width={100}
          height={50}
          className="cursor-pointer"
        />
      </Link>

    <nav className="flex gap-[60px] text-[18px] tracking-[3.3px] mb-5 text-white items-center">
  {heroData.nav.map((item, i) => {
    const isActive = pathname === item.path;
    const isButton = item.name === "Get in Touch";

    return (
      <Link
        key={i}
        href={item.path}
        className={`relative group ${
          isButton
            ? "bg-[#F05523] px-8 py-3 rounded-full border border-white"
            : ""
        }`}
      >
        {item.name}

        {/* underline  */}
        {!isButton && (
          <span
            className={`absolute left-1/2 -translate-x-1/2 bottom-0 h-px bg-white transition-all duration-300 ease-in-out
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