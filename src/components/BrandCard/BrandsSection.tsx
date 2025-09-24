"use client";

import { useRef, useState } from "react";
import BrandCard, { Brand } from "./";

export default function BrandsSection({
  label = "BRANDS",
  brands,
  className = "",
}: {
  label?: string;
  brands: Brand[];
  className?: string;
}) {
  const railRef = useRef<HTMLDivElement | null>(null);
  const [dragging, setDragging] = useState(false);
  const startX = useRef(0);
  const startLeft = useRef(0);

  const onPointerDown = (e: React.PointerEvent) => {
    const el = railRef.current;
    if (!el) return;
    setDragging(true);
    startX.current = e.clientX;
    startLeft.current = el.scrollLeft;
    el.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging) return;
    const el = railRef.current;
    if (!el) return;
    el.scrollLeft = startLeft.current - (e.clientX - startX.current);
  };
  const endDrag = (e: React.PointerEvent) => {
    const el = railRef.current;
    if (!el) return;
    setDragging(false);
    try { el.releasePointerCapture(e.pointerId); } catch {}
  };

  return (
    <section
      className={`w-full p-5 sm:px-6 md:px-10 ${className}`}
      style={{ background: "#fff" }}
    >
      {/* hairline with centered chip */}
      <div className="relative mx-auto mb-6 max-w-[1400px]">
        <div className="h-px w-full bg-slate-200" />
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-200 bg-white px-3 py-1 text-[10px] font-semibold tracking-wide text-slate-600">
          {label}
        </span>
      </div>

      {/* cursor/drag scroll rail */}
      <div className="mx-auto max-w-[1400px]">
        <div
          ref={railRef}
          role="list"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onPointerLeave={endDrag}
          className="flex cursor-grab select-none items-center gap-10 overflow-x-auto pb-2 active:cursor-grabbing
                     [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label="Brand logos"
        >
          {brands.map((b) => (
            <div key={b.id} role="listitem" className="shrink-0">
              <BrandCard brand={b} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
