import "./booking-illustration.css";
import type { Metadata } from "next";
import "./globals.css";
import "./responsive.css";
import "./motion.css";
import "./testimonials.css";

export const metadata: Metadata = {
  title: "Fairwayze | Run screen golf smarter",
  description: "Everything you need to manage bookings, sell memberships, and grow your screen golf venue.",
  openGraph: {
    title: "Fairwayze | Run screen golf smarter",
    description: "Everything you need to manage bookings, sell memberships, and grow your venue.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><head>
    <link rel="preload" href="/fonts/PlusJakartaSans-Regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
    <link rel="preload" href="/fonts/PlusJakartaSans-SemiBold.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
    <style>{"html,body{font-family:'Plus Jakarta Sans',Arial,sans-serif}"}</style>
  </head><body>{children}</body></html>;
}
