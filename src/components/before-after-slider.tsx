import { useEffect, useRef, useState, type ReactNode } from "react";

interface Props {
  beforeLabel: string;
  afterLabel: string;
  alt: string;
  before?: ReactNode; // optional custom node, otherwise Placeholder is used
  after?: ReactNode;
}

import { Placeholder } from "./placeholder";

export function BeforeAfterSlider({ beforeLabel, afterLabel, alt, before, after }: Props) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromClientX = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, x)));
  };

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (!dragging.current) return;
      e.preventDefault();
      updateFromClientX(e.clientX);
    };
    const onUp = () => { dragging.current = false; };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[16/10] overflow-hidden select-none touch-none cursor-ew-resize bg-muted"
      onPointerDown={(e) => {
        dragging.current = true;
        updateFromClientX(e.clientX);
      }}
      role="slider"
      aria-label={`Before and after comparison for ${alt}`}
      aria-valuenow={Math.round(pos)}
      aria-valuemin={0}
      aria-valuemax={100}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 4));
        if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 4));
      }}
    >
      {/* AFTER (full background) */}
      <div className="absolute inset-0">
        {after ?? <Placeholder label={afterLabel} tone="light" className="!h-full" />}
      </div>

      {/* BEFORE (clipped from left) */}
      <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <div className="absolute inset-y-0 left-0 h-full" style={{ width: containerRef.current?.clientWidth ?? "100%" }}>
          {before ?? <Placeholder label={beforeLabel} tone="dark" className="!h-full" />}
        </div>
      </div>

      {/* Tags */}
      <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-charcoal/80 text-white text-[10px] tracking-[0.28em] uppercase backdrop-blur-md">Before</div>
      <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-gold text-charcoal text-[10px] tracking-[0.28em] uppercase">After</div>

      {/* Divider */}
      <div
        className="absolute top-0 bottom-0 w-px bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.25)]"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-elegant flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-charcoal">
            <polyline points="15 18 9 12 15 6" />
            <polyline points="9 18 15 12 9 6" transform="translate(6 0)" />
          </svg>
        </div>
      </div>
    </div>
  );
}
