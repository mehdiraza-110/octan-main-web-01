// app/page.tsx
import CardHero from "@/components/CardHero";
import MediaSwitcherCard from "@/components/MediaSwitcherCard";

import NewsChooseSection from "@/components/NewsCard/NewsSliderSection";
import type { NewsItem } from "@/components/NewsCard/index";

const ITEMS: NewsItem[] = [
  {
    id: "n1",
    tag: "LOREM IPSUM",
    title: "Featured in “Regional Business Times” for cross-border trade leadership.",
    excerpt:
      "“Lorem ipsum” refers to placeholder text, often called dummy text, used in design and publishing to fill a layout and demonstrate typography, font, and overall graphic elements without being distracted by meaningful content. While derived from a first-century Latin text by Cicero, the words are altered and jumbled to form nonsensical Latin that lacks actual meaning.",
    image: "/card1.png",
    href: "/news/feature-1",
  },
  {
    id: "n2",
    tag: "PRESS",
    title: "Lorem ipsum is a dummy or placeholder",
    image: "/card2.png",
    href: "/news/side-1",
  },
  {
    id: "n3",
    tag: "PRESS",
    title: "Another short headline goes here",
    image: "/card3.png",
    href: "/news/side-2",
  },
  {
    id: "n4",
    tag: "PRESS",
    title: "Board announces new advisory council members",
    image: "/bg-card.png",
    href: "/news/side-3",
  },
];


import AchievementsSection from "@/components/AchievementCard/AchievementsSection";
import type { AchievementItem } from "@/components/AchievementCard";

const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "a1",
    tag: "Story 1",
    title: "TechnoFuture MMC",
    excerpt: "Expanded AI & automation services to 3 new countries with our investor matchmaking.",
    image: "/archivecard1.png",
    href: "/stories/technofuture",
  },
  {
    id: "a2",
    tag: "Story 1",
    title: "TechnoFuture MMC",
    excerpt: "Expanded AI & automation services to 3 new countries with our investor matchmaking.",
    image: "/archivecard2.png",
    href: "/stories/technofuture-2",
  },
  {
    id: "a3",
    tag: "Story 1",
    title: "TechnoFuture MMC",
    excerpt: "Expanded AI & automation services to 3 new countries with our investor matchmaking.",
    image: "/archivecard3.png",
    href: "/stories/technofuture-3",
  },
  {
    id: "a4",
    tag: "Story 1",
    title: "TechnoFuture MMC",
    excerpt: "Expanded AI & automation services to 3 new countries with our investor matchmaking.",
    image: "/archivecard4.png",
    href: "/stories/technofuture-4",
  },
  {
    id: "a5",
    tag: "Story 1",
    title: "TechnoFuture MMC",
    excerpt: "Expanded AI & automation services to 3 new countries with our investor matchmaking.",
    image: "/archivecard5.png",
    href: "/stories/technofuture-5",
  },
];


import InspireSection from "@/components/GuestCard/InspireSection";
import { GUESTS } from "@/components/GuestCard/guests";




import BrandsSection from "@/components/BrandCard/BrandsSection";
import type { Brand } from "@/components/BrandCard";

const BRANDS: Brand[] = [
  { id: "1", name: "HEX Fond", src: "/logo1.png"  },
  { id: "2", name: "MTGox®", src: "/logo2.png"  },
  { id: "3", name: "Sauex Bank", src: "/logo3.png"  },
  { id: "4", name: "KONSTRUKTION", src: "/logo4.png" },
  { id: "5", name: "Cooinbasee", src: "/logo5.png"  },
  { id: "6", name: "Meta Mex", src: "/logo6.png"  },
  { id: "7", name: "Meta Mex", src: "/logo2.png"  },
  { id: "8", name: "Meta Mex", src: "/logo1.png"  },
  { id: "9", name: "Meta Mex", src: "/logo5.png"  },
  { id: "10", name: "Meta Mex", src: "/logo3.png"  },
];

export default function HomeScreen() {
  return (
    <>

        <div className="mx-auto max-w-full px-4 py-10 sm:px-6">
      {/* Large card (use first item) */}
        <BrandsSection brands={BRANDS} />
    </div>

    <div className="mx-auto max-w-full px-4 py-10 sm:px-6">
      {/* Large card (use first item) */}
        <InspireSection
          guests={GUESTS}
          headerTag="OUR GUESTS"
          title="Leaders Who Inspire Us"
          subtitle="Meet the advisors and partners behind our mission."
          ctaHref="/guests"
          ctaText="View all Guests"
          limit={4}
          offset={0}
          initialActive={1}
        />
    </div>

     <div className="mx-auto max-w-full px-4 py-10 sm:px-6">
      {/* Large card (use first item) */}
      <AchievementsSection
        title="Achievements That Inspire"
        items={ACHIEVEMENTS}
      />
    </div>

     <div className="mx-auto max-w-full px-4 py-10 sm:px-6">
      {/* Large card (use first item) */}
      <NewsChooseSection
        title="Latest News & Announcements"
        subtitle="Stay updated on our latest initiatives, tenders, events and member milestones."
        items={ITEMS}
        sideCount={2}      // right-side visible cards
        initialIndex={0}   // which is large first
      />
    </div>

    
    <div className="mx-auto max-w-[1400px] px-4 py-10 sm:px-6">
 <MediaSwitcherCard
        donate={{ text: "Donate Now", href: "/donate" }}
        items={[
          {
            label: "Find Investors",
            poster: { src: "/imagemedia.png", alt: "Investors" },
            videoSrc: "/media/investors.mp4",
          },
          {
            label: "Be Branch",
            poster: { src: "/imagemedia.png", alt: "Branch" },
            videoSrc: "/media/branch.mp4",
          },
          {
            label: "Be Partner",
            poster: { src: "/imagemedia.png", alt: "Partner" },
            // no videoSrc -> image only
          },
          {
            label: "bayim ol",
            poster: { src: "/imagemedia.png", alt: "Franchise" },
            videoSrc: "/media/bayim.mp4",
          },
        ]}
        initialIndex={1}
      />
    </div>

    <div className="mx-auto max-w-[1400px] px-4 py-8 sm:px-6">
      <CardHero
        imageSrc="/bg-card.png"
        imageAlt="Team collaborating in modern office"
        title="Helping Fast-moving Innovators Scale With Purpose"
        highlight=""
        ctaText="Apply for Membership"
        ctaHref="/pages/membership/apply"
        showBadge={true} // set false to hide
      />
    </div>
   </>
  );
}
