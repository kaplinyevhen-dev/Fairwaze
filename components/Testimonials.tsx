"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import type { KeyboardEvent, PointerEvent } from "react";
import Image from "next/image";

// Design content only: these people, venues, quotes and results are fictional.
const stories = [
  {
    name: "Maya Patel", role: "Owner, The Green Room", photo: "maya",
    quote: "Our evenings used to end with a spreadsheet and a pile of receipts. Now bookings and payments stay together, and closing takes minutes. I finally spend the last hour of the day talking to players instead of checking transactions.",
    metrics: [["42%", "Less time closing up"], ["18%", "More repeat bookings"], ["6h", "Saved each week"]],
  },
  {
    name: "Daniel Brooks", role: "General Manager, Northline Golf", photo: "daniel",
    quote: "We wanted to open earlier without adding another shift. Players can book, unlock their bay and start playing on their own. The quiet morning hours have become a useful part of our business, with the team still in control from the dashboard.",
    metrics: [["24%", "More off-peak bookings"], ["12h", "Extra access each day"], ["31%", "Lower staffing overhead"]],
  },
  {
    name: "Sophie Laurent", role: "Co-founder, Birdie Social Club", photo: "sophie",
    quote: "Memberships used to take a conversation at the desk and a manual follow-up. Now a player can join while booking their next session. We have a much clearer view of our regulars, and our team has more time to make every visit feel personal.",
    metrics: [["21%", "Higher monthly revenue"], ["2.4x", "More memberships sold"], ["8h", "Less admin each week"]],
  },
  {
    name: "Alex Chen", role: "Operations Director, Range Eight", photo: "alex",
    quote: "Food orders used to interrupt lessons and league nights. Players now order from their bay, and the team sees exactly where each order belongs. Service feels calmer, and we can keep the round moving while guests enjoy another drink.",
    metrics: [["28%", "Higher food & drink spend"], ["35%", "Faster order handling"], ["16%", "More orders per visit"]],
  },
  {
    name: "Rachel Morgan", role: "Founder, Fairline Indoor Golf", photo: "rachel",
    quote: "The useful surprise was seeing where our players actually come from. We stopped guessing which neighbourhoods to reach and built offers around the quieter slots. It is easier to make a small decision when the numbers are already in front of you.",
    metrics: [["19%", "Better bay utilisation"], ["26%", "More weekday sessions"], ["32%", "Less marketing spend"]],
  },
];

type Drag = { id: number; x: number; y: number; start: number; lastX: number; time: number; velocity: number; scale: number; moved: boolean };

