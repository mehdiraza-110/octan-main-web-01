import { notFound } from "next/navigation";
import GuestProfile from "@/components/GuestCard/GuestProfile";
import { GUESTS } from "@/components/GuestCard/guests";

export default function GuestPage({ params }: { params: { id: string } }) {
  const guest = GUESTS.find((g) => g.id === params.id);
  if (!guest) return notFound();

  return <GuestProfile guest={guest} />;
}
