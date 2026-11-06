"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { ComponentType, RefObject } from "react";
import WebsiteMotion from "./WebsiteMotion";
import DesktopHero from "./figma/Section236_26";
import DesktopLogos from "./figma/Section212_157";
import DesktopFeatures from "./figma/Section236_15";
import DesktopIntegrations from "./figma/Section212_691";
import DesktopCta from "./figma/Section212_995";
import DesktopOperations from "./figma/Section212_997";
import DesktopBooking from "./figma/Section236_16";
import Testimonials from "./Testimonials";
import DesktopAnalytics from "./figma/Section236_18";
import DesktopFinalCta from "./figma/Section212_542";
import DesktopFooter from "./figma/Section212_624";
import MobileHero from "./figma/Section278_2994";
import MobileLogos from "./figma/Section278_3107";
import MobileFeatures from "./figma/Section278_3125";
import MobileIntegrations from "./figma/Section278_3237";
import MobileCta from "./figma/Section278_3272";
import MobileOperations from "./figma/Section278_3280";
import MobileBooking from "./figma/Section278_3415";
import MobileAnalytics from "./figma/Section278_3576";
import MobileFinalCta from "./figma/Section278_3591";
import MobileFooter from "./figma/Section278_3599";
import MobileMenuDesign from "./figma/Section278_2169";

type Section = { top: number; height: number; Component: ComponentType };
type Hotspot = { id: string; label: string; action: "menu" | "close" | "info" | "home"; textLink?: boolean; primary?: boolean };

function MobileTestimonials() { return <Testimonials mobile />; }

const desktopSections: Section[] = [
  { top: 0, height: 1176, Component: DesktopHero },
  { top: 1176, height: 297, Component: DesktopLogos },
  { top: 1473, height: 1440, Component: DesktopFeatures },
  { top: 2913, height: 614, Component: DesktopIntegrations },
  { top: 3527, height: 460, Component: DesktopCta },
  { top: 3987, height: 928, Component: DesktopOperations },
  { top: 4915, height: 856, Component: DesktopBooking },
  { top: 5771, height: 904, Component: Testimonials },
  { top: 6675, height: 760, Component: DesktopAnalytics },
  { top: 7435, height: 604, Component: DesktopFinalCta },
  { top: 8039, height: 480, Component: DesktopFooter },
];

const mobileSections: Section[] = [
  { top: 0, height: 798, Component: MobileHero },
  { top: 798, height: 244, Component: MobileLogos },
  { top: 1042, height: 1897, Component: MobileFeatures },
  { top: 2939, height: 819, Component: MobileIntegrations },
  { top: 3758, height: 464, Component: MobileCta },
  { top: 4222, height: 1133, Component: MobileOperations },
  { top: 5355, height: 756, Component: MobileBooking },
  { top: 6111, height: 824.5, Component: MobileTestimonials },
  { top: 6935.5, height: 646, Component: MobileAnalytics },
  { top: 7581.5, height: 464, Component: MobileFinalCta },
  { top: 8045.5, height: 384, Component: MobileFooter },
];

const desktopHotspots: Hotspot[] = [
  { id: "212:22", label: "Fairwayze home", action: "home" },
  { id: "212:19", label: "Pricing", action: "info", textLink: true },
  { id: "212:20", label: "Demo", action: "info", textLink: true },
  { id: "212:21", label: "Contact", action: "info", textLink: true },
  { id: "242:1003", label: "Get started", action: "info", primary: true },
  { id: "242:1005", label: "Get started", action: "info", primary: true },
  { id: "242:1009", label: "Book a demo", action: "info" },
  { id: "242:1011", label: "Get started", action: "info", primary: true },
  { id: "242:1015", label: "Book a demo", action: "info" },
  { id: "242:1017", label: "Get started", action: "info", primary: true },
  { id: "242:1021", label: "Book a demo", action: "info" },
  { id: "212:649", label: "Pricing", action: "info", textLink: true },
  { id: "212:650", label: "Demo", action: "info", textLink: true },
  { id: "212:651", label: "Contact", action: "info", textLink: true },
  { id: "212:688", label: "Privacy Policy", action: "info", textLink: true },
  { id: "212:689", label: "Terms of Service", action: "info", textLink: true },
];