export default function Testimonials({ mobile = false }: { mobile?: boolean }) {
  const viewport = useRef<HTMLDivElement>(null);
  const drag = useRef<Drag | null>(null);
  const ignoreClick = useRef(false);
  const activeRef = useRef(2);
  const scrollFrame = useRef(0);
  const [active, setActive] = useState(2);

  const nearest = (position: number) => {
    const element = viewport.current;
    if (!element) return 0;
    const cards = Array.from(element.children) as HTMLElement[];
    return cards.reduce((best, card, index) =>
      Math.abs(card.offsetLeft + card.offsetWidth / 2 - position - element.clientWidth / 2) <
      Math.abs(cards[best].offsetLeft + cards[best].offsetWidth / 2 - position - element.clientWidth / 2) ? index : best, 0);
  };

  const center = (index: number, animate = true) => {
    const element = viewport.current;
    const card = element?.children[index] as HTMLElement | undefined;
    if (!element || !card) return;
    const still = matchMedia("(prefers-reduced-motion: reduce)").matches || document.querySelector('.motion-toggle[aria-pressed="true"]');
    element.scrollTo({ left: card.offsetLeft + card.offsetWidth / 2 - element.clientWidth / 2, behavior: animate && !still ? "smooth" : "instant" });
  };

  useLayoutEffect(() => {
    const element = viewport.current;
    if (!element) return;
    const resize = () => {
      const card = element.children[activeRef.current] as HTMLElement;
      element.scrollLeft = card.offsetLeft + card.offsetWidth / 2 - element.clientWidth / 2;
    };
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => () => cancelAnimationFrame(scrollFrame.current), []);

  const onScroll = () => {
    if (scrollFrame.current) return;
    scrollFrame.current = requestAnimationFrame(() => {
      scrollFrame.current = 0;
      const index = nearest(viewport.current?.scrollLeft ?? 0);
      activeRef.current = index;
      setActive(index);
    });
  };

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (!event.isPrimary || event.button !== 0 || event.pointerType === "touch") return;
    const element = event.currentTarget;
    ignoreClick.current = false;
    drag.current = { id: event.pointerId, x: event.clientX, y: event.clientY, start: element.scrollLeft, lastX: event.clientX, time: event.timeStamp, velocity: 0, scale: element.getBoundingClientRect().width / element.offsetWidth, moved: false };
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const state = drag.current;
    if (!state || state.id !== event.pointerId) return;
    const dx = event.clientX - state.x;
    const dy = event.clientY - state.y;
    if (!state.moved) {
      if (Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > 7) { drag.current = null; return; }
      if (Math.abs(dx) < 7) return;
      state.moved = true;
      ignoreClick.current = true;
      event.currentTarget.setPointerCapture(event.pointerId);
      event.currentTarget.classList.add("is-dragging");
    }
    event.preventDefault();
    const elapsed = Math.max(1, event.timeStamp - state.time);
    state.velocity = (event.clientX - state.lastX) / elapsed / state.scale;
    state.lastX = event.clientX;
    state.time = event.timeStamp;
    event.currentTarget.scrollLeft = state.start - dx / state.scale;
    event.currentTarget.style.setProperty("--drag-tilt", `${Math.max(-2.2, Math.min(2.2, dx / 85))}deg`);
  };

  const endDrag = (event: PointerEvent<HTMLDivElement>) => {
    const state = drag.current;
    if (!state || state.id !== event.pointerId) return;
    drag.current = null;
    event.currentTarget.classList.remove("is-dragging");
    event.currentTarget.style.removeProperty("--drag-tilt");
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
    if (state.moved) {
      const velocity = event.timeStamp - state.time < 100 && event.type !== "pointercancel" ? state.velocity : 0;
      center(nearest(event.currentTarget.scrollLeft - velocity * 170));
    }
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const next = event.key === "ArrowRight" ? Math.min(stories.length - 1, active + 1) :
      event.key === "ArrowLeft" ? Math.max(0, active - 1) : event.key === "Home" ? 0 : event.key === "End" ? stories.length - 1 : -1;
    if (next < 0) return;
    event.preventDefault();
    center(next);
  };

  return (
    <div className={`testimonials-section${mobile ? " testimonials-mobile" : ""}`} data-node-id={mobile ? "278:3508" : "236:17"}>
      <div className="testimonials-heading">
        <p className="testimonials-eyebrow" style={{ backgroundImage: "var(--section-label-gradient)" }}>testimonials</p>
        <h2 data-node-id={mobile ? "278:3511" : "212:592"}>What our clients say</h2>
      </div>
      <div className="testimonials-viewport" ref={viewport} role="region" aria-roledescription="carousel" aria-label="Client stories. Drag to explore, or use the left and right arrow keys." tabIndex={0}
        onScroll={onScroll} onKeyDown={onKeyDown} onPointerDown={onPointerDown} onPointerMove={onPointerMove}
        onPointerUp={endDrag} onPointerCancel={endDrag} onLostPointerCapture={endDrag} onPointerLeave={event => { if (drag.current && !drag.current.moved) drag.current = null; else if (event.buttons === 0) endDrag(event); }}>
        {stories.map((story, index) => (
          <article className={`testimonial-card${active === index ? " is-active" : ""}`} key={story.name}
            aria-label={`${index + 1} of ${stories.length}: ${story.name}`} aria-current={active === index ? "true" : undefined}
            onClick={() => { if (!ignoreClick.current) center(index); }}>
            <div className="testimonial-quote-panel">
              <blockquote>{story.quote}</blockquote>
              <div className="testimonial-author">
                <Image src={`/assets/testimonial-${story.photo}.png`} alt="" width={48} height={48} sizes="48px" draggable={false} loading="lazy" />
                <div><p>{story.name}</p><p>{story.role}</p></div>
              </div>
              <Image className="testimonial-quote-mark" src="/assets/7d454.svg" alt="" width={36} height={36} draggable={false} />
            </div>
            <div className="testimonial-metrics" data-name="Statistics Row">
              {story.metrics.map(([value, label]) => <div key={label}><p>{value}</p><p>{label}</p></div>)}
            </div>
          </article>
        ))}
      </div>
      <p className="sr-only" aria-live="polite" aria-atomic="true">Story {active + 1} of {stories.length}: {stories[active].name}</p>
    </div>
  );
}
