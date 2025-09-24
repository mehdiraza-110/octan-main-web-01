"use client";

import BrandList from "./";
import type { BrandItem } from "./brandsData";

type Props = {
  title: string;
  items: BrandItem[];
};

export default function BrandsListSection({ title, items }: Props) {
  return (
    <section className="mx-auto max-w-[1400px] space-y-4">
      <h2 className="text-2xl font-semibold text-black">{title}</h2>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-4">
        {items.map((b) => (
          <BrandList key={b.id} {...b} />
        ))}
      </div>
    </section>
  );
}
