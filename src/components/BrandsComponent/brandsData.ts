// lib/brands.ts
export type BrandCategory = "premium" | "regular";

export type BrandFAQ = {
  question: string;
  answer: string;
};

export type BrandDetail = {
  intro: {
    heading: string;
    description: string;
    cta?: { label: string; href: string };
  };
  // Right-side accordion near the intro
  policiesFaq?: BrandFAQ[];

  // Image + mission card row
  mission?: {
    tag?: string;
    title: string;
    description: string;
    bullets?: { label: string; text: string }[];
    cta?: { label: string; href: string };
    image?: string; // /public path
  };
};

export type BrandItem = {
  id: string;           // route param: /brands/[id]
  name: string;
  logo: string;
  category: BrandCategory;
  href?: string;
  description?: string;
  detail?: BrandDetail;
};

export const brands: BrandItem[] = [
  // ---------- Premium with full detail ----------
  {
    id: "prem-1",
    name: "AHG Mobil",
    logo: "/premlogo1.png",
    category: "premium",
    description: "Leading mobility solutions provider.",
    detail: {
      intro: {
        heading: "Driving growth and collaboration",
        description:
          "The Lorem Ipsum commission unites experts, members, and partners to strengthen [sector focus]. We provide a platform for knowledge sharing, policy development, and collaboration to support sustainable growth and innovation.",
        cta: { label: "Schedule a Call", href: "/contact" },
      },
      policiesFaq: [
        {
          question: "Fee Only Financial Planning",
          answer:
            "Transparent pricing with no commissions. Advisors are compensated only by client fees to avoid conflicts of interest.",
        },
        {
          question: "Fiduciary Financial Planning",
          answer:
            "We act in your best interest at all times, with documented processes, disclosures, and ongoing monitoring.",
        },
        {
          question: "Professionals Only, No Salespeople",
          answer:
            "Certified professionals focused on strategy and outcomes, not product quotas or commissions.",
        },
      ],
      mission: {
        tag: "PREPARING FOR YOUR FUTURE",
        title: "Mission",
        description:
          "Our mission is to create opportunities, build partnerships, and provide guidance for members in the field of [sector focus].",
        bullets: [
          { label: "Networking",  text: "Connect members with local and international partners." },
          { label: "Development", text: "Support projects, training, and best practices." },
          { label: "Opportunities", text: "Share tenders, investments, and new initiatives." },
          { label: "Innovation", text: "Encourage fresh ideas and digital solutions." },
        ],
        cta: { label: "Be part of the commission", href: "/join" },
        image: "/mission.png",
      },
    },
  },

  // ---------- Other items (fill detail when ready) ----------
  { id: "prem-2", name: "TechCorp",      logo: "/premlogo2.png", category: "premium",

      description: "Leading mobility solutions provider.",
    detail: {
      intro: {
        heading: "Driving growth and collaboration",
        description:
          "The Lorem Ipsum commission unites experts, members, and partners to strengthen [sector focus]. We provide a platform for knowledge sharing, policy development, and collaboration to support sustainable growth and innovation.",
        cta: { label: "Schedule a Call", href: "/contact" },
      },
      policiesFaq: [
        {
          question: "Fee Only Financial Planning",
          answer:
            "Transparent pricing with no commissions. Advisors are compensated only by client fees to avoid conflicts of interest.",
        },
        {
          question: "Fiduciary Financial Planning",
          answer:
            "We act in your best interest at all times, with documented processes, disclosures, and ongoing monitoring.",
        },
        {
          question: "Professionals Only, No Salespeople",
          answer:
            "Certified professionals focused on strategy and outcomes, not product quotas or commissions.",
        },
      ],
      mission: {
        tag: "PREPARING FOR YOUR FUTURE",
        title: "Mission",
        description:
          "Our mission is to create opportunities, build partnerships, and provide guidance for members in the field of [sector focus].",
        bullets: [
          { label: "Networking",  text: "Connect members with local and international partners." },
          { label: "Development", text: "Support projects, training, and best practices." },
          { label: "Opportunities", text: "Share tenders, investments, and new initiatives." },
          { label: "Innovation", text: "Encourage fresh ideas and digital solutions." },
        ],
        cta: { label: "Be part of the commission", href: "/join" },
        image: "/mission.png",
      },
    },
   },
  { id: "prem-3", name: "Global Motors", logo: "/premlogo3.png", category: "premium",    description: "Leading mobility solutions provider.",
    detail: {
      intro: {
        heading: "Driving growth and collaboration",
        description:
          "The Lorem Ipsum commission unites experts, members, and partners to strengthen [sector focus]. We provide a platform for knowledge sharing, policy development, and collaboration to support sustainable growth and innovation.",
        cta: { label: "Schedule a Call", href: "/contact" },
      },
      policiesFaq: [
        {
          question: "Fee Only Financial Planning",
          answer:
            "Transparent pricing with no commissions. Advisors are compensated only by client fees to avoid conflicts of interest.",
        },
        {
          question: "Fiduciary Financial Planning",
          answer:
            "We act in your best interest at all times, with documented processes, disclosures, and ongoing monitoring.",
        },
        {
          question: "Professionals Only, No Salespeople",
          answer:
            "Certified professionals focused on strategy and outcomes, not product quotas or commissions.",
        },
      ],
      mission: {
        tag: "PREPARING FOR YOUR FUTURE",
        title: "Mission",
        description:
          "Our mission is to create opportunities, build partnerships, and provide guidance for members in the field of [sector focus].",
        bullets: [
          { label: "Networking",  text: "Connect members with local and international partners." },
          { label: "Development", text: "Support projects, training, and best practices." },
          { label: "Opportunities", text: "Share tenders, investments, and new initiatives." },
          { label: "Innovation", text: "Encourage fresh ideas and digital solutions." },
        ],
        cta: { label: "Be part of the commission", href: "/join" },
        image: "/mission.png",
      },
    }, },
  { id: "prem-4", name: "Future AI",     logo: "/premlogo4.png", category: "premium",
        description: "Leading mobility solutions provider.",
    detail: {
      intro: {
        heading: "Driving growth and collaboration",
        description:
          "The Lorem Ipsum commission unites experts, members, and partners to strengthen [sector focus]. We provide a platform for knowledge sharing, policy development, and collaboration to support sustainable growth and innovation.",
        cta: { label: "Schedule a Call", href: "/contact" },
      },
      policiesFaq: [
        {
          question: "Fee Only Financial Planning",
          answer:
            "Transparent pricing with no commissions. Advisors are compensated only by client fees to avoid conflicts of interest.",
        },
        {
          question: "Fiduciary Financial Planning",
          answer:
            "We act in your best interest at all times, with documented processes, disclosures, and ongoing monitoring.",
        },
        {
          question: "Professionals Only, No Salespeople",
          answer:
            "Certified professionals focused on strategy and outcomes, not product quotas or commissions.",
        },
      ],
      mission: {
        tag: "PREPARING FOR YOUR FUTURE",
        title: "Mission",
        description:
          "Our mission is to create opportunities, build partnerships, and provide guidance for members in the field of [sector focus].",
        bullets: [
          { label: "Networking",  text: "Connect members with local and international partners." },
          { label: "Development", text: "Support projects, training, and best practices." },
          { label: "Opportunities", text: "Share tenders, investments, and new initiatives." },
          { label: "Innovation", text: "Encourage fresh ideas and digital solutions." },
        ],
        cta: { label: "Be part of the commission", href: "/join" },
        image: "/mission.png",
      },
    },
   },
  { id: "prem-5", name: "Blue Star",     logo: "/premlogo5.png", category: "premium",
        description: "Leading mobility solutions provider.",
    detail: {
      intro: {
        heading: "Driving growth and collaboration",
        description:
          "The Lorem Ipsum commission unites experts, members, and partners to strengthen [sector focus]. We provide a platform for knowledge sharing, policy development, and collaboration to support sustainable growth and innovation.",
        cta: { label: "Schedule a Call", href: "/contact" },
      },
      policiesFaq: [
        {
          question: "Fee Only Financial Planning",
          answer:
            "Transparent pricing with no commissions. Advisors are compensated only by client fees to avoid conflicts of interest.",
        },
        {
          question: "Fiduciary Financial Planning",
          answer:
            "We act in your best interest at all times, with documented processes, disclosures, and ongoing monitoring.",
        },
        {
          question: "Professionals Only, No Salespeople",
          answer:
            "Certified professionals focused on strategy and outcomes, not product quotas or commissions.",
        },
      ],
      mission: {
        tag: "PREPARING FOR YOUR FUTURE",
        title: "Mission",
        description:
          "Our mission is to create opportunities, build partnerships, and provide guidance for members in the field of [sector focus].",
        bullets: [
          { label: "Networking",  text: "Connect members with local and international partners." },
          { label: "Development", text: "Support projects, training, and best practices." },
          { label: "Opportunities", text: "Share tenders, investments, and new initiatives." },
          { label: "Innovation", text: "Encourage fresh ideas and digital solutions." },
        ],
        cta: { label: "Be part of the commission", href: "/join" },
        image: "/mission.png",
      },
    },
   },
  { id: "prem-6", name: "Innova Labs",   logo: "/premlogo6.png", category: "premium",
        description: "Leading mobility solutions provider.",
    detail: {
      intro: {
        heading: "Driving growth and collaboration",
        description:
          "The Lorem Ipsum commission unites experts, members, and partners to strengthen [sector focus]. We provide a platform for knowledge sharing, policy development, and collaboration to support sustainable growth and innovation.",
        cta: { label: "Schedule a Call", href: "/contact" },
      },
      policiesFaq: [
        {
          question: "Fee Only Financial Planning",
          answer:
            "Transparent pricing with no commissions. Advisors are compensated only by client fees to avoid conflicts of interest.",
        },
        {
          question: "Fiduciary Financial Planning",
          answer:
            "We act in your best interest at all times, with documented processes, disclosures, and ongoing monitoring.",
        },
        {
          question: "Professionals Only, No Salespeople",
          answer:
            "Certified professionals focused on strategy and outcomes, not product quotas or commissions.",
        },
      ],
      mission: {
        tag: "PREPARING FOR YOUR FUTURE",
        title: "Mission",
        description:
          "Our mission is to create opportunities, build partnerships, and provide guidance for members in the field of [sector focus].",
        bullets: [
          { label: "Networking",  text: "Connect members with local and international partners." },
          { label: "Development", text: "Support projects, training, and best practices." },
          { label: "Opportunities", text: "Share tenders, investments, and new initiatives." },
          { label: "Innovation", text: "Encourage fresh ideas and digital solutions." },
        ],
        cta: { label: "Be part of the commission", href: "/join" },
        image: "/mission.png",
      },
    },
   },
  { id: "prem-7", name: "Nova Energy",   logo: "/premlogo7.png", category: "premium",
        description: "Leading mobility solutions provider.",
    detail: {
      intro: {
        heading: "Driving growth and collaboration",
        description:
          "The Lorem Ipsum commission unites experts, members, and partners to strengthen [sector focus]. We provide a platform for knowledge sharing, policy development, and collaboration to support sustainable growth and innovation.",
        cta: { label: "Schedule a Call", href: "/contact" },
      },
      policiesFaq: [
        {
          question: "Fee Only Financial Planning",
          answer:
            "Transparent pricing with no commissions. Advisors are compensated only by client fees to avoid conflicts of interest.",
        },
        {
          question: "Fiduciary Financial Planning",
          answer:
            "We act in your best interest at all times, with documented processes, disclosures, and ongoing monitoring.",
        },
        {
          question: "Professionals Only, No Salespeople",
          answer:
            "Certified professionals focused on strategy and outcomes, not product quotas or commissions.",
        },
      ],
      mission: {
        tag: "PREPARING FOR YOUR FUTURE",
        title: "Mission",
        description:
          "Our mission is to create opportunities, build partnerships, and provide guidance for members in the field of [sector focus].",
        bullets: [
          { label: "Networking",  text: "Connect members with local and international partners." },
          { label: "Development", text: "Support projects, training, and best practices." },
          { label: "Opportunities", text: "Share tenders, investments, and new initiatives." },
          { label: "Innovation", text: "Encourage fresh ideas and digital solutions." },
        ],
        cta: { label: "Be part of the commission", href: "/join" },
        image: "/mission.png",
      },
    },
   },
  { id: "prem-8", name: "Smart Hub",     logo: "/premlogo8.png", category: "premium",
        description: "Leading mobility solutions provider.",
    detail: {
      intro: {
        heading: "Driving growth and collaboration",
        description:
          "The Lorem Ipsum commission unites experts, members, and partners to strengthen [sector focus]. We provide a platform for knowledge sharing, policy development, and collaboration to support sustainable growth and innovation.",
        cta: { label: "Schedule a Call", href: "/contact" },
      },
      policiesFaq: [
        {
          question: "Fee Only Financial Planning",
          answer:
            "Transparent pricing with no commissions. Advisors are compensated only by client fees to avoid conflicts of interest.",
        },
        {
          question: "Fiduciary Financial Planning",
          answer:
            "We act in your best interest at all times, with documented processes, disclosures, and ongoing monitoring.",
        },
        {
          question: "Professionals Only, No Salespeople",
          answer:
            "Certified professionals focused on strategy and outcomes, not product quotas or commissions.",
        },
      ],
      mission: {
        tag: "PREPARING FOR YOUR FUTURE",
        title: "Mission",
        description:
          "Our mission is to create opportunities, build partnerships, and provide guidance for members in the field of [sector focus].",
        bullets: [
          { label: "Networking",  text: "Connect members with local and international partners." },
          { label: "Development", text: "Support projects, training, and best practices." },
          { label: "Opportunities", text: "Share tenders, investments, and new initiatives." },
          { label: "Innovation", text: "Encourage fresh ideas and digital solutions." },
        ],
        cta: { label: "Be part of the commission", href: "/join" },
        image: "/mission.png",
      },
    },
   },

  { id: "reg-1", name: "Alpha Traders",  logo: "/reglogo1.png", category: "regular",
        description: "Leading mobility solutions provider.",
    detail: {
      intro: {
        heading: "Driving growth and collaboration",
        description:
          "The Lorem Ipsum commission unites experts, members, and partners to strengthen [sector focus]. We provide a platform for knowledge sharing, policy development, and collaboration to support sustainable growth and innovation.",
        cta: { label: "Schedule a Call", href: "/contact" },
      },
      policiesFaq: [
        {
          question: "Fee Only Financial Planning",
          answer:
            "Transparent pricing with no commissions. Advisors are compensated only by client fees to avoid conflicts of interest.",
        },
        {
          question: "Fiduciary Financial Planning",
          answer:
            "We act in your best interest at all times, with documented processes, disclosures, and ongoing monitoring.",
        },
        {
          question: "Professionals Only, No Salespeople",
          answer:
            "Certified professionals focused on strategy and outcomes, not product quotas or commissions.",
        },
      ],
      mission: {
        tag: "PREPARING FOR YOUR FUTURE",
        title: "Mission",
        description:
          "Our mission is to create opportunities, build partnerships, and provide guidance for members in the field of [sector focus].",
        bullets: [
          { label: "Networking",  text: "Connect members with local and international partners." },
          { label: "Development", text: "Support projects, training, and best practices." },
          { label: "Opportunities", text: "Share tenders, investments, and new initiatives." },
          { label: "Innovation", text: "Encourage fresh ideas and digital solutions." },
        ],
        cta: { label: "Be part of the commission", href: "/join" },
        image: "/mission.png",
      },
    },
   },
  { id: "reg-2", name: "Beta Foods",     logo: "/reglogo2.png", category: "regular",
        description: "Leading mobility solutions provider.",
    detail: {
      intro: {
        heading: "Driving growth and collaboration",
        description:
          "The Lorem Ipsum commission unites experts, members, and partners to strengthen [sector focus]. We provide a platform for knowledge sharing, policy development, and collaboration to support sustainable growth and innovation.",
        cta: { label: "Schedule a Call", href: "/contact" },
      },
      policiesFaq: [
        {
          question: "Fee Only Financial Planning",
          answer:
            "Transparent pricing with no commissions. Advisors are compensated only by client fees to avoid conflicts of interest.",
        },
        {
          question: "Fiduciary Financial Planning",
          answer:
            "We act in your best interest at all times, with documented processes, disclosures, and ongoing monitoring.",
        },
        {
          question: "Professionals Only, No Salespeople",
          answer:
            "Certified professionals focused on strategy and outcomes, not product quotas or commissions.",
        },
      ],
      mission: {
        tag: "PREPARING FOR YOUR FUTURE",
        title: "Mission",
        description:
          "Our mission is to create opportunities, build partnerships, and provide guidance for members in the field of [sector focus].",
        bullets: [
          { label: "Networking",  text: "Connect members with local and international partners." },
          { label: "Development", text: "Support projects, training, and best practices." },
          { label: "Opportunities", text: "Share tenders, investments, and new initiatives." },
          { label: "Innovation", text: "Encourage fresh ideas and digital solutions." },
        ],
        cta: { label: "Be part of the commission", href: "/join" },
        image: "/mission.png",
      },
    },
   },
  { id: "reg-3", name: "City Bikes",     logo: "/reglogo3.png", category: "regular",
        description: "Leading mobility solutions provider.",
    detail: {
      intro: {
        heading: "Driving growth and collaboration",
        description:
          "The Lorem Ipsum commission unites experts, members, and partners to strengthen [sector focus]. We provide a platform for knowledge sharing, policy development, and collaboration to support sustainable growth and innovation.",
        cta: { label: "Schedule a Call", href: "/contact" },
      },
      policiesFaq: [
        {
          question: "Fee Only Financial Planning",
          answer:
            "Transparent pricing with no commissions. Advisors are compensated only by client fees to avoid conflicts of interest.",
        },
        {
          question: "Fiduciary Financial Planning",
          answer:
            "We act in your best interest at all times, with documented processes, disclosures, and ongoing monitoring.",
        },
        {
          question: "Professionals Only, No Salespeople",
          answer:
            "Certified professionals focused on strategy and outcomes, not product quotas or commissions.",
        },
      ],
      mission: {
        tag: "PREPARING FOR YOUR FUTURE",
        title: "Mission",
        description:
          "Our mission is to create opportunities, build partnerships, and provide guidance for members in the field of [sector focus].",
        bullets: [
          { label: "Networking",  text: "Connect members with local and international partners." },
          { label: "Development", text: "Support projects, training, and best practices." },
          { label: "Opportunities", text: "Share tenders, investments, and new initiatives." },
          { label: "Innovation", text: "Encourage fresh ideas and digital solutions." },
        ],
        cta: { label: "Be part of the commission", href: "/join" },
        image: "/mission.png",
      },
    },
   },
  { id: "reg-4", name: "Digital World",  logo: "/reglogo4.png", category: "regular",
        description: "Leading mobility solutions provider.",
    detail: {
      intro: {
        heading: "Driving growth and collaboration",
        description:
          "The Lorem Ipsum commission unites experts, members, and partners to strengthen [sector focus]. We provide a platform for knowledge sharing, policy development, and collaboration to support sustainable growth and innovation.",
        cta: { label: "Schedule a Call", href: "/contact" },
      },
      policiesFaq: [
        {
          question: "Fee Only Financial Planning",
          answer:
            "Transparent pricing with no commissions. Advisors are compensated only by client fees to avoid conflicts of interest.",
        },
        {
          question: "Fiduciary Financial Planning",
          answer:
            "We act in your best interest at all times, with documented processes, disclosures, and ongoing monitoring.",
        },
        {
          question: "Professionals Only, No Salespeople",
          answer:
            "Certified professionals focused on strategy and outcomes, not product quotas or commissions.",
        },
      ],
      mission: {
        tag: "PREPARING FOR YOUR FUTURE",
        title: "Mission",
        description:
          "Our mission is to create opportunities, build partnerships, and provide guidance for members in the field of [sector focus].",
        bullets: [
          { label: "Networking",  text: "Connect members with local and international partners." },
          { label: "Development", text: "Support projects, training, and best practices." },
          { label: "Opportunities", text: "Share tenders, investments, and new initiatives." },
          { label: "Innovation", text: "Encourage fresh ideas and digital solutions." },
        ],
        cta: { label: "Be part of the commission", href: "/join" },
        image: "/mission.png",
      },
    },
   },
  { id: "reg-5", name: "Eco Green",      logo: "/reglogo5.png", category: "regular",
        description: "Leading mobility solutions provider.",
    detail: {
      intro: {
        heading: "Driving growth and collaboration",
        description:
          "The Lorem Ipsum commission unites experts, members, and partners to strengthen [sector focus]. We provide a platform for knowledge sharing, policy development, and collaboration to support sustainable growth and innovation.",
        cta: { label: "Schedule a Call", href: "/contact" },
      },
      policiesFaq: [
        {
          question: "Fee Only Financial Planning",
          answer:
            "Transparent pricing with no commissions. Advisors are compensated only by client fees to avoid conflicts of interest.",
        },
        {
          question: "Fiduciary Financial Planning",
          answer:
            "We act in your best interest at all times, with documented processes, disclosures, and ongoing monitoring.",
        },
        {
          question: "Professionals Only, No Salespeople",
          answer:
            "Certified professionals focused on strategy and outcomes, not product quotas or commissions.",
        },
      ],
      mission: {
        tag: "PREPARING FOR YOUR FUTURE",
        title: "Mission",
        description:
          "Our mission is to create opportunities, build partnerships, and provide guidance for members in the field of [sector focus].",
        bullets: [
          { label: "Networking",  text: "Connect members with local and international partners." },
          { label: "Development", text: "Support projects, training, and best practices." },
          { label: "Opportunities", text: "Share tenders, investments, and new initiatives." },
          { label: "Innovation", text: "Encourage fresh ideas and digital solutions." },
        ],
        cta: { label: "Be part of the commission", href: "/join" },
        image: "/mission.png",
      },
    },
   },
  { id: "reg-6", name: "NextGen",        logo: "/reglogo6.png", category: "regular",
        description: "Leading mobility solutions provider.",
    detail: {
      intro: {
        heading: "Driving growth and collaboration",
        description:
          "The Lorem Ipsum commission unites experts, members, and partners to strengthen [sector focus]. We provide a platform for knowledge sharing, policy development, and collaboration to support sustainable growth and innovation.",
        cta: { label: "Schedule a Call", href: "/contact" },
      },
      policiesFaq: [
        {
          question: "Fee Only Financial Planning",
          answer:
            "Transparent pricing with no commissions. Advisors are compensated only by client fees to avoid conflicts of interest.",
        },
        {
          question: "Fiduciary Financial Planning",
          answer:
            "We act in your best interest at all times, with documented processes, disclosures, and ongoing monitoring.",
        },
        {
          question: "Professionals Only, No Salespeople",
          answer:
            "Certified professionals focused on strategy and outcomes, not product quotas or commissions.",
        },
      ],
      mission: {
        tag: "PREPARING FOR YOUR FUTURE",
        title: "Mission",
        description:
          "Our mission is to create opportunities, build partnerships, and provide guidance for members in the field of [sector focus].",
        bullets: [
          { label: "Networking",  text: "Connect members with local and international partners." },
          { label: "Development", text: "Support projects, training, and best practices." },
          { label: "Opportunities", text: "Share tenders, investments, and new initiatives." },
          { label: "Innovation", text: "Encourage fresh ideas and digital solutions." },
        ],
        cta: { label: "Be part of the commission", href: "/join" },
        image: "/mission.png",
      },
    },
   },
  { id: "reg-7", name: "Optima Tech",    logo: "/reglogo7.png", category: "regular",
        description: "Leading mobility solutions provider.",
    detail: {
      intro: {
        heading: "Driving growth and collaboration",
        description:
          "The Lorem Ipsum commission unites experts, members, and partners to strengthen [sector focus]. We provide a platform for knowledge sharing, policy development, and collaboration to support sustainable growth and innovation.",
        cta: { label: "Schedule a Call", href: "/contact" },
      },
      policiesFaq: [
        {
          question: "Fee Only Financial Planning",
          answer:
            "Transparent pricing with no commissions. Advisors are compensated only by client fees to avoid conflicts of interest.",
        },
        {
          question: "Fiduciary Financial Planning",
          answer:
            "We act in your best interest at all times, with documented processes, disclosures, and ongoing monitoring.",
        },
        {
          question: "Professionals Only, No Salespeople",
          answer:
            "Certified professionals focused on strategy and outcomes, not product quotas or commissions.",
        },
      ],
      mission: {
        tag: "PREPARING FOR YOUR FUTURE",
        title: "Mission",
        description:
          "Our mission is to create opportunities, build partnerships, and provide guidance for members in the field of [sector focus].",
        bullets: [
          { label: "Networking",  text: "Connect members with local and international partners." },
          { label: "Development", text: "Support projects, training, and best practices." },
          { label: "Opportunities", text: "Share tenders, investments, and new initiatives." },
          { label: "Innovation", text: "Encourage fresh ideas and digital solutions." },
        ],
        cta: { label: "Be part of the commission", href: "/join" },
        image: "/mission.png",
      },
    },
   },
  { id: "reg-8", name: "Urban Motors",   logo: "/reglogo8.png", category: "regular",
        description: "Leading mobility solutions provider.",
    detail: {
      intro: {
        heading: "Driving growth and collaboration",
        description:
          "The Lorem Ipsum commission unites experts, members, and partners to strengthen [sector focus]. We provide a platform for knowledge sharing, policy development, and collaboration to support sustainable growth and innovation.",
        cta: { label: "Schedule a Call", href: "/contact" },
      },
      policiesFaq: [
        {
          question: "Fee Only Financial Planning",
          answer:
            "Transparent pricing with no commissions. Advisors are compensated only by client fees to avoid conflicts of interest.",
        },
        {
          question: "Fiduciary Financial Planning",
          answer:
            "We act in your best interest at all times, with documented processes, disclosures, and ongoing monitoring.",
        },
        {
          question: "Professionals Only, No Salespeople",
          answer:
            "Certified professionals focused on strategy and outcomes, not product quotas or commissions.",
        },
      ],
      mission: {
        tag: "PREPARING FOR YOUR FUTURE",
        title: "Mission",
        description:
          "Our mission is to create opportunities, build partnerships, and provide guidance for members in the field of [sector focus].",
        bullets: [
          { label: "Networking",  text: "Connect members with local and international partners." },
          { label: "Development", text: "Support projects, training, and best practices." },
          { label: "Opportunities", text: "Share tenders, investments, and new initiatives." },
          { label: "Innovation", text: "Encourage fresh ideas and digital solutions." },
        ],
        cta: { label: "Be part of the commission", href: "/join" },
        image: "/mission.png",
      },
    },
   },
];

export const premiumBrands = brands.filter((b) => b.category === "premium");
export const regularBrands = brands.filter((b) => b.category === "regular");

export function getBrandById(id: string) {
  return brands.find((b) => b.id === id) || null;
}
