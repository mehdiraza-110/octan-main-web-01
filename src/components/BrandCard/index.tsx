import Image from "next/image";

export type Brand = {
  id: string;
  name: string;
  src?: string;      // optional logo image path (e.g. /brands/acme.svg or /png)
  alt?: string;
};

export default function BrandCard({ brand }: { brand: Brand }) {
  return (
    <div
      className="group inline-flex h-16 min-w-[200px] items-center justify-center gap-2 px-4"
      aria-label={brand.name}
    >
      {brand.src ? (
        <Image
          src={brand.src}
          alt={brand.alt ?? brand.name}
          width={140}
          height={40}
          className="h-10 w-auto  transition"
        />
      ) : (
        <span className="text-[15px] font-semibold tracking-wide text-slate-800 transition group-hover:text-[#1f3cff]">
          {brand.name}
        </span>
      )}
    </div>
  );
}
