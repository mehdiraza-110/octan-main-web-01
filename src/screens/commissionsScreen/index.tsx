// app/board-of-directors/page.tsx
import SectionImageWithText from "@/components/SectionImageWithText";
import CommissionCard from "@/components/FeatureCard/commissions";



export default function CommissionsScreen() {
  return (
      <>
   <div className="mx-auto max-w-full px-5 py-5 sm:px-3">
      <SectionImageWithText
        pageTitle="Commissions"
        imageSrc="/bgimage3.jpg"   
        imageAlt="About"
        leftPrimary=""
        leftSecondary=""
        body={
        <>
          <p>
            Oktan Türk Teşkilatı was founded in 2025 with a clear mission: to unite the Turkish world under a shared vision of collaboration, growth, and innovation. We are an international public organization that connects governments, businesses, and communities to strengthen cultural ties, advance economic partnerships, and create opportunities for future generations.
          </p>
          <br></br>
          <p>
            In today’s globalized world, we champion the preservation and promotion of Turkish identity while building bridges across industries and borders. From trade facilitation and investment matchmaking to technology, education, and social development initiatives, our work spans multiple sectors with one goal in mind — empowering a stronger, more connected future.
          </p>
          <br></br>
          <p>
            With active members across Turkey, Azerbaijan, and the wider region, we provide a platform where leaders, entrepreneurs, and innovators come together to exchange ideas, launch partnerships, and turn visions into reality.
          </p>
          </>
        }
      />
    </div>

      <div className="mx-auto max-w-full px-5 py-5 sm:px-3">
         <CommissionCard />
      </div>
    </>
  );
}
