
"use client";

import Image from "next/image";
import Link from "next/link";
import type { BrandItem } from "./brandsData";

export default function BrandListItem({ id, name, logo, href }: BrandItem) {
  const url = href ?? `/pages/brand-details/${id}`;

  return (
    <Link
      href={url}
    className="flex flex-col items-center justify-center rounded-2xl bg-white p-6 h-[265px] transition">
    <span className="grid h-25 w-25 place-items-center rounded-full bg-[#f6f5f2]">
        <Image
          src={logo}
          alt={name}
          width={40}
          height={40}
          className="h-20 w-20 rounded-full object-cover"
        />
      </span>
      <span className="mt-5 text-[18px]  font-bold text-black">{name}</span>
    </Link>
  );
}

