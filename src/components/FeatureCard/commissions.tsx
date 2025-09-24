// CommissionCard.tsx
"use client";

import { useMemo, useState } from "react";
import FeatureCard from "@/components/FeatureCard";
import { ShieldCheck, Globe2, Layers, Star } from "lucide-react";
import Link from 'next/link'; // Import Link

// Import the commission data
import { commissionData, CardIconName } from './commissionData';

// Function to render the correct icon
function renderIcon(name: CardIconName) {
  switch (name) {
    case "shield": return <ShieldCheck />;
    case "globe":  return <Globe2 />;
    case "layers": return <Layers />;
    case "star":   return <Star />;
  }
}

export default function CommissionCard() {
  // keep one card selected (active) for the blue look
  const defaultIndex = useMemo(
    () => Math.max(0, commissionData.findIndex(c => c.active) ?? 0),
    []
  );
  const [selected, setSelected] = useState<number>(defaultIndex);

  return (
    <section className="w-full">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {commissionData.map((card, idx) => (
            <Link href={`/pages/brands`} key={card.id}>
              <FeatureCard
                key={card.id}
                title={card.title}
                subtitle={card.subtitle}
                icon={renderIcon(card.icon)}
                active={selected === idx}
                onClick={() => setSelected(idx)}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}



