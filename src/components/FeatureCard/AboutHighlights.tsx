"use client";

import { useMemo, useState } from "react";
import FeatureCard from "@/components/FeatureCard";
import { ShieldCheck, Globe2, Layers, Star } from "lucide-react";


// ---- Local data inside this component ----
type CardIconName = "shield" | "globe" | "layers" | "star";
type AboutCard = {
  id: string;
  title: string;
  subtitle?: string;
  icon: CardIconName;
  active?: boolean;
};

const initialCards: AboutCard[] = [
  {
    id: "1",
    title: "200+",
    subtitle: "Members from business, government, and academia",
    icon: "shield",
  },
  {
    id: "2",
    title: "Active in 3+ Countries",
    subtitle: "with expanding partnerships",
    icon: "globe",
    active: true, // default selected
  },
  {
    id: "3",
    title: "Focus Areas",
    subtitle: "Trade · Technology · Education · Investment · Culture",
    icon: "layers",
  },
  {
    id: "4",
    title: "Mission",
    subtitle:
      "Strengthening unity and prosperity across the Turkish world",
    icon: "star",
  },
];

function renderIcon(name: CardIconName) {
  switch (name) {
    case "shield": return <ShieldCheck />;
    case "globe":  return <Globe2 />;
    case "layers": return <Layers />;
    case "star":   return <Star />;
  }
}

export default function AboutHighlights() {
  // keep one card selected (active) for the blue look
  const defaultIndex = useMemo(
    () => Math.max(0, initialCards.findIndex(c => c.active) ?? 0),
    []
  );
  const [selected, setSelected] = useState<number>(defaultIndex);

  return (
    <section className="w-full">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {initialCards.map((card, idx) => (
            <FeatureCard
              key={card.title}
              title={card.title}
              subtitle={card.subtitle}
              icon={renderIcon(card.icon)}
              active={selected === idx}
              onClick={() => setSelected(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
