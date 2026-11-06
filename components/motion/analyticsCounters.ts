/** Original bitmap coordinates: public/assets/a6e70.png, 2558 × 1714.
 * Cover only selected values while counting; reveal the unchanged bitmap
 * afterwards. Labels, 1h, trend icons and chart stay intact. */
export type AnalyticsCounter = {
  element: SVGTextElement;
  value: number;
  prefix: string;
  suffix: string;
  decimals: number;
  show: () => void;
  finish: () => void;
};

type CounterSpec = { value: number; prefix: string; suffix: string; decimals: number; x: number; y: number; size: number; color: string; box: number[]; background?: string };
const values: CounterSpec[] = [
  { value: 62.14, prefix: "$", suffix: "", decimals: 2, x: 2012, y: 824, size: 60, color: "#1b2029", box: [2011, 770, 202, 64] },
  { value: 4.5, prefix: "", suffix: "%", decimals: 1, x: 2263, y: 794, size: 28, color: "#0b7547", box: [2262, 768, 75, 31] },
  { value: 44.81, prefix: "$", suffix: "", decimals: 2, x: 2012, y: 996, size: 60, color: "#1b2029", box: [2011, 942, 202, 64] },
  { value: 5.6, prefix: "", suffix: "%", decimals: 1, x: 2267, y: 966, size: 28, color: "#0b7547", box: [2267, 940, 73, 31] },
  { value: 39, prefix: "", suffix: "", decimals: 0, x: 2092, y: 1168, size: 60, color: "#1b2029", box: [2091, 1118, 79, 55] },
  { value: 4.8, prefix: "", suffix: "%", decimals: 1, x: 2277, y: 1138, size: 28, color: "#0b7547", box: [2276, 1112, 75, 31] },
];

const bookingValues: CounterSpec[] = [
  { value: 396, prefix: "", suffix: "", decimals: 0, x: 698, y: 1366, size: 60, color: "#1b2029", box: [696, 1315, 126, 58], background: "#fff" },
  { value: 4.8, prefix: "", suffix: "%", decimals: 1, x: 870, y: 1355, size: 28, color: "#0b7547", box: [870, 1326, 78, 34], background: "#fff" },
];

export function mountAnalyticsCounters(card: HTMLElement, image: HTMLImageElement, variant: "summary" | "bookings" = "summary") {
  const ns = "http://www.w3.org/2000/svg";
  const overlay = document.createElementNS(ns, "svg");
  overlay.setAttribute("viewBox", "0 0 2558 1714");
  overlay.setAttribute("preserveAspectRatio", "none");
  overlay.setAttribute("class", image.getAttribute("class") ?? "");
  overlay.setAttribute("aria-hidden", "true");
  overlay.setAttribute("data-analytics-overlay", variant);
  overlay.style.pointerEvents = "none";
  const counters: AnalyticsCounter[] = (variant === "bookings" ? bookingValues : values).map(spec => {
    const group = document.createElementNS(ns, "g");
    group.setAttribute("visibility", "hidden");
    const rect = document.createElementNS(ns, "rect");
    ["x", "y", "width", "height"].forEach((name, index) => rect.setAttribute(name, String(spec.box[index])));
    rect.setAttribute("fill", spec.background ?? "#fafafa");
    const text = document.createElementNS(ns, "text");
    text.setAttribute("x", String(spec.x)); text.setAttribute("y", String(spec.y));
    text.setAttribute("fill", spec.color); text.setAttribute("font-size", String(spec.size));
    text.setAttribute("font-family", "Inter, Arial, sans-serif");
    text.setAttribute("font-weight", spec.size === 60 ? "600" : "500");
    text.setAttribute("letter-spacing", spec.size === 60 ? "-1.3" : "0");
    text.setAttribute("data-analytics-value", spec.prefix + spec.value.toFixed(spec.decimals) + spec.suffix);
    text.textContent = spec.prefix + spec.value.toFixed(spec.decimals) + spec.suffix;
    group.append(rect, text); overlay.append(group);
    return { element: text, value: spec.value, prefix: spec.prefix, suffix: spec.suffix, decimals: spec.decimals,
      show: () => group.setAttribute("visibility", "visible"), finish: () => group.setAttribute("visibility", "hidden") };
  });
  image.parentElement?.append(overlay);
  const accessible = document.createElement("span");
  accessible.className = "sr-only";
  accessible.textContent = variant === "bookings" ? "Total bookings: 396, up 4.8%." : "Average customer spend: $62.14, up 4.5%. Average booking price: $44.81, up 5.6%. Average booking duration: 1h 39m, up 4.8%.";
  card.append(accessible);
  return { counters, cleanup: () => { overlay.remove(); accessible.remove(); } };
}
