"use client";

import Image from "next/image";
import { contactData } from "@/data";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
  const { project, form } = contactData;

  return (
    <section className="w-full min-h-screen bg-white flex items-center shadow-[0_20px_30px_-10px_rgba(0,0,0,0.2)] justify-center px-6 py-16">
      <div className="max-w-8xl w-full grid md:grid-cols-2 gap-30 items-center">
        
        {/* LEFT */}
        <div className="relative rounded-2xl mt-30 overflow-hidden">
          <Image
            src={project.image}
            alt="Project"
            width={700}
            height={900}
            className="object-cover"
          />
        </div>

        {/* RIGHT */}
        <div className="max-w-md mt-20 gap-5 flex flex-col">
          <h2 className="text-[53px] leading-[68.09px] text-center ml-30 font-normal mb-10">
            {form.title}
          </h2>

          <form className="space-y-6">
            {form.fields.map((field, i) => (
              <div key={i} className="space-y-4">
                <Label
                  className="text-[21px] leading-[30.52px] tracking-normal font-normal text-[#202020]">
                {field.label}
                </Label>

                {field.type === "textarea" ? (
                <Textarea
                  name={field.name}
                  className="w-140 h-30 px-4 py-3 text-lg border border-black focus-visible:ring-0 focus-visible:border-black"
                />
              ) : (
                <Input
                  type={field.type}
                  name={field.name}
                  className="w-140 h-16.25 px-4 text-lg border border-black focus-visible:ring-0 focus-visible:border-black"
                />
              )}
              </div>
            ))}

            <Button className="w-[254.75px] h-[54.17px] px-[37.57px] py-[14.09px] gap-[14.09px] text-[18px] font-[Lato] rounded-[70px] cursor-pointer flex items-center justify-center bg-[#F05523] hover:bg-[#146ce8]">
              {form.button}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}


