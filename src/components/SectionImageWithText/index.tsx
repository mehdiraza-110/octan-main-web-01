// components/SectionImageWithText.tsx
import Image from "next/image";
import { ReactNode } from "react";

type Props = {
  pageTitle?: string;             // e.g., "Board of Directors"
  imageSrc: string;
  imageAlt: string;
  leftPrimary?: string;           // e.g., "Empowering" (accent)
  leftSecondary?: string;         // e.g., "with Expertise & Experience"
  body: ReactNode;                // right-side (or full-width) paragraph(s)
  className?: string;
};

export default function SectionImageWithText({
  pageTitle,
  imageSrc,
  imageAlt,
  leftPrimary,
  leftSecondary,
  body,
  className = "",
}: Props) {
  const hasLeftHeading = Boolean(leftPrimary || leftSecondary);

  return (
    <section className={`w-full ${className}`}>
      {/* Top Title */}
      {pageTitle && (
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
          <h1 className="text-[52px] sm:text-3xl font-extrabold text-gray-900">
            {pageTitle}
          </h1>
        </div>
      )}

      {/* Full-width Image */}
{imageSrc && (
  <div className="mx-auto mt-10 max-w-[1400px] px-4 sm:px-6">
    <div className="relative overflow-hidden rounded-2xl shadow ring-1 ring-black/5">
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={1600}
        height={600}
        className="h-44 w-full object-cover sm:h-56 md:h-64 lg:h-72"
        priority
      />
      {/* Black overlay @ 0.6 opacity */}
      <div className="absolute inset-0 bg-black/60" aria-hidden />
    </div>
  </div>
)}


      {/* Bottom Grid */}
      <div
        className={[
          "mx-auto max-w-[1400px] px-4 sm:px-6",
          "mt-6 grid grid-cols-1 gap-6",
          hasLeftHeading ? "lg:grid-cols-12" : "",
        ].join(" ")}
      >
        {/* Left Heading (optional) */}
        {hasLeftHeading && (
          <div className="lg:col-span-6">
            <h2 className="text-[26px] max-w-[400px] sm:text-[28px] font-extrabold leading-tight">
              {leftPrimary && (
                <span className="text-indigo-600">{leftPrimary} </span>
              )}
              {leftSecondary && (
                <span className="text-gray-900 block sm:inline">
                  {leftSecondary}
                </span>
              )}
            </h2>
          </div>
        )}

        {/* Right (or Full) Paragraph */}
        <div className={hasLeftHeading ? "lg:col-span-6" : "lg:col-span-12"}>
          <div className="text-[13.5px] sm:text-[14px] leading-relaxed text-gray-600">
            {body}
          </div>
        </div>
      </div>
    </section>
  );
}
