"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

/** Keep the Figma illustration intact while the surrounding content reflows. */
export default function ResponsiveArtwork({
  width,
  height,
  className = "",
  fit = "width",
  children,
}: {
  width: number;
  height: number;
  className?: string;
  fit?: "width" | "cover";
  children: ReactNode;
}) {
  const frameRef = useRef<HTMLDivElement>(null);
  const artworkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const frame = frameRef.current;
    const artwork = artworkRef.current;
    if (!frame || !artwork) return;
    const update = () => {
      const scale = fit === "cover"
        ? Math.max(frame.clientWidth / width, frame.clientHeight / height)
        : frame.clientWidth / width;
      const x = fit === "cover" ? (frame.clientWidth - width * scale) / 2 : 0;
      const y = fit === "cover" ? (frame.clientHeight - height * scale) / 2 : 0;
      artwork.style.setProperty("--artwork-scale", String(scale));
      artwork.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
      artwork.style.visibility = "visible";
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(frame);
    return () => observer.disconnect();
  }, [width, height, fit]);

  return (
    <div ref={frameRef} className={`responsive-artwork ${className}`} style={{ aspectRatio: `${width} / ${height}` }}>
      <div ref={artworkRef} className="responsive-artwork-inner" style={{ width, height, visibility: "hidden" }}>
        {children}
      </div>
    </div>
  );
}
