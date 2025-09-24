// commissionData.ts
export type CardIconName = "shield" | "globe" | "layers" | "star";

export type Commission = {
  id: string;
  title: string;
  subtitle?: string;
  icon: CardIconName;
  active?: boolean;
extraTitle?: string;
  extraDescription?: string; // Add this field
  buttonLink?: string; // Add this field
  faq?: { // Add the faq array of objects
    question: string;
    answer: string;
  }[];
};

export const commissionData: Commission[] = [
  {
    id: "trade",
    title: "Trade & Investment Commission",
    subtitle:
      "Expands cross-border trade, attracts investment, and connects members with new opportunities.",
    icon: "globe",
     extraTitle: "Global Connections",
    extraDescription: "This is an additional description for the trade commission.",
    buttonLink: "/trade-investment",
    faq: [
      {
        question: "What is cross-border trade?",
        answer: "Cross-border trade refers to the exchange of goods and services between countries.",
      },
      {
        question: "How do I join the commission?",
        answer: "You can apply for membership through our official website portal.",
      },
    ],
  },
  {
    id: "tech",
    title: "Technology & Innovation",
    subtitle:
      "Promotes digital transformation, AI, and startup growth across industries.",
    icon: "layers",
    active: true,
  },
  {
    id: "youth",
    title: "Youth & Education Commission",
    subtitle:
      "Empowers young leaders through mentorship, training, and career support.",
    icon: "layers",
  },
  {
    id: "industry",
    title: "Industry & Manufacturing",
    subtitle:
      "Expands cross-border trade, attracts investment, and connects members with new opportunities.",
    icon: "star",
  },
  {
    id: "culture",
    title: "Culture & Social Development",
    subtitle:
      "Strengthens cultural ties and community collaboration across the Turkish world.",
    icon: "shield",
  },
  {
    id: "finance",
    title: "Finance & Risk Advisory",
    subtitle:
      "Provides financial guidance, risk management, and regulatory support.",
    icon: "globe",
  },
  {
    id: "youther",
    title: "Youth & Education Commission",
    subtitle:
      "Empowers young leaders through mentorship, training, and career support.",
    icon: "layers",
  },
  {
    id: "industr",
    title: "Industry & Manufacturing",
    subtitle:
      "Expands cross-border trade, attracts investment, and connects members with new opportunities.",
    icon: "star",
  },
];
