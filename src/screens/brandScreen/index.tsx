// app/board-of-directors/page.tsx
import SectionImageWithText from "@/components/SectionImageWithText";
import BrandsListSection from "@/components/BrandsComponent/BrandsSection";
import { premiumBrands, regularBrands } from "@/components/BrandsComponent/brandsData";

export default function BrandScreen() {

  return (
      <>
   <div className="mx-auto max-w-full px-5 py-5 sm:px-3">
      <SectionImageWithText
        pageTitle="Our Brands"
        imageSrc="/bgimage5.jpg"   
        imageAlt="About"
        leftPrimary=""
        leftSecondary=""
        body={
        <>
         <h1 className="text-[40px] leading-[57.6px] mb-5 tracking-[-0.5px] text-[#001F4A]">Technology & Innovation</h1>
          <p>
The Lorem ipsum comission unites experts, members, and partners to strengthen [sector focus]. We provide a platform for knowledge sharing, policy development, and collaboration to support sustainable growth and innovation.          </p>
          </>
        }
      />
    </div>

      <div className="mx-auto max-w-full px-5 py-5 sm:px-3">
            <div className="mx-auto max-w-full rounded-2xl bg-gradient-to-b from-[#F2F2F2] to-[#FFFFFF] px-4 py-15 space-y-10">
     <BrandsListSection title="Premium Brands" items={premiumBrands} />
      <BrandsListSection title="Regular Brands" items={regularBrands} />
            </div>
      </div>
    </>
  );
}
