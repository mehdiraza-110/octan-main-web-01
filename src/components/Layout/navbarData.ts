// components/layout/navData.ts
export type NavItem = {
  label: string;
  href?: string;
  children?: NavItem[];
  badge?: string;
};

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Members",
    children: [
      { label: "Board of Directors", href: "/pages/board-of-directors" },
      { label: "Members of CEO", href: "/pages/members-of-ceo" },
    ],
  },
  {
    label: "Commissions", href: "/pages/commissions" 
  },
  { label: "About", href: "/pages/about" },
  {
    label: "Brands", href: "/pages/brands" 
  },
  { label: "Tenders", href: "/pages/tenders" },
  { label: "Announcement", href: "/pages/announcements" },
  { label: "News", href: "/pages/news" },
];
