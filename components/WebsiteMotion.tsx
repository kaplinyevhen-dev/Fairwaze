"use client";

import { useEffect, useRef, useState } from "react";
import type { RefObject } from "react";
import { mountAnalyticsCounters } from "./motion/analyticsCounters";
import type { AnalyticsCounter } from "./motion/analyticsCounters";

type Entrance = { ids: string[]; x?: number; y?: number; delay?: number; fadeIn?: boolean; fromBottom?: boolean; fromEdge?: "left" | "right" | "top" | "bottom" };
// Verified against the existing Section*.tsx files. Never target anonymous images.
const entrances: Entrance[] = [
  { ids: ["212:55", "278:3027"], y: 8 },
  { ids: ["212:56", "278:3028"], y: 12, delay: 120 },
  { ids: ["212:57", "278:3029"], y: 10, delay: 240 },
  { ids: ["212:58", "278:3030"], y: 8, delay: 360 },
  { ids: ["212:101", "278:3054"], y: 18, delay: 120 },
  { ids: ["212:99", "278:3052"], y: 18, delay: 120 },
  { ids: ["212:155", "278:3105", "212:152"], fadeIn: true, delay: 120 },
  { ids: ["212:190", "278:3139"], fromBottom: true, delay: 0 },
  // The central membership card is two siblings: move both by the same amount.
  { ids: ["212:192", "212:193", "278:3141", "278:3142"], fromBottom: true, delay: 650 },
  { ids: ["212:196", "278:3145"], fromBottom: true, delay: 1300 },
  { ids: ["212:210", "278:3159"], y: 14 },
  { ids: ["212:237", "278:3231"], fromEdge: "left", delay: 800 },
  { ids: ["212:239", "278:3233"], fromEdge: "right", delay: 400 },
  { ids: ["212:241", "278:3235"], fromEdge: "left", delay: 0 },
  { ids: ["212:253", "278:3183"], fromEdge: "bottom", delay: 0 },
  { ids: ["212:278", "278:3208"], fadeIn: true, delay: 800 },
  { ids: ["212:284", "278:3214"], y: 4, delay: 1600 },
  { ids: ["212:287", "278:3217"], y: 4, delay: 1800 },

  // The same reveal sequence for section labels, headings and descriptions.
  { ids: ["212:178", "278:3127", "212:693", "278:3239", "212:295", "278:3282", "212:431", "278:3578"], y: 8 },
  { ids: ["212:177", "278:3128", "212:694", "278:3240", "212:296", "278:3283", "212:432", "278:3579"], y: 16, delay: 120 },
  { ids: ["212:695", "278:3241", "212:433", "278:3580"], y: 10, delay: 240 },
  { ids: ["212:452", "278:3418", "212:592", "278:3511"], y: 16 },
  { ids: ["212:366", "278:3327"], fadeIn: true, delay: 0 },
  { ids: ["212:338", "278:3299"], fadeIn: true, delay: 180 },
  { ids: ["212:397", "278:3358"], fadeIn: true, delay: 360 },
  { ids: ["212:312", "278:3407"], fromEdge: "top", delay: 0 },
  // Reveal the complete cart panel, including its white backing and details.
  { ids: ["212:315", "212:316", "212:317", "212:318", "212:319",
    "278:3410", "278:3411", "278:3412", "278:3413", "278:3414"], fadeIn: true, delay: 1550 },
  { ids: ["212:472", "278:3438"], fadeIn: true, delay: 180 },
  { ids: ["212:540", "278:3506"], fadeIn: true, delay: 650 },
  { ids: ["212:455", "278:3421"], x: 12, delay: 180 },
  { ids: ["212:460", "278:3426"], x: 12, delay: 400 },
  { ids: ["212:465", "278:3431"], x: 12, delay: 620 },
  { ids: ["212:445", "278:3589"], fadeIn: true, delay: 0 },
  { ids: ["212:443", "278:3587"], fadeIn: true, delay: 120 },
];