const mobileHotspots: Hotspot[] = [
  { id: "278:2996", label: "Fairwayze home", action: "home" },
  { id: "278:3018", label: "Open navigation menu", action: "menu" },
  { id: "278:3031", label: "Get started", action: "info", primary: true },
  { id: "278:3032", label: "Book a demo", action: "info" },
  { id: "278:3278", label: "Get started", action: "info", primary: true },
  { id: "278:3279", label: "Book a demo", action: "info" },
  { id: "278:3597", label: "Get started", action: "info", primary: true },
  { id: "278:3598", label: "Book a demo", action: "info" },
  { id: "278:3622", label: "Pricing", action: "info", textLink: true },
  { id: "278:3623", label: "Demo", action: "info", textLink: true },
  { id: "278:3624", label: "Contact", action: "info", textLink: true },
  { id: "278:3633", label: "Privacy Policy", action: "info", textLink: true },
  { id: "278:3634", label: "Terms of Service", action: "info", textLink: true },
];

const menuHotspots: Hotspot[] = [
  { id: "278:2931", label: "Close navigation menu", action: "close" },
  { id: "278:2943", label: "Pricing", action: "info", textLink: true },
  { id: "278:2944", label: "Demo", action: "info", textLink: true },
  { id: "278:2945", label: "Contact", action: "info", textLink: true },
  { id: "278:2947", label: "Get started", action: "info", primary: true },
];

function useHotspots(
  root: RefObject<HTMLDivElement | null>,
  hotspots: Hotspot[],
  active: boolean,
  onAction: (hotspot: Hotspot) => void,
) {
  useEffect(() => {
    if (!active || !root.current) return;
    const buttons: HTMLElement[] = [];
    for (const hotspot of hotspots) {
      const target = root.current.querySelector<HTMLElement>(`[data-node-id="${hotspot.id}"]`);
      if (!target) continue;
      if (getComputedStyle(target).position === "static") target.style.position = "relative";
      const control = document.createElement(hotspot.action === "home" ? "a" : "button");
      control.className = `figma-hotspot${hotspot.textLink ? " figma-hotspot--text-link" : ""}${hotspot.primary ? " figma-hotspot--primary" : ""}`;
      control.setAttribute("aria-label", hotspot.label);
      if (control instanceof HTMLAnchorElement) control.href = "#top";
      else control.type = "button";
      control.addEventListener("click", (event) => {
        event.preventDefault();
        onAction(hotspot);
      });
      target.appendChild(control);
      buttons.push(control);
    }
    return () => buttons.forEach((button) => button.remove());
  }, [active, hotspots, onAction, root]);
}

function Canvas({
  isMobile,
  wideMobile,
  scale,
  rootRef,
  hidden,
}: {
  isMobile: boolean;
  wideMobile: boolean;
  scale: number;
  rootRef: RefObject<HTMLDivElement | null>;
  hidden: boolean;
}) {
  const sections = isMobile ? mobileSections : desktopSections;
  const width = isMobile ? 375 : 1600;
  const height = isMobile ? 8429.5 : 8519;
  return (
    <main
      className={isMobile ? `mobile-page${wideMobile ? " mobile-page-wide" : ""}` : "desktop-page"}
      style={{ width: isMobile && !wideMobile ? width * scale : "100%", height: isMobile && !wideMobile ? height * scale : "auto", marginInline: "auto", visibility: hidden ? "hidden" : "visible" }}
    >
      <div
        ref={rootRef}
        id="top"
        className={`page-canvas ${isMobile ? `mobile-canvas${wideMobile ? " mobile-canvas-wide" : ""}` : "responsive-canvas"}`}
        style={isMobile && !wideMobile ? { width, height, transform: `scale(${scale})` } : undefined}
      >
        {sections.map(({ top, height: sectionHeight, Component }, index) => (
          <section
            className="canvas-section"
            style={isMobile && !wideMobile ? { top, height: sectionHeight } : undefined}
            aria-label={index === 0 ? "Introduction" : undefined}
            key={top}
          >
            <Component />
          </section>
        ))}
      </div>
    </main>
  );
}

