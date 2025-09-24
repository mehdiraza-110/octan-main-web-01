// app/board-of-directors/page.tsx
import SectionImageWithText from "@/components/SectionImageWithText";
import { brands, getBrandById } from "@/components/BrandsComponent/brandsData";
import BrandDetailSections from "@/components/BrandsComponent/brandIntro";
import { notFound } from "next/navigation";
export function generateStaticParams() {
  return brands.map((b) => ({ id: b.id }));
}

export default function BrandDetail({ params }: { params: { id: string } }) {

  const brand = getBrandById(params.id);
  if (!brand) return notFound();

  return (
      <>
   <div className="mx-auto max-w-full px-5 py-5 sm:px-3">
      {/* <SectionImageWithText
        pageTitle="Brand Details"
        imageSrc="/aboutimage.png"   
        imageAlt="About"
        leftPrimary=""
        leftSecondary=""
        body={
        <>
        </>
        }
      /> */}
      
       <BrandDetailSections brand={brand} />
    </div>

    </>
  );
}
