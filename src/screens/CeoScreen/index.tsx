// app/board-of-directors/page.tsx
import SectionImageWithText from "@/components/SectionImageWithText";
import InspireSection from "@/components/GuestCard/InspireSection";
import { GUESTS } from "@/components/GuestCard/guests";

export default function CeoScreen() {
  return (
      <>
   <div className="mx-auto max-w-full px-5 py-5 sm:px-3">
      <SectionImageWithText
        pageTitle="Members of CEO"
        imageSrc="/bgimage2.jpg"   
        imageAlt="About"
        leftPrimary="Empowering"
        leftSecondary=" with Expertise & Experience"
        body={
        <>
          <p>
Our Board of Directors brings together visionary leaders, entrepreneurs, and policymakers dedicated to shaping the future of the Turkish world. With diverse expertise spanning business, technology, education, and public service, they provide strategic direction, ensure good governance, and guide our mission of fostering collaboration across borders.          </p>
          </>
        }
      />
    </div>

      <div className="mx-auto max-w-full px-5 py-5 sm:px-3">

        <InspireSection
          guests={GUESTS}
          limit={10}        // show 4
          offset={0}       // first 4
          initialActive={1}
          search={{
            show: true,
            keyword: { enabled: true, placeholder: "Search for a guest" },
            country: { enabled: true },
            city: { enabled: true },
            sector: { enabled: true },
          }}
        />

      </div>
    </>
  );
}