// Observe the card, not a tiny detail peeking above the viewport's lower edge.
const cardAnchors = ["212:181", "212:198", "212:226", "212:243", "278:3130", "278:3147", "278:3173", "278:3220",
  "212:320", "212:297", "278:3285", "278:3392", "278:3436"];
// A shared text-block anchor keeps each label/title/description in sequence.
const headingAnchors = ["212:176", "278:3126", "212:692", "278:3238", "212:294", "278:3281", "212:430", "278:3577"];
const anchorSelector = [...cardAnchors, ...headingAnchors].map(id => `[data-node-id="${id}"]`).join(",") + ",.booking-artwork";
const gradientDuration = 5000;
const quickStatsCards = new Set(["212:152", "212:155", "278:3105", "212:472", "278:3438", "212:540", "278:3506", "212:445", "278:3589", "212:443", "278:3587"]);
const heroStatsCards = new Set(["212:152", "212:155", "278:3105"]);
const metricSelector = '[data-name="Statistics Row"] > div > p:first-child, [data-name="Stats"] > div > p:first-child';

export default function WebsiteMotion({ root, isMobile, suspended }: {
  root: RefObject<HTMLDivElement | null>;
  isMobile: boolean;
  suspended: boolean;
}) {
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const seen = useRef(new WeakSet<Element>());
  const counted = useRef(new WeakSet<Element>());

  useEffect(() => {
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const canvas = root.current;
    if (!canvas || !window.IntersectionObserver || !Element.prototype.animate) return;
    if (paused || suspended || reduced || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const factor = isMobile ? 0.6 : 1;
    const owned = new Set<Animation>();
    const loops = new Map<Element, Animation[]>();
    const visible = new Set<Element>();
    const groups = new Map<Element, Array<{ element: HTMLElement; spec: Entrance }>>();
    const undo: Array<() => void> = [];
    const analyticsGroups = new Map<HTMLElement, AnalyticsCounter[]>();
    const counterJobs = new Map<HTMLElement | SVGTextElement, { start: number; value: number; suffix: string; prefix?: string; decimals?: number; visual: Element; finish?: () => void }>();
    let counterFrame = 0;
    let disposed = false;
    const query = (id: string) => canvas.querySelector<HTMLElement>(`[data-node-id="${id}"]`);
    const remember = (animation: Animation) => {
      owned.add(animation);
      animation.onfinish = () => owned.delete(animation);
      return animation;
    };
    for (const spec of entrances) for (const id of spec.ids) {
      const element = query(id);
      if (!element) continue;
      const anchor = id === "212:99" || (heroStatsCards.has(id) && id.startsWith("212:")) ? query("212:101") ?? element
        : id === "278:3052" || heroStatsCards.has(id) ? query("278:3054") ?? element
        : element.closest<HTMLElement>(anchorSelector) ?? element;
      const group = groups.get(anchor) ?? [];
      group.push({ element, spec });
      groups.set(anchor, group);
      element.dataset.motionState = seen.current.has(element) ? "complete" : "waiting";
      if (spec.y && headingAnchors.some(headingId => anchor.dataset.nodeId === headingId) && !seen.current.has(element)) {
        element.style.setProperty("--fw-heading-entrance-y", `${spec.y * factor}px`);
        element.classList.add("fw-heading-entrance-waiting");
        undo.push(() => {
          element.classList.remove("fw-heading-entrance-waiting");
          element.style.removeProperty("--fw-heading-entrance-y");
        });
      }
      if ((spec.fromBottom || spec.fromEdge || spec.fadeIn) && !seen.current.has(element)) {
        // Keep decorative cards below the clipping edge until their turn.
        // The static design remains visible if JS or motion is disabled.
        element.classList.add("fw-entrance-waiting");
        undo.push(() => element.classList.remove("fw-entrance-waiting"));
      }
    }
    const reveal = (element: HTMLElement, spec: Entrance) => {
      if (seen.current.has(element)) return;
      seen.current.add(element);
      element.dataset.motionState = "playing";
      let x = (spec.x ?? 0) * factor;
      let y = (spec.y ?? 0) * factor;
      const edge = spec.fromBottom ? "bottom" : spec.fromEdge;
      if (edge) {
        const clip = element.closest<HTMLElement>('[data-node-id="212:186"], [data-node-id="278:3135"], [data-node-id="212:231"], [data-node-id="278:3225"], [data-node-id="212:248"], [data-node-id="278:3178"], [data-node-id="212:297"], [data-node-id="278:3392"]');
        if (clip) {
          // Offset geometry stays in artwork coordinates, before scaling.
          // Shared layers (e.g. the membership border/content) move together.
          const layers = spec.ids.map(query).filter((node): node is HTMLElement => Boolean(node && clip.contains(node)));
          x = 0; y = 0;
          if (edge === "bottom") y = clip.clientHeight - Math.min(...layers.map(node => node.offsetTop)) + 24;
          if (edge === "top") y = -Math.max(...layers.map(node => node.offsetTop + node.offsetHeight)) - 24;
          if (edge === "left") x = -Math.max(...layers.map(node => node.offsetLeft + node.offsetWidth)) - 24;
          if (edge === "right") x = clip.clientWidth - Math.min(...layers.map(node => node.offsetLeft)) + 24;
        }
      }
      // Headings move into place without opacity changes. Starting a fade
      // after text is already painted can make it flash on first scroll.
      const cardReveal = spec.fadeIn && !edge && !spec.x && !spec.y;
      if (cardReveal) y = 16 * factor;
      const options = {
        duration: cardReveal ? (quickStatsCards.has(element.dataset.nodeId ?? "") ? 780 : (isMobile ? 980 : 1100)) : (isMobile ? 1250 : 1500), delay: spec.delay ?? 0,
        easing: "cubic-bezier(.25,.1,.25,1)", fill: "backwards" as FillMode,
      };
      // Scale the whole card with its existing shadow. Multi-layer artwork
      // and scrolling rows share a translation so their layers stay aligned.
      const scale = cardReveal && (spec.ids.length <= 2 || heroStatsCards.has(element.dataset.nodeId ?? "")) && !element.dataset.marqueeDirection ? 0.985 : 1;
      const movement = remember(element.animate(cardReveal ? [
        { transform: `translate3d(0,${y}px,0) scale(${scale})`, offset: 0 },
        { transform: "translate3d(0,0,0) scale(1)", offset: 1 },
      ] : [
        { transform: `translate3d(${x}px, ${y}px, 0)` },
        { transform: "translate3d(0,0,0)" },
      ], { ...options, composite: "add" }));
      element.classList.remove("fw-heading-entrance-waiting");
      element.style.removeProperty("--fw-heading-entrance-y");
      // During a stagger delay the entire card, including its shadow, stays
      // hidden. It becomes visible as one layer on the first animation frame.
      const visibilityGate = cardReveal ? remember(element.animate([
        { visibility: "hidden", offset: 0 }, { visibility: "visible", offset: .001 }, { visibility: "visible", offset: 1 },
      ], options)) : null;
      element.classList.remove("fw-entrance-waiting");
      movement.addEventListener("finish", () => { element.dataset.motionState = "complete"; }, { once: true });
      // Hide/leave the viewport mid-entrance: freeze rather than finishing unseen.
      const id = element.dataset.nodeId ?? "";
      const animationAnchor = id === "212:99" || (heroStatsCards.has(id) && id.startsWith("212:")) ? query("212:101") ?? element
        : id === "278:3052" || heroStatsCards.has(id) ? query("278:3054") ?? element
        : element.closest<HTMLElement>(anchorSelector) ?? element;
      const groupAnimations = entrancesInFlight.get(animationAnchor) ?? [];
      groupAnimations.push(movement);
      if (visibilityGate) groupAnimations.push(visibilityGate);
      entrancesInFlight.set(animationAnchor, groupAnimations);
      return movement;
    };
    const entrancesInFlight = new Map<Element, Animation[]>();
    const sync = () => {
      for (const [anchor, animations] of [...loops, ...entrancesInFlight]) {
        for (const animation of animations) {
          if (animation.playState === "finished" || animation.playState === "idle") continue;
          if (visible.has(anchor) && !document.hidden) animation.play(); else animation.pause();
        }
      }
      if (counterJobs.size && !counterFrame && !document.hidden && [...counterJobs.keys()].some(element => visible.has(element))) {
        const now = performance.now();
        for (const [element, job] of counterJobs) job.start = now - Number(element.dataset.countProgress ?? 0) * 2400;
        counterFrame = requestAnimationFrame(tickCounters);
      }
    };
    const tickCounters = (now: number) => {
      counterFrame = 0;
      for (const [element, job] of counterJobs) {
        // Reset the timestamp while hidden to prevent a jump on return.
        if (document.hidden || !visible.has(element)) { job.start = now - (Number(element.dataset.countProgress ?? 0) * 2400); continue; }
        const t = Math.min(1, Math.max(0, (now - job.start) / 2400));
        element.dataset.countProgress = String(t);
        const precision = job.decimals ?? 0;
        const current = job.value * (1 - Math.pow(1 - t, 3));
        job.visual.textContent = (job.prefix ?? "") + current.toFixed(precision) + job.suffix;
        if (t === 1) { counterJobs.delete(element); element.dataset.countState = "complete"; job.finish?.(); }
      }
      if (counterJobs.size && !document.hidden && [...counterJobs.keys()].some(element => visible.has(element))) counterFrame = requestAnimationFrame(tickCounters);
    };
    const startCounter = (element: HTMLElement) => {
      if (counted.current.has(element)) return;
      const full = element.textContent?.trim() ?? "";
      const match = /^(\d+(?:\.\d+)?)([%xh])$/.exec(full);
      if (!match) return;
      counted.current.add(element);
      const original = Array.from(element.childNodes);
      const visual = document.createElement("span");
      visual.setAttribute("aria-hidden", "true");
      visual.textContent = "0" + match[2];
      const accessible = document.createElement("span");
      accessible.className = "sr-only";
      accessible.textContent = full;
      element.replaceChildren(visual, accessible);
      element.dataset.countState = "playing";
      undo.push(() => { element.replaceChildren(...original); delete element.dataset.countProgress; element.dataset.countState = "complete"; });
      counterJobs.set(element, { start: performance.now() + 240, value: Number(match[1]), suffix: match[2], decimals: match[1].split(".")[1]?.length ?? 0, visual });
      if (!counterFrame) counterFrame = requestAnimationFrame(tickCounters);
    };
    // Separate observers: entrances wait until 35% of the card is in the clear
    // reading area; ambient loops only need to be on screen to resume.
    const entranceObserver = new IntersectionObserver(entries => {
      for (const entry of entries) {
        // The dashboard is intentionally cropped on narrow phones, so its
        // visible area ratio is small even while the floating card is on screen.
        const mobileHero = isMobile && innerWidth >= 375 && innerWidth <= 696 && entry.target === query("278:3054");
        if (!entry.isIntersecting || entry.intersectionRatio < (mobileHero ? 0.08 : 0.35)) continue;
        if (entry.target.matches(metricSelector)) startCounter(entry.target as HTMLElement);
        else {
          for (const target of groups.get(entry.target) ?? []) {
            const appearance = reveal(target.element, target.spec);
            const analytics = analyticsGroups.get(target.element);
            if (!analytics || counted.current.has(target.element)) continue;
            counted.current.add(target.element);
            let zerosVisible = false;
            const showZeros = () => {
              if (disposed || zerosVisible) return;
              zerosVisible = true;
              for (const counter of analytics) {
                counter.element.textContent = counter.prefix + (0).toFixed(counter.decimals) + counter.suffix;
                counter.element.dataset.countState = "waiting";
                counter.show();
              }
            };
            const startAnalytics = () => {
              if (disposed) return;
              showZeros();
              for (const counter of analytics) {
                counter.element.dataset.countState = "playing";
                counterJobs.set(counter.element, { start: performance.now() + 240, value: counter.value, prefix: counter.prefix,
                  suffix: counter.suffix, decimals: counter.decimals, visual: counter.element, finish: counter.finish });
              }
              if (!counterFrame) counterFrame = requestAnimationFrame(tickCounters);
            };
            if (appearance) {
              // Reveal the zero state with its card, then start counting when
              // that card's entrance finishes, including any viewport pause.
              const awaitFirstFrame = () => {
                if (disposed || zerosVisible) return;
                if (appearance.playState === "paused" && !visible.has(entry.target)) return;
                const time = Number(appearance.currentTime ?? 0);
                if (time >= (target.spec.delay ?? 0) + 1 || appearance.playState === "finished") showZeros();
                else requestAnimationFrame(awaitFirstFrame);
              };
              requestAnimationFrame(awaitFirstFrame);
              appearance.addEventListener("finish", startAnalytics, { once: true });
            } else startAnalytics();
          }
        }
      }
    }, { threshold: [0, 0.35], rootMargin: `-24px 0px -${Math.round(innerHeight * 0.18)}px 0px` });
    const visibilityObserver = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) visible.add(entry.target); else visible.delete(entry.target);
      }
      sync();
    }, { threshold: 0 });
    // Hide the baked-in cart at the bottom of the original menu screenshot.
    // This leaves a plain white surface while the separate white panel AND
    // green button reveal together. The original bitmap is never edited.
    for (const [imageId, panelId] of [["212:314", "212:315"], ["278:3409", "278:3410"]]) {
      const image = query(imageId);
      const panel = query(panelId);
      if (!image || !panel) continue;
      const imageBounds = image.getBoundingClientRect();
      const panelBounds = panel.getBoundingClientRect();
      if (!imageBounds.height) continue;
      const bottom = Math.max(0, (imageBounds.bottom - panelBounds.top) / imageBounds.height * 100);
      const original = image.style.clipPath;
      image.style.clipPath = `inset(0 0 ${bottom}% 0)`;
      undo.push(() => { image.style.clipPath = original; });
    }
    for (const [id, variant] of [["212:445", "summary"], ["278:3589", "summary"],
      ["212:152", "summary"], ["212:155", "bookings"], ["278:3105", "bookings"],
      ["212:443", "bookings"], ["278:3587", "bookings"]] as const) {
      const card = query(id);
      const image = card?.querySelector("img");
      if (!card || !image || counted.current.has(card)) continue;
      const mounted = mountAnalyticsCounters(card, image, variant);
      analyticsGroups.set(card, mounted.counters);
      undo.push(mounted.cleanup);
      for (const counter of mounted.counters) visibilityObserver.observe(counter.element);
    }
    for (const anchor of groups.keys()) { entranceObserver.observe(anchor); visibilityObserver.observe(anchor); }
    for (const element of canvas.querySelectorAll<HTMLElement>(metricSelector)) {
      entranceObserver.observe(element); visibilityObserver.observe(element);
    }
    const addLoop = (element: HTMLElement, frames: Keyframe[], duration: number, composite: CompositeOperation = "add", delay = 0) => {
      const animation = remember(element.animate(frames, { duration, delay, iterations: Infinity, easing: "ease-in-out", composite }));
      animation.pause();
      loops.set(element, [...(loops.get(element) ?? []), animation]);
      visibilityObserver.observe(element);
    };
    // Repeat each existing sequence once on its incoming side. Moving by the
    // exact sequence pitch makes the end frame identical to the start frame.
    // Upper/lower rows move right; the middle row moves left, at constant speed.
    for (const [id, direction] of [["212:366", 1], ["212:338", -1], ["212:397", 1],
      ["278:3327", 1], ["278:3299", -1], ["278:3358", 1]] as const) {
      const row = query(id);
      if (!row) continue;
      const cards = Array.from(row.children).filter((node): node is HTMLElement => node instanceof HTMLElement);
      const gap = parseFloat(getComputedStyle(row).columnGap) || 0;
      const widths = cards.map(card => parseFloat(getComputedStyle(card).width));
      const pitch = widths.reduce((sum, width) => sum + width, 0) + gap * cards.length;
      if (!Number.isFinite(pitch) || pitch <= 0) continue;
      let cursor = 0;
      const copies: HTMLElement[] = [];
      cards.forEach((card, index) => {
        const copy = card.cloneNode(true) as HTMLElement;
        for (const node of [copy, ...copy.querySelectorAll<HTMLElement>("*")]) {
          node.removeAttribute("id"); node.removeAttribute("data-node-id"); node.removeAttribute("data-motion-state");
        }
        copy.setAttribute("aria-hidden", "true");
        copy.inert = true;
        copy.dataset.motionClone = "true";
        Object.assign(copy.style, { position: "absolute", left: `${cursor - direction * pitch}px`, top: "0", width: `${widths[index]}px` });
        row.appendChild(copy);
        copies.push(copy);
        cursor += widths[index] + gap;
      });
      row.dataset.marqueeDirection = direction === 1 ? "right" : "left";
      row.dataset.marqueePitch = String(pitch);
      undo.push(() => { copies.forEach(copy => copy.remove()); delete row.dataset.marqueeDirection; delete row.dataset.marqueePitch; });
      const animation = remember(row.animate([{ transform: "translateX(0)" }, { transform: `translateX(${direction * pitch}px)` }], {
        duration: pitch / (isMobile ? 22 : 32) * 1000,
        iterations: Infinity, easing: "linear", composite: "add",
      }));
      animation.pause();
      loops.set(row, [...(loops.get(row) ?? []), animation]);
      visibilityObserver.observe(row);
    }
    for (const element of canvas.querySelectorAll<HTMLElement>(".qr-scan-sweep")) {
      const distance = element.classList.contains("qr-scan-sweep-mobile") ? 21.5 : 30;
      addLoop(element, [{ transform: `translateY(${-distance}px)` }, { transform: `translateY(${distance}px)` }, { transform: `translateY(${-distance}px)` }], 6200);
    }
    // Only small existing text gradients and existing coloured borders repaint.
    for (const element of canvas.querySelectorAll<HTMLElement>('[style*="--section-label-gradient"]')) {
      element.classList.add("fw-gradient-text");
      undo.push(() => element.classList.remove("fw-gradient-text"));
      addLoop(element, [{ backgroundPosition: "0% 50%" }, { backgroundPosition: "100% 50%" }, { backgroundPosition: "0% 50%" }], gradientDuration, "replace");
    }
    for (const id of ["212:192", "278:3141", "212:278", "278:3208", "212:951", "278:3273"]) {
      const element = query(id);
      if (!element) continue;
      const className = id === "212:192" || id === "278:3141" ? "fw-gradient-panel" : "fw-gradient-border";
      element.classList.add(className);
      undo.push(() => element.classList.remove(className));
      const animation = remember(element.animate([{ "--fw-border-angle": "0deg" }, { "--fw-border-angle": "360deg" }], {
        duration: gradientDuration, iterations: Infinity, easing: "linear",
      }));
      animation.pause();
      loops.set(element, [...(loops.get(element) ?? []), animation]);
      visibilityObserver.observe(element);
    }
    // Reuse the exact Figma dotted ring as an alpha mask. Only its colour
    // angle moves; the dotted geometry and phone remain completely still.
    for (const id of ["212:471", "278:3437"]) {
      const frame = query(id);
      const ring = frame?.firstElementChild as HTMLElement | null;
      const image = ring?.querySelector("img");
      const source = image?.getAttribute("src");
      if (!ring || !source) continue;
      ring.classList.add("fw-gradient-ring");
      ring.style.setProperty("--fw-ring-mask", `url("${source}")`);
      undo.push(() => { ring.classList.remove("fw-gradient-ring"); ring.style.removeProperty("--fw-ring-mask"); });
      const animation = remember(ring.animate([{ "--fw-border-angle": "0deg" }, { "--fw-border-angle": "360deg" }], {
        duration: gradientDuration, iterations: Infinity, easing: "linear",
      }));
      animation.pause();
      loops.set(ring, [...(loops.get(ring) ?? []), animation]);
      visibilityObserver.observe(ring);
    }
    // Partition the original 15px repeating motif into four disjoint tile
    // groups. Animate only opacity: no extra triangles or moving background.
    const patterns = [query("212:559"), ...canvas.querySelectorAll<HTMLElement>("[data-motion-pattern]")]
      .filter((element): element is HTMLElement => Boolean(element));
    for (const pattern of patterns) if (CSS.supports("mask-image", "conic-gradient(#000, transparent)")) {
      const original = pattern.style.backgroundImage;
      const style = getComputedStyle(pattern);
      const backgroundImage = style.backgroundImage;
      const backgroundSize = style.backgroundSize;
      const layers: HTMLElement[] = [];
      pattern.style.backgroundImage = "none";
      for (let index = 0; index < 4; index++) {
        const layer = document.createElement("div");
        layer.setAttribute("aria-hidden", "true");
        layer.dataset.patternTwinkle = String(index);
        const position = `${(index % 2) * 15}px ${Math.floor(index / 2) * 15}px`;
        Object.assign(layer.style, {
          position: "absolute", inset: "0", pointerEvents: "none",
          backgroundImage, backgroundSize, backgroundPosition: "0 0",
          maskImage: "conic-gradient(#000 0deg 90deg, transparent 90deg 360deg)",
          maskSize: "30px 30px", maskPosition: position, maskRepeat: "repeat",
          webkitMaskImage: "conic-gradient(#000 0deg 90deg, transparent 90deg 360deg)",
          webkitMaskSize: "30px 30px", webkitMaskPosition: position, webkitMaskRepeat: "repeat",
        });
        pattern.append(layer); layers.push(layer);
        addLoop(layer, [
          { opacity: 0, offset: 0 }, { opacity: 1, offset: 0.3 },
          { opacity: 0.25, offset: 0.62 }, { opacity: 0, offset: 0.82 }, { opacity: 0, offset: 1 },
        ], 4800 + index * 800, "replace", -index * 1100);
      }
      undo.push(() => { pattern.style.backgroundImage = original; layers.forEach(layer => layer.remove()); });
    }
    document.addEventListener("visibilitychange", sync);
    return () => {
      disposed = true;
      entranceObserver.disconnect(); visibilityObserver.disconnect();
      document.removeEventListener("visibilitychange", sync);
      cancelAnimationFrame(counterFrame);
      for (const animation of owned) animation.cancel();
      for (const restore of undo) restore();
      for (const targets of groups.values()) for (const { element } of targets) delete element.dataset.motionState;
    };
  }, [root, isMobile, paused, reduced, suspended]);

  return (
    <>
      {!reduced && !suspended && (
        <button className="motion-toggle" type="button" aria-pressed={paused}
          onClick={() => setPaused(value => !value)}>
          {paused ? "Resume animations" : "Pause animations"}
        </button>
      )}
    </>
  );
}
