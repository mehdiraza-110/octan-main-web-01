"use client";

import Image from "next/image";
import Link from "next/link";
import { GUESTS, Guest } from "./guests"; 
import GuestCard from "./"; 

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-[#F6F5F2] px-4 py-2 text-[14px] font-medium text-black">
      {children}
    </span>
  );
}

export default function GuestProfile({ guest }: { guest: Guest }) {
  const moreLeaders = GUESTS.filter((g) => g.id !== guest.id).slice(0, 4);

  return (
    <div className="mx-auto max-w-[1400px] px-5 py-10 space-y-12">
      
      {/* ==== Header & Intro Section ==== */}
      <div className="bg-white">
        <div className="grid grid-cols-[2fr_1fr] gap-[30px]">
          
          {/* Left: Text */}
          <div className="space-y-3">
            {guest.featured && (
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-amber-500"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm.75 16.5a.75.75 0 01-1.5 0v-4.5a.75.75 0 011.5 0v4.5zm0-7.5a.75.75 0 01-1.5 0v-3.5a.75.75 0 011.5 0v3.5z" /></svg>
                <span>Premium Member</span>
              </div>
            )}
            <h1 className="text-3xl font-bold text-slate-900">{guest.name}</h1>
            
            {/* Using dynamic guest role if available, otherwise defaulting to the date */}
            <p className="text-sm text-slate-500">{guest.role || "Doğum tarihi: 5 fevral 1978"}</p>

            {/* Dynamic Long Description */}
            <p className="text-base text-slate-700 leading-relaxed">
              {guest.longDescription}
            </p>

            {/* Dynamic Email Contact */}
            <div className="flex items-center gap-5 text-slate-700 mt-5 m-0">
            <div className="w-10 h-10 flex justify-center items-center bg-black rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" className="w-5 h-5">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.54 5.698a3 3 0 01-3.32 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.742 6.505a1.5 1.5 0 001.656 0L22.5 6.908z" />
              </svg>
              </div>
              <div className="flex flex-col gap-0">
              <p className="text-sm">Email address</p>
               <p className="text-sm text-slate-500">{guest.email}</p>
               </div>
            </div>
          </div>

          {/* Right: Avatar and Social Icons */}
          <div className="shrink-0 flex flex-col items-center">
            <div className="relative h-40 w-40 overflow-hidden rounded-full ring-1 ring-black/5">
              <Image
                src={guest.avatar}
                alt={guest.name}
                fill
                className="object-cover"
                sizes="160px"
              />
            </div>
           <div className="flex gap-4 mt-10 pt-5 w-50 justify-center text-slate-500 border-t border-[#0000001A]">
              <Link href={guest.socialLinks?.twitter || '#'} className="hover:text-slate-700">
                <span className="text-xl">X</span>
              </Link>
              <Link href={guest.socialLinks?.linkedin || '#'} className="hover:text-slate-700">
                <span className="text-xl">in</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ==== About Section ==== */}
      <section className="space-y-5">
        <h2 className="text-xs font-semibold text-slate-500 uppercase">
          ABOUT THE COMPANY: {guest.companyName}
        </h2>
        <div className="flex flex-wrap gap-3 mt-10 pt-7 border-t border-[#0000001A]">
          <Pill>Field of Activity</Pill>
          <Pill>Founded: {guest.founded}</Pill>
          <Pill>Headquarters: {guest.headquarters}</Pill>
        </div>
        <p className="text-slate-700 leading-relaxed pt-10">
          {guest.companyDescription}
        </p>
      </section>

      {/* ==== More Leaders Section ==== */}
      <section className="space-y-10 pt-5">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-slate-900">
            Meet More of Our <span className="text-[#3763EB]">Leaders</span>
          </h2>
          <Link
            href="/"
            className="rounded-full bg-[#3763EB] px-5 py-2 text-sm font-semibold text-white hover:bg-indigo-600"
          >
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {moreLeaders.map((g) => (
            <GuestCard key={g.id} guest={g} />
          ))}
        </div>
      </section>
    </div>
  );
}