export default function Website() {
  const [viewport, setViewport] = useState(1600);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dialogLabel, setDialogLabel] = useState<string | null>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const lastFocusRef = useRef<HTMLElement | null>(null);
  const isMobile = viewport < 768;
  const wideMobile = viewport >= 470 && viewport < 768;
  const scale = isMobile && !wideMobile ? viewport / 375 : 1;

  useEffect(() => {
    const update = () => setViewport(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    lastFocusRef.current = document.activeElement as HTMLElement;
    document.body.style.overflow = "hidden";
    const focusFrame = requestAnimationFrame(() => {
      menuRef.current?.querySelector<HTMLButtonElement>('button[aria-label="Close navigation menu"]')?.focus();
    });
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
      if (event.key === "Tab") {
        const controls = Array.from(menuRef.current?.querySelectorAll<HTMLElement>("button") ?? []);
        if (!controls.length) return;
        const current = controls.indexOf(document.activeElement as HTMLElement);
        if (event.shiftKey && current <= 0) {
          event.preventDefault();
          controls[controls.length - 1].focus();
        } else if (!event.shiftKey && current === controls.length - 1) {
          event.preventDefault();
          controls[0].focus();
        }
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      cancelAnimationFrame(focusFrame);
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
      lastFocusRef.current?.focus();
    };
  }, [menuOpen]);

  useEffect(() => {
    if (dialogLabel && !dialogRef.current?.open) dialogRef.current?.showModal();
    if (!dialogLabel && dialogRef.current?.open) dialogRef.current.close();
  }, [dialogLabel]);

  const onAction = useCallback((hotspot: Hotspot) => {
    if (hotspot.action === "menu") setMenuOpen(true);
    else if (hotspot.action === "close") setMenuOpen(false);
    else if (hotspot.action === "home") window.scrollTo({ top: 0, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    else {
      setMenuOpen(false);
      setDialogLabel(hotspot.label);
    }
  }, []);

  useHotspots(canvasRef, isMobile ? mobileHotspots : desktopHotspots, true, onAction);
  useHotspots(menuRef, menuHotspots, menuOpen, onAction);

  return (
    <>
      <Canvas isMobile={isMobile} wideMobile={wideMobile} scale={scale} rootRef={canvasRef} hidden={menuOpen && isMobile} />
      <WebsiteMotion root={canvasRef} isMobile={isMobile} suspended={menuOpen || dialogLabel !== null} />
      {menuOpen && isMobile && (
        <>
          <div className="mobile-menu-overlay" onClick={() => setMenuOpen(false)} aria-hidden="true" />
          <nav
            ref={menuRef}
            className="mobile-menu-sheet"
            aria-label="Mobile navigation"
            style={{ width: 375, height: 812, left: Math.max(0, (viewport - 375 * scale) / 2), transform: `scale(${scale})` }}
          >
            <MobileMenuDesign />
          </nav>
        </>
      )}
      <dialog
        ref={dialogRef}
        className="destination-dialog"
        onClose={() => setDialogLabel(null)}
        onClick={(event) => {
          if (event.target === dialogRef.current) setDialogLabel(null);
        }}
      >
        <h2>{dialogLabel}</h2>
        <p>The destination for this action was not provided in the Figma design. Connect it to your live booking or contact flow when available.</p>
        <button type="button" onClick={() => setDialogLabel(null)}>Close</button>
      </dialog>
    </>
  );
}
