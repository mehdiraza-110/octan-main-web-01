import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-[800px] px-4 py-16 text-center">
      <h1 className="text-2xl font-bold">Profile not found</h1>
      <p className="mt-2 text-slate-600">
        The member you’re looking for doesn’t exist or has been moved.
      </p>
      <Link href="/team" className="mt-6 inline-block rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white">
        Back to team
      </Link>
    </main>
  );
}
