export type Subscription = {
  id: string;
  name: string;
  price: number
};

// Define guests without href first
const baseGuests: Omit<Subscription, "href">[] = [
  { 
    id: "john",
    name: "John Smith",
    price: 20
  },
];

// Build full guests array with href auto-added
export const GUESTS: Subscription[] = baseGuests.map((g) => ({
  ...g,
  href: `/pages/member-about/${g.id}`,
}));